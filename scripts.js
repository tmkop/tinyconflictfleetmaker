document.addEventListener('DOMContentLoaded', () => {
    addPage('title');
    addPage('ships');

});

function addPage(templateName) {
    const tpl = document.getElementById('page-template');

    const main = document.getElementById('main');

    // Extract the page element from the fragment so we can attach handlers
    const pageElement = tpl.content.cloneNode(true).querySelector('.page');

    // Append the page element (this removes it from the fragment)
    main.appendChild(pageElement);

    const contentTemplate = document.getElementById('content-template-'+templateName);
    const contentEl = pageElement.querySelector('.page-content');

    loadTemplate(contentEl,contentTemplate)

}



function loadTemplate(container,template){
    container.innerHTML = template.innerHTML;
}