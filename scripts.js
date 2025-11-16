const main = document.getElementById('main');
document.addEventListener('DOMContentLoaded', () => {
    addPage('title');
    addPage('faction-builder');
    addPage('ship-page');
    updateFaction();
});

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

function loadTemplate(container, template) {
    container.innerHTML = template.innerHTML;
}

function updateFaction() {
    const faction = document.getElementById("faction-selector").value;
    main.setAttribute("faction", faction);

    //need to check if any faction-specific stuff will be removed and alert about it
}

function addNewShip(shipCont) {
    loadTemplate(shipCont, document.getElementById("content-template-ship"));
}

function updateShip(ship) {

}