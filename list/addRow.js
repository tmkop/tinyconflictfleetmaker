function addFleetRow(fleetID) {
    const fleet = JSON.parse(localStorage.getItem(fleetID));

    const name = fleet["name"];
    const rpLimit = fleet["rpLimit"];
    const rp = fleet["rp"];
    const factionID = fleet["faction"];


    fetch('/data/factions.json')
        .then(response => response.json())
        .then(data => {
            let factionName = "ERROR";
            data.forEach(faction => {
                if (faction.id == factionID) {
                    factionName = faction.name;
                }
            });


            const list = document.getElementById("fleetList");

            const row = document.createElement("div");
            row.className = "list-group-item d-flex justify-content-between align-items-center";

            row.setAttribute("data-id", fleetID);

            row.innerHTML = `
        <div>
            <h5 class="mb-1">${name}</h5>
            <small>RP Limit: ${rpLimit} | RP: ${rp} | Faction: ${factionName}</small>
        </div>

        <div class="btn-group">
            <a href="/view/?fleet=${fleetID}" class="btn btn-sm btn-primary edit-btn">Open</a>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
        </div>
    `;

            row.querySelector(".delete-btn").addEventListener("click", () => {
                localStorage.removeItem(fleetID);
                location.reload(true);
            });

            list.appendChild(row);
        })
        .catch(err => console.error('Error loading JSON:', err));


}