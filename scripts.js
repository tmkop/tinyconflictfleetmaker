const main = document.getElementById('main');
document.addEventListener('DOMContentLoaded', () => {
    addPage('title');
    addPage('faction-builder');
    addPage('ship-page');
    updateFaction();
});

/**
 * Adds a page to the document and loads the page template provided
 * @param {String} templateName the template name to load, appended to 'content-template-'
 */
function addPage(templateName) {
    const tpl = document.getElementById('page-template');


    // Extract the page element from the fragment so we can attach handlers
    const pageElement = tpl.content.cloneNode(true).querySelector('.page');

    // Append the page element (this removes it from the fragment)
    main.appendChild(pageElement);

    const contentTemplate = document.getElementById('content-template-' + templateName);
    const contentEl = pageElement.querySelector('.page-content');

    loadTemplate(contentEl, contentTemplate)
}

/**
 * Copies the innerHTML of the template and replaces the content of the container
 * @param {Element} container The element whos innerHTML will be set
 * @param {Element} template The element who contains the innerHTML to be copied
 */
function loadTemplate(container, template) {
    container.innerHTML = template.innerHTML;
}

/**
 * Checks the current faction selected and updates the faction attribute in main
 */
function updateFaction() {
    const faction = document.getElementById("faction-selector").value;
    main.setAttribute("faction", faction);

    //need to check if any faction-specific stuff will be removed and alert about it
}

/**
 * Adds a new ship to a page
 * @param {Element} shipCont The container in which to place the new ship
 */
async function addNewShip(shipCont) {
    let hull = JSON.parse(await openSelectionDialogue("hulls",[]));
    if(!hull){
        return;
    }
    loadTemplate(shipCont, document.getElementById("content-template-ship"));
    shipCont.querySelector(".ship-type").textContent = hull.name;
    shipCont.querySelector(".ship-size").textContent = hull.size;
    shipCont.querySelector(".ship-rp").textContent = hull.RP;

    shipCont.querySelector(".ship-stat-CR").textContent = hull.stats.CR;
    shipCont.querySelector(".ship-stat-HP").textContent = hull.stats.HP;
    shipCont.querySelector(".ship-stat-SP").textContent = hull.stats.SP;
    shipCont.querySelector(".ship-stat-SR").textContent = hull.stats.SR;

    let slotCont = shipCont.querySelector(".ship-slot-cont");
    for(let s of hull.slots){
        let slot = document.createElement("div");
        slot.setAttribute("data-slot-data",JSON.stringify(s));
        slotCont.appendChild(slot);

        resetSlot(slot);

    }
}

/**
 * Resets a ship-slot to its default, unset, state
 * @param {*} slot div.ship-slot to reset
 */
function resetSlot(slot){
    let s = JSON.parse(slot.getAttribute("data-slot-data"));
    loadTemplate(slot,document.getElementById("content-template-ship-slot"));

    let slotSelector = slot.querySelector(".slot-selector");
    if(s.type == "Named"){
        slotSelector.textContent = s.name;
    }else{
        slotSelector.textContent = "";
        switch(s.type){
            case "CA":
                slotSelector.textContent += "CA";
                break;
            case "AR":
            case "OS":
                slotSelector.textContent += "S"+s.size+s.type;
                break;
            default:
                slotSelector.textContent += s.number+"S"+s.size+s.type
        }
    }
    slotSelector.onclick = function(){addSlot(this,s)};
}

/**
 * Prompt with the modal to fill the slot
 * @param {*} e the slot container
 * @param {*} s the json data for the slot
 */
async function addSlot(e,s){
    let slotContainer = e.closest(".ship-slot");
    let slotContent = JSON.parse(await openSelectionDialogue(s.type,[]));
    
    if(!slotContent){
        return;
    }

    let templateType;
    switch(s.type){
        case "OS":
        case "AR":
        case "CA":
            templateType = "single-stat";
            break;
        default:
            templateType = s.type;
    }

    let template = document.getElementById("ship-template-"+templateType);

    loadTemplate(slotContainer,template);

    slotLoads[s.type](slotContainer,slotContent);
    updateManifest();
}

/**
 * Opens the modal with the options present in the selected category with filters applied
 * @param {String} dataCategory hulls, FW, BW, SW, AA, CA, OS, WS, HS
 */
async function openSelectionDialogue(dataCategory){
    //TODO add filters
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-options");
    modalContent.innerHTML = "";

    const data = DATA[dataCategory];
    const dataTemplate = document.getElementById("modal-"+dataCategory);

    for(let d of data){
        let obj = document.createElement("div");
        loadTemplate(obj,dataTemplate);
        modalContent.appendChild(obj);
        modalLoads[dataCategory](obj,d);
        obj.onclick = function(){submitModal(JSON.stringify(d))};
    }

    modal.classList.toggle("visible",true);
    
    return await waitForModal();
}

/**
 * Holds the resolver until the modal is either closed or makes a selection
 */
let continueSelection; 

/**
 * Pauses the selectionDialogue function 
 */
function waitForModal() {
  return new Promise(resolve => {
    continueSelection = resolve;
  });
}

/**
 * Resolves the promise to waitForModal()
 */
function submitModal(value) {
  if (continueSelection) {
    continueSelection(value);
    continueSelection = null; 
    closeModal();
  }
}


/**
 * Closes the modal
 * Used in the onclick of the modal close button
 */
function closeModal(){
    const modal = document.getElementById("modal");
    modal.classList.toggle("visible",false);
    submitModal(null);
}

/**
 * A dictionary of functions to load different types of data into the modal content.
 * All functions contained within follow the format of (object to load data into,data)
 * and mutate the object provided
 */
let modalLoads = {
    "hulls":(obj,d)=>{
        obj.querySelector(".modal-hull-name").textContent = d.name;
        obj.querySelector(".modal-hull-size").textContent = "Size "+d.size;
        obj.querySelector(".modal-hull-RP").textContent = "RP: "+d.RP;

        obj.querySelector(".modal-hull-CR").textContent = d.stats.CR;
        obj.querySelector(".modal-hull-HP").textContent = d.stats.HP;
        obj.querySelector(".modal-hull-SP").textContent = d.stats.SP;
        obj.querySelector(".modal-hull-SR").textContent = d.stats.CR;
        

        const expandedInfo = obj.querySelector(".modal-hull-expanded-info")
        
        const slotHeader = document.createElement("h2");
        slotHeader.textContent = "Slots:"
        expandedInfo.appendChild(slotHeader);



        d.slots.forEach((s)=>{
            let slot = document.createElement("p");
            if(s.type == "Named"){
                slot.textContent = s.name;
            }else{
                slot.textContent = ""+s.number+"S"+s.size+s.type;
            }

            expandedInfo.appendChild(slot);
        });
        const abilitesHeader = document.createElement("h2");
        abilitesHeader.textContent = "Abilities:"
        if(d.text[0].length > 0){
        expandedInfo.appendChild(document.createElement("hr"));
            expandedInfo.appendChild(abilitesHeader);
        }
        d.text.forEach((t)=>{
            let textLine = document.createElement("p")
            let textSplit = t.split(":");
            if(textSplit.length == 1){
                textLine.textContent = t;
            }else{
                textLine.innerHTML = "<b>"+textSplit[0]+"</b>:<br>"+textSplit[1];

            }
            expandedInfo.appendChild(textLine);
        });
        
    },
    "OS":(obj,d)=>{
        obj.querySelector(".modal-os-name").textContent = d.name;
        obj.querySelector(".modal-os-RP").textContent = d.RP;
        obj.querySelector(".modal-os-acc").textContent = d.acc;
        obj.querySelector(".modal-os-ability").textContent = d.ability;
    },
    "AR":(obj,d)=>{
        obj.querySelector(".modal-ar-name").textContent = d.name;
        obj.querySelector(".modal-ar-RP").textContent = d.RP;
        obj.querySelector(".modal-ar-ar").textContent = d.ar;
        obj.querySelector(".modal-ar-ability").textContent = d.ability;
    },
    "CA":(obj,d)=>{
        obj.querySelector(".modal-ca-name").textContent = d.name;
        obj.querySelector(".modal-ca-RP").textContent = d.RP;
        obj.querySelector(".modal-ca-mr").textContent = d.mr;
        obj.querySelector(".modal-ca-ability").textContent = d.ability;
    },
    "FW":(obj,d)=>{

    },
    "BW":(obj,d)=>{

    },
    "AA":(obj,d)=>{

    },
    "SW":(obj,d)=>{

    },
    "MS":(obj,d)=>{
        obj.querySelector(".modal-ms-name").textContent = d.name;
        obj.querySelector(".modal-ms-RP").textContent = d.RP;
        obj.querySelector(".modal-ms-ability").textContent = d.ability;
    },
    "HS":(obj,d)=>{
        obj.querySelector(".modal-hs-name").textContent = d.name;
        obj.querySelector(".modal-hs-RP").textContent = d.RP;
        obj.querySelector(".modal-hs-ability").textContent = d.ability;
    }
}

/**
 * A dictionary of functions to load data into placed slots
 */
let slotLoads = {
    "OS":(obj,d)=>{
        obj.querySelector(".slot-name").textContent = d.name;
        obj.querySelector(".slot-stat").textContent = "Acc "+d.acc+"+";
        obj.querySelector(".slot-ability").textContent = d.ability;
        obj.querySelector(".slot-content").setAttribute("data-RP",d.RP);
    },
    "AR":(obj,d)=>{
        obj.querySelector(".slot-name").textContent = d.name;
        obj.querySelector(".slot-stat").textContent = "AR "+d.ar;
        obj.querySelector(".slot-ability").textContent = d.ability;
        obj.querySelector(".slot-content").setAttribute("data-RP",d.RP);
    },
    "CA":(obj,d)=>{
        obj.querySelector(".slot-name").textContent = d.name;
        obj.querySelector(".slot-stat").textContent = "MR "+d.mr;
        obj.querySelector(".slot-ability").textContent = d.ability;
        obj.querySelector(".slot-content").setAttribute("data-RP",d.RP);
    }
}

/**
 * Iterates through the ships and updates all running counters of RP.
 * It does this for each individual ship, then updates the manifest, then
 * updates the manifest total.
 */
function updateManifest(){
    //TODO: this
}