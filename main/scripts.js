document.querySelectorAll(".category-selector").forEach((el)=>el.addEventListener('click',(e)=>{
    const selectors = document.querySelectorAll('.category-selector');
    const contents = document.querySelectorAll('.category-content');

    selectors.forEach(selector => {
        selector.addEventListener('click', () => {
            const target = selector.getAttribute("data-unhide-id");
            selectors.forEach(t => t.classList.remove('selected-nav'));
            selector.classList.add('selected-nav');

            contents.forEach(c => {
                c.classList.toggle('selected-nav', c.id === target);
            });
        });
    });
}));

document.addEventListener('dblclick', function (event) {
    const target = event.target;

    // Check for a custom flag, e.g., data-deletable="true"
    if (target.getAttribute('data-dblclick-to-remove') === 'true') {
        target.remove(); // Deletes the element from the DOM
    }
});
function formatImageSrc(imgElement) {
    const src = imgElement.src;
    const fileName = src.substring(src.lastIndexOf('/') + 1);
    const baseName = fileName.substring(0, fileName.lastIndexOf('.'));
    const withSpaces = baseName.replace(/_/g, ' ');
    const capitalized = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);

    return capitalized;
}

function updateManifest(){
    const manifest = document.getElementById("manifest");
    manifest.innerHTML = `
        <br><br>
        <table class="manifest-table">
        <thead class="thick-font">
            <tr>
            <th>RP cost</th>
            <th>Hull type</th>
            <th>Name</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
    `;


    
    const ship_sockets = document.getElementsByClassName("socket");
    for(const socket of ship_sockets){
        const ship_hull = socket.querySelector(".placed-hull");
        if(ship_hull){
            const ship_label = socket.parentElement.children[0].children[+socket.getAttribute("data-socket-num")]
            const ship_name = ship_label.querySelector(".writable").value;
            const ship_rp_cont = ship_label.querySelector(".ship-rp-value");

            let hull_cost = ship_hull.getAttribute("data-rp");

            let rp = +hull_cost;

            let hull_slots = socket.querySelectorAll(".nodeSocket");
            for(const slot of hull_slots){
                let slot_mult = slot.getAttribute("data-rp-mult");
                let slot_data = slot.querySelector("img");
                if(slot_data){
                    let slot_cost = slot_data.getAttribute("data-rp");
                    rp += (+slot_mult * +slot_cost);
                }
            }
            ship_rp_cont.innerText = rp;

            const manifest_row = document.createElement('tr');

            const rpCostCell = document.createElement('td');
            rpCostCell.textContent = rp;
            manifest_row.appendChild(rpCostCell);

            const hullTypeCell = document.createElement('td');
            hullTypeCell.textContent = formatImageSrc(ship_hull);
            manifest_row.appendChild(hullTypeCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = ship_name;
            manifest_row.appendChild(nameCell);

            manifest.querySelector('tbody').appendChild(manifest_row);
        }
    }
}
function startdrag(e, elem) {
    e.preventDefault();

    // Clone the element
    const clone = elem.cloneNode(true);
    clone.classList.add("clone");

    // Remove any existing handlers from the clone
    clone.removeAttribute("onmousedown");

    document.body.appendChild(clone);

    // Position updater
    function moveAt(pageX, pageY) {
        clone.style.left = pageX + "px";
        clone.style.top = pageY + "px";
    }

    // Initial position
    moveAt(e.clientX, e.clientY);

    // Mouse move handler
    function onMouseMove(ev) {
        moveAt(ev.clientX, ev.clientY);
    }

    document.addEventListener("mousemove", onMouseMove);

    // Mouse up handler for the clone
    document.onmouseup = function(ev) {
        const elementsUnderCursor = document.elementsFromPoint(ev.clientX, ev.clientY);
        const socket = elementsUnderCursor.find(el => el.classList && el.classList.contains("socket"));
        if (socket) {
            const data = JSON.parse(clone.getAttribute("data-JSON"));
            const hull_cont = document.createElement("div");
            const hull = document.createElement("img");
            hull.setAttribute("src",clone.getAttribute("src"));
            hull.setAttribute("data-rp",data["RP"]);
            hull.setAttribute("draggable","false");
            hull.classList.add("placed-hull");
            socket.innerHTML="";
            hull_cont.classList.add("hull-cont")
            hull_cont.appendChild(hull);

            let hull_sockets = [];
            for(s of data["sockets"]){
                const nodeSocket = document.createElement("div");
                nodeSocket.setAttribute("data-rp-mult",s["number"]);
                nodeSocket.classList.add("nodeSocket");
                nodeSocket.classList.add(s.position.y);
                nodeSocket.classList.add(s.position.x);
                hull_cont.appendChild(nodeSocket);
            }

            socket.appendChild(hull_cont);
            updateManifest();
        }

        // Cleanup
        document.removeEventListener("mousemove", onMouseMove);
        clone.remove();
        document.onmouseup = undefined;
    };
}
function startdragNode(e, elem) {
    e.preventDefault();

    // Clone the element
    const clone = elem.cloneNode(true);
    clone.classList.add("cloneNode");

    // Remove any existing handlers from the clone
    clone.removeAttribute("onmousedown");

    document.body.appendChild(clone);

    // Position updater
    function moveAt(pageX, pageY) {
        clone.style.left = pageX + "px";
        clone.style.top = pageY + "px";
    }

    // Initial position
    moveAt(e.clientX, e.clientY);

    // Mouse move handler
    function onMouseMove(ev) {
        moveAt(ev.clientX, ev.clientY);
    }

    document.addEventListener("mousemove", onMouseMove);

    // Mouse up handler for the clone
    document.onmouseup = function(ev) {
        const elementsUnderCursor = document.elementsFromPoint(ev.clientX, ev.clientY);
        const nodeSocket = elementsUnderCursor.find(el => el.classList && el.classList.contains("nodeSocket"));
        if (nodeSocket) {
            const node = document.createElement("img");
            node.setAttribute("src",clone.getAttribute("src"));
            node.setAttribute("data-rp",clone.getAttribute("data-rp"));
            node.setAttribute("draggable","false");
            node.setAttribute("data-dblclick-to-remove",true);
            node.classList.add("placed-node");
            nodeSocket.innerHTML="";
            nodeSocket.appendChild(node);
        }

        // Cleanup
        document.removeEventListener("mousemove", onMouseMove);
        clone.remove();
        document.onmouseup = undefined;
        updateManifest();
    };
}
const ROW1 = "ROW1"; //= 106;
const ROW2 = "ROW2"; //= 160;
const ROW3 = "ROW3"; //= 220;
const ROW4 = "ROW4"; //= 279;
const LEFT_SHORT = "LEFT_SHORT"; //= 101;
const CENTER_SHORT = "CENTER_SHORT"; //= 271;
const RIGHT_SHORT = "RIGHT_SHORT"; //= 446;
const LEFT_LONG = "LEFT_LONG"; //= 128;
const RIGHT_LONG = "RIGHT_LONG"; //= 441;
const LEFT_SHORTOFFSET_LONG = "LEFT_SHORTOFFSET_LONG"; //= 301;
const LEFT_LONGOFFSET_LONG = "LEFT_LONGOFFSET_LONG"; //= 336;
const RIGHT_LONGOFFSET_SHORT = "RIGHT_LONGOFFSET_SHORT"; //= 216;

document.addEventListener('DOMContentLoaded', () => {
    // Add one page on initial load for the title
    addPage();
    // Add a second page for ships
    addPage();


    const HULLS = [
        {"filepath":"hulls/fighter.png",        "RP":10,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}}
        ]},
        {"filepath":"hulls/bomber.png",         "RP":12,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}}
        ]},
        {"filepath":"hulls/transport.png",      "RP":16,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}}
        ]},
        {"filepath":"hulls/interceptor.png",    "RP":12,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":4,"position":{"x":RIGHT_SHORT,"y":ROW2}}
        ]},
        {"filepath":"hulls/freighter.png",      "RP":25,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW2}}
        ]},
        {"filepath":"hulls/destroyer.png",      "RP":45,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}}
        ]},
        {"filepath":"hulls/frigate.png",       "RP":40,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_LONG,"y":ROW3}}
        ]},
        {"filepath":"hulls/light_cruiser.png",  "RP":60,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":LEFT_LONG,"y":ROW3}},
            {"number":1,"position":{"x":LEFT_LONGOFFSET_LONG,"y":ROW3}}
        ]},
        {"filepath":"hulls/assault_carrier.png","RP":50,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW2}},
            {"number":3,"position":{"x":LEFT_SHORT,"y":ROW3}},
            {"number":1,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW3}}
        ]},
        {"filepath":"hulls/heavy_cruiser.png",  "RP":75,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW3}},
            {"number":1,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW3}},
            {"number":1,"position":{"x":LEFT_LONG,"y":ROW4}}
        ]},
        {"filepath":"hulls/carrier.png",        "RP":70,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW2}},
            {"number":4,"position":{"x":LEFT_SHORT,"y":ROW3}},
            {"number":2,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW3}}
        ]},
        {"filepath":"hulls/battleship.png",     "RP":90,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":4,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW3}},
            {"number":2,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW3}},
            {"number":1,"position":{"x":LEFT_LONG,"y":ROW4}}
        ]},
        {"filepath":"hulls/weapon_platform.png","RP":80,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW3}}
        ]},
        {"filepath":"hulls/command_ship.png",   "RP":120,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":LEFT_LONG,"y":ROW3}},
            {"number":2,"position":{"x":LEFT_LONGOFFSET_LONG,"y":ROW3}}
        ]},
        {"filepath":"hulls/dreadnought.png",    "RP":150,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":4,"position":{"x":LEFT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":4,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":RIGHT_LONG,"y":ROW3}},
            {"number":1,"position":{"x":RIGHT_LONGOFFSET_SHORT,"y":ROW3}},
            {"number":1,"position":{"x":RIGHT_LONG,"y":ROW4}}

        ]},
        {"filepath":"hulls/station.png",        "RP":100,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":3,"position":{"x":RIGHT_LONG,"y":ROW2}},
            {"number":2,"position":{"x":RIGHT_LONGOFFSET_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":RIGHT_LONG,"y":ROW3}},
            {"number":4,"position":{"x":RIGHT_LONGOFFSET_SHORT,"y":ROW3}},
        ]},
    ];
    const CAPTAINS = [
        {"RP":0,"filepath":"captains/navy_pilot.png"},
        {"RP":10,"filepath":"captains/junior_captain.png"},
        {"RP":18,"filepath":"captains/academy_officer.png"},
        {"RP":30,"filepath":"captains/ship_ai.png"},
        {"RP":40,"filepath":"captains/decorated_officer.png"},
        {"RP":50,"filepath":"captains/expedition_veteran.png"},
        {"RP":60,"filepath":"captains/grand_captain.png"}
    ];
    const S1_WEAPONS = [
        {"RP":2,"filepath":"weapons/size1/xr-2_gatling_guns.png"},
        {"RP":2,"filepath":"weapons/size1/punisher_15mm_cannon.png"},
        {"RP":4,"filepath":"weapons/size1/mini_rail_lance.png"},
        {"RP":3,"filepath":"weapons/size1/xr-4_twin_gatling.png"},
        {"RP":3,"filepath":"weapons/size1/twin_10mm_flak.png"},
        {"RP":7,"filepath":"weapons/size1/drill_torpedo.png"},
        {"RP":7,"filepath":"weapons/size1/cluster_bomb.png"},
        {"RP":7,"filepath":"weapons/size1/napalm_bomb.png"},
        {"RP":5,"filepath":"weapons/size1/cluster_emp.png"},
        {"RP":3,"filepath":"weapons/size1/boarding_laser.png"}
    ]
    const S2_WEAPONS = [
        {"RP":10,"filepath":"weapons/size2/snub_missile_rack.png"},
        {"RP":14,"filepath":"weapons/size2/rail_lance.png"},
        {"RP":16,"filepath":"weapons/size2/thunder_cannon.png"},
        {"RP":6, "filepath":"weapons/size2/quad_xr-4b.png"},
        {"RP":8, "filepath":"weapons/size2/flak_20mm.png"},
        {"RP":20,"filepath":"weapons/size2/howler_torpedo.png"},
        {"RP":18,"filepath":"weapons/size2/implosion_cannon.png"},
        {"RP":26,"filepath":"weapons/size2/volcano_beam.png"},
        {"RP":18,"filepath":"weapons/size2/det_mines.png"},
        {"RP":24,"filepath":"weapons/size2/quad_20mm_cannon_array.png"},
        {"RP":22,"filepath":"weapons/size2/destroyer_80mm_array.png"},
        {"RP":20,"filepath":"weapons/size2/blitz_gatling_array.png"},
        {"RP":24,"filepath":"weapons/size2/rail_lance_array.png"}
    ]
    const S3_WEAPONS = [
        {"RP":24,"filepath":"weapons/size3/inferno_missile_rack.png"},
        {"RP":32,"filepath":"weapons/size3/heavy_rail_lance.png"},
        {"RP":18,"filepath":"weapons/size3/splicer_autocannon.png"},
        {"RP":14,"filepath":"weapons/size3/gatling_flak.png"},
        {"RP":18,"filepath":"weapons/size3/dual_thud_gun.png"},
        {"RP":24,"filepath":"weapons/size3/emp_cutlass.png"},
        {"RP":30,"filepath":"weapons/size3/hail_cluster_torpedo.png"},
        {"RP":46,"filepath":"weapons/size3/extinction_cannon.png"},
        {"RP":28,"filepath":"weapons/size3/nightmare_missile_rack.png"},
        {"RP":38,"filepath":"weapons/size3/triple_250mm_array.png"},
        {"RP":28,"filepath":"weapons/size3/dual_85mm_destroyers.png"},
        {"RP":42,"filepath":"weapons/size3/devistation_cannon_array.png"},
        {"RP":40,"filepath":"weapons/size3/velocity_lance_array.png"}
    ]
    const S4_WEAPONS = [
        {"RP":32,"filepath":"weapons/size4/sparrow_volley_missiles.png"},
        {"RP":50,"filepath":"weapons/size4/mass_driver.png"},
        {"RP":24,"filepath":"weapons/size4/triple_120mm_flak.png"},
        {"RP":34,"filepath":"weapons/size4/star_spear_guided_missile.png"},
        {"RP":56,"filepath":"weapons/size4/emp_destroyer_cannon.png"},
        {"RP":70,"filepath":"weapons/size4/lifes_end.png"},
        {"RP":58,"filepath":"weapons/size4/quad_12_inch_array.png"},
        {"RP":76,"filepath":"weapons/size4/firestorm_rotary_array.png"}
    ]
    const S1_EQUIPMENT = [
        {"RP":5,"filepath":"equipment/size1/carbon_alloy.png"},
        {"RP":5,"filepath":"equipment/size1/stealth_composite.png"},
        {"RP":3,"filepath":"equipment/size1/plasteel_plate_armour.png"},
        {"RP":3,"filepath":"equipment/size1/light_craft_os.png"}
    ]
    const S2_EQUIPMENT = [
        {"RP":8, "filepath":"equipment/size2/civtec_firmware.png"},
        {"RP":10,"filepath":"equipment/size2/merc_corp_os.png"},
        {"RP":14,"filepath":"equipment/size2/navy_systems.png"},
        {"RP":10,"filepath":"equipment/size2/nanotube_plating.png"},
        {"RP":12,"filepath":"equipment/size2/crystalline_plating.png"},
        {"RP":16,"filepath":"equipment/size2/carbon_lined_panels.png"},
        {"RP":20,"filepath":"equipment/size2/reinforced_hull.png"},
        {"RP":18,"filepath":"equipment/size2/cargo_bay.png"},
        {"RP":20,"filepath":"equipment/size2/armoured_compartment.png"},
        {"RP":16,"filepath":"equipment/size2/fighter_repair_bay.png"},
        {"RP":24,"filepath":"equipment/size2/damage_control.png"}, 
        {"RP":30,"filepath":"equipment/size2/dead_mans_switch.png"}, 
        {"RP":32,"filepath":"equipment/size2/shield_generator.png"}, 
        {"RP":10,"filepath":"equipment/size2/standard_hangar.png"}, 
        {"RP":20,"filepath":"equipment/size2/stacked_hangar.png"} 
    ]
    const S3_EQUIPMENT = [
        {"RP":16,"filepath":"equipment/size3/pirate_30.png"},
        {"RP":20,"filepath":"equipment/size3/future_industries.png"},
        {"RP":28,"filepath":"equipment/size3/milspec_os.png"},
        {"RP":26,"filepath":"equipment/size3/megasteel.png"},
        {"RP":30,"filepath":"equipment/size3/spaced_armour.png"},
        {"RP":40,"filepath":"equipment/size3/nano_composite.png"},
        {"RP":48,"filepath":"equipment/size3/blast_block_plate.png"},
        {"RP":24,"filepath":"equipment/size3/cargo_bay.png"},
        {"RP":28,"filepath":"equipment/size3/armoured_compartment.png"},
        {"RP":26,"filepath":"equipment/size3/fighter_repair_bay.png"},
        {"RP":30,"filepath":"equipment/size3/damage_control.png"},
        {"RP":40,"filepath":"equipment/size3/dead_mans_switch.png"},
        {"RP":38,"filepath":"equipment/size3/shield_generator.png"},
        {"RP":20,"filepath":"equipment/size3/standard_hangar.png"},
        {"RP":30,"filepath":"equipment/size3/stacked_hangar.png"}
    ]
    const S4_EQUIPMENT = [
        {"RP":36,"filepath":"equipment/size4/dominion_tech.png"},
        {"RP":42,"filepath":"equipment/size4/federation_systems.png"},
        {"RP":48,"filepath":"equipment/size4/alliance_computers.png"},
        {"RP":50,"filepath":"equipment/size4/command_ship.png"},
        {"RP":60,"filepath":"equipment/size4/stations.png"},
        {"RP":70,"filepath":"equipment/size4/dreadnought.png"},
        {"RP":40,"filepath":"equipment/size4/standard_hangar.png"},
        {"RP":60,"filepath":"equipment/size4/dynamic_hangar.png"},
        {"RP":60,"filepath":"equipment/size4/compact_hangar.png"},
        {"RP":60,"filepath":"equipment/size4/automated_hangar.png"}
    ]
    const FACT_HULLS = [
        {"filepath":"faction/hulls/ugnn_drones.png",        "RP":10,"sockets":[]},
        {"filepath":"faction/hulls/stealth_corvette.png",        "RP":30,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}}
        ]},
        {"filepath":"faction/hulls/stealth_corvette.png",        "RP":30,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}}
        ]},
        {"filepath":"faction/hulls/homestead_skiff.png",        "RP":35,"sockets":[
            {"number":1,"position":{"x":LEFT_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":CENTER_SHORT,"y":ROW1}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW1}},
            {"number":2,"position":{"x":CENTER_SHORT,"y":ROW2}},
            {"number":1,"position":{"x":RIGHT_SHORT,"y":ROW2}},
            {"number":2,"position":{"x":LEFT_SHORTOFFSET_LONG,"y":ROW3}}
        ]},
        {"filepath":"faction/hulls/centauri_serpent.png",        "RP":175,"sockets":[]},
        {"filepath":"faction/hulls/void_squids.png",        "RP":60,"sockets":[]}
    ];
    const FACT_OTHERS = [
        {"RP":40,"filepath":"faction/others/bile_cannon.png"},
        {"RP":14,"filepath":"faction/others/bile_caster.png"},
        {"RP":18,"filepath":"faction/others/bile_spitters.png"},
        {"RP":0,"filepath":"faction/others/hivemind_tendril.png"},
        {"RP":20,"filepath":"faction/others/darikin_accelerator.png"},
        {"RP":0,"filepath":"faction/others/darikin_accelerator_2.png"},
        {"RP":50,"filepath":"faction/others/norock_vortex.png"},
        {"RP":0,"filepath":"faction/others/norock_vortex_2.png"},
        {"RP":35,"filepath":"faction/others/tratek_beam.png"},
        {"RP":0,"filepath":"faction/others/tratek_beam_2.png"}
    ];

    function categorySplit(title){
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const hr = document.createElement("hr");
        h2.innerText = title;
        h2.classList.add("thick-font");
        div.appendChild(h2);
        div.appendChild(hr);
        return div;
    }
    function makeNode(data){
        const node = document.createElement("img");
        node.setAttribute("src",data["filepath"]);
        node.setAttribute("data-rp",data["RP"]);
        node.classList.add("node");
        node.setAttribute("onmousedown",'startdragNode(event,this)');
        return node;
    }
    
    //FACTION SPECIFIC
    const fact_cont = document.getElementById("fact-cont");
    for(const data of FACT_HULLS){
        const hull = document.createElement("img");
        hull.setAttribute("src",data["filepath"]);
        hull.setAttribute("data-JSON",JSON.stringify(data));
        hull.classList.add("hull");
        hull.setAttribute("onmousedown",'startdrag(event,this)');
        fact_cont.appendChild(hull);
    }
    for(const data of FACT_OTHERS){fact_cont.appendChild(makeNode(data));}
    

    //HULLS
    const hulls_cont = document.getElementById("hulls-cont");
    for(const hull_data of HULLS){
        const hull = document.createElement("img");
        hull.setAttribute("src",hull_data["filepath"]);
        hull.setAttribute("data-JSON",JSON.stringify(hull_data));
        hull.classList.add("hull");
        hull.setAttribute("onmousedown",'startdrag(event,this)');
        hulls_cont.appendChild(hull);
    }
    //CAPTAINS
    for(const data of CAPTAINS){document.getElementById("capt-cont").appendChild(makeNode(data));}

    //WEAPONS
    for(const data of S1_WEAPONS){document.getElementById("weapons-s1-cont").appendChild(makeNode(data));}
    for(const data of S2_WEAPONS){document.getElementById("weapons-s2-cont").appendChild(makeNode(data));}
    for(const data of S3_WEAPONS){document.getElementById("weapons-s3-cont").appendChild(makeNode(data));}
    for(const data of S4_WEAPONS){document.getElementById("weapons-s4-cont").appendChild(makeNode(data));}

    //EQUIPMENT
    for(const data of S1_EQUIPMENT){document.getElementById("equipment-s1-cont").appendChild(makeNode(data));}
    for(const data of S2_EQUIPMENT){document.getElementById("equipment-s2-cont").appendChild(makeNode(data));}
    for(const data of S3_EQUIPMENT){document.getElementById("equipment-s3-cont").appendChild(makeNode(data));}
    for(const data of S4_EQUIPMENT){document.getElementById("equipment-s4-cont").appendChild(makeNode(data));}

    document.querySelector('[data-unhide-id="hulls-cont"]').click();
    document.querySelector('[data-unhide-id="hulls-cont"]').click();
});

(function attachPanelHandlers(){

    const addPageBtn = document.getElementById('btn-add-page');
    const loadTemplate = document.getElementById('btn-load-template');
    const saveFleet = document.getElementById('btn-save');
    const clearFleet = document.getElementById('btn-clear');

    // addPage function — clones the hidden template and appends it to #app
    // If templateName is not provided, the function will apply 'title' for the
    // very first page and 'ships' for any subsequent pages (per request).
    function addPage(templateName){
        const tpl = document.getElementById('page-template');
        if(!tpl){
            return null;
        }

        const main = document.getElementById('app') || document.body;
        // Decide default template when none provided: first page = title, others = ships
        const existingPages = main.querySelectorAll('.page').length;
        if(!templateName){
            templateName = existingPages === 0 ? 'title' : 'ships';
        }

        const fragment = tpl.content.cloneNode(true);
        // Extract the page element from the fragment so we can attach handlers
        const pageEl = fragment.querySelector('.page') || fragment.firstElementChild;
        if(!pageEl){
            return null;
        }

        // Append the page element (this removes it from the fragment)
        main.appendChild(pageEl);

        // Attach remove handler to the per-page remove button
        const removeBtn = pageEl.querySelector('.remove-btn');
        if(removeBtn){
            removeBtn.addEventListener('click', ()=>{
                pageEl.remove();
                updateManifest();
            });
        }

        // Wire up per-page template-apply buttons to replace .page-content.innerHTML
        const contentTemplateMap = {
            title: document.getElementById('content-template-title'),
            ships: document.getElementById('content-template-ships')
        };

        // Auto-apply the chosen template (if available)
        const autoTpl = contentTemplateMap[templateName];
        const contentEl = pageEl.querySelector('.page-content');
        if(autoTpl && contentEl){
            contentEl.innerHTML = autoTpl.innerHTML;
        }

        const tplButtons = pageEl.querySelectorAll('.template-btn[data-template]');
        tplButtons.forEach(btn => {
            btn.addEventListener('click', ()=>{
                const name = btn.getAttribute('data-template');
                const tpl = contentTemplateMap[name];
                const contentElInner = pageEl.querySelector('.page-content');
                if(tpl && contentElInner){
                    // Simple replacement of the innerHTML as requested
                    contentElInner.innerHTML = tpl.innerHTML;
                }
                updateManifest();
            });
        });

        return pageEl;
    }

    // Expose addPage globally so DOMContentLoaded handler can call it
    window.addPage = addPage;

    if(addPageBtn) addPageBtn.addEventListener('click', ()=>{
        addPage();
    });


    if(loadTemplate) loadTemplate.addEventListener('click', ()=>{
        alert('Open load template dialog (hook into your UI)');
    });

    if(saveFleet) saveFleet.addEventListener('click', ()=>{
        alert('Save fleet (hook into save function)');
    });

    if(clearFleet) clearFleet.addEventListener('click', ()=>{
        if(confirm('Clear the current fleet?')){
            // Example: call a clearFleet() function if present
            // if (typeof clearFleet === 'function') clearFleet();
            alert('Fleet cleared (placeholder)');
        }
    });

    // Print handler: open print dialog (user can select Save as PDF)
    const printBtn = document.getElementById('btn-print');
    if(printBtn){
        printBtn.addEventListener('click', ()=>{
            // you could prepare pages or run cleanup here before printing
            window.print();
        });
    }
})();