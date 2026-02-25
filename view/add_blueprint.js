const shipCont = document.getElementById('ship-cont');

async function loadTemplate() {
  const res = await fetch('./blueprint.html');
  const html = await res.text();

  const temp = document.createElement('div');
  temp.innerHTML = html;

  const template = temp.querySelector('#ship-template');
  shipCont.appendChild(template.content.cloneNode(true));
}

document.getElementById("add-ship").addEventListener("click",(e)=>{
    // shipCont.append();
    loadTemplate();
});