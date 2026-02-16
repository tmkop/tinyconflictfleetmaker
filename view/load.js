window.onload = (e) => {

    const params = new URLSearchParams(window.location.search);
    fleetID = params.get("fleet");

    if(!fleetID){
        window.location.href = "/new/";
    }

    const fleetData = localStorage.getItem(fleetID);
    console.log("Loaded from localStorage:", fleetData);

};