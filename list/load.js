window.onload = ()=>{
    for (let i = 0; i < localStorage.length; i++) {
        addFleetRow(localStorage.key(i));
    }
};