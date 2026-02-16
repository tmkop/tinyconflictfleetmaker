document.getElementById("fleetForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop normal form submission

    // Grab values
    const fleetName = document.getElementById("fleetName").value;
    const faction = document.getElementById("factionType").value;
    const rpLimit = document.getElementById("rpLimit").value;

    const uuid = (() => Math.random().toString(36).substring(2, 7).toUpperCase())();
    
    const fleetID = fleetName+uuid;

    const fleetData = {
        "name":fleetName,
        "faction":faction,
        "rpLimit":rpLimit
    }

    localStorage.setItem(fleetID, JSON.stringify(fleetData));

    window.location.href = "/view/?fleet=" + fleetID;
});
