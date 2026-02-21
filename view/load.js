window.onload = (e) => {

    const params = new URLSearchParams(window.location.search);
    fleetID = params.get("fleet");

    if(!fleetID){
        window.location.href = "/new/";
    }

    const fleetData = JSON.parse(localStorage.getItem(fleetID));
    console.log("Loaded from localStorage:", fleetData);


    document.getElementById("fleet-name").innerText = fleetData.name;
};