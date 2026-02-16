window.onload = () => {
        const factionDropdown = document.getElementById("factionType");

    fetch('/data/factions.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(faction=>{
                let option = document.createElement("option");
                option.value = faction["id"];
                option.innerText = faction["name"];

                factionDropdown.appendChild(option);
            });
        })
        .catch(err => console.error('Error loading JSON:', err));
};