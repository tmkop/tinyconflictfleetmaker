const menuPopup = document.getElementById("selection-menu");
let makeSelection;

function select(dom, type) {
    //clears out menupopup
    menuPopup.textContent = "";

    //pulls set of json objs based on type
    let jsonPath;
    switch (type) {
        case "blueprint":
            jsonPath = '/data/common/hulls.json';
    }
    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            //iterates through and adds dom elements generated from jsons
            data.forEach(item => {
                //behavior when adding options to selection menu
                let option = document.createElement("img");
                option.src = item.image;
                option.setAttribute("data-option", item.name);
                option.addEventListener('click',(e)=>{
                    makeSelection(e.target);
                });

                menuPopup.appendChild(option);
            });
                        
            makeSelection = (option)=>{
                menuPopup.textContent = "";
                menuPopup.close();
                console.log(menuPopup);

                let chosen_option = option.getAttribute("data-option");
                //behavior to check the selection and preform the selection replacement
                let chosen;
                data.forEach(item => {
                    if(item.name == chosen_option){
                        chosen = item;
                    }
                });
                dom.src = chosen.image;
            }
            //shows the menupopup
            menuPopup.show();
            
        })
        .catch(err => console.error('Error loading JSON:', err));
}

let mouseover = false;
menuPopup.addEventListener("mouseenter", () => mouseover = true);
menuPopup.addEventListener("mouseleave", () => mouseover = false);


document.addEventListener("wheel",(e)=>{
    if(mouseover){
        e.preventDefault();
        menuPopup.scrollLeft += e.deltaY;
    }
}, {passive: false});

//TODO add subcontainer of the menupopup that will allow for header and close button