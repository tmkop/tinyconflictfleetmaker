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
function addNewShip(shipCont) {
    let hull = openSelectionDialogue("hulls",[]);
    if(!hull){
        return;
    }

    loadTemplate(shipCont, document.getElementById("content-template-ship"));

}

/**
 * Opens the modal with the options present in the selected category with filters applied
 * @param {String} dataCategory hulls, FW, BW, SW, AA, CA, OS, WS, HS
 */
function openSelectionDialogue(dataCategory){
    //TODO add filters
    
}