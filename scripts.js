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
    let hull = await openSelectionDialogue("hulls",[]);
    if(!hull){
        return;
    }
    console.log(hull);
    loadTemplate(shipCont, document.getElementById("content-template-ship"));

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
        
    }
}