document.querySelectorAll(".category-selector").forEach((el) => el.addEventListener('click', (e) => {
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

function updateManifest() {
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
    for (const socket of ship_sockets) {
        const ship_hull = socket.querySelector(".placed-hull");
        if (ship_hull) {
            const ship_label = socket.parentElement.children[0].children[+socket.getAttribute("data-socket-num")]
            const ship_name = ship_label.querySelector(".writable").value;
            const ship_rp_cont = ship_label.querySelector(".ship-rp-value");

            let hull_cost = ship_hull.getAttribute("data-rp");

            let rp = +hull_cost;

            let hull_slots = socket.querySelectorAll(".nodeSocket");
            for (const slot of hull_slots) {
                let slot_mult = slot.getAttribute("data-rp-mult");
                let slot_data = slot.querySelector("img");
                if (slot_data) {
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
    document.onmouseup = function (ev) {
        const elementsUnderCursor = document.elementsFromPoint(ev.clientX, ev.clientY);
        const socket = elementsUnderCursor.find(el => el.classList && el.classList.contains("socket"));
        if (socket) {
            const data = JSON.parse(clone.getAttribute("data-JSON"));
            const hull_cont = document.createElement("div");
            const hull = document.createElement("img");
            hull.setAttribute("src", clone.getAttribute("src"));
            hull.setAttribute("data-rp", data["RP"]);
            hull.setAttribute("draggable", "false");
            hull.classList.add("placed-hull");
            socket.innerHTML = "";
            hull_cont.classList.add("hull-cont")
            hull_cont.appendChild(hull);

            let hull_sockets = [];
            for (s of data["sockets"]) {
                const nodeSocket = document.createElement("div");
                nodeSocket.setAttribute("data-rp-mult", s["number"]);
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
    document.onmouseup = function (ev) {
        const elementsUnderCursor = document.elementsFromPoint(ev.clientX, ev.clientY);
        const nodeSocket = elementsUnderCursor.find(el => el.classList && el.classList.contains("nodeSocket"));
        if (nodeSocket) {
            const node = document.createElement("img");
            node.setAttribute("src", clone.getAttribute("src"));
            node.setAttribute("data-rp", clone.getAttribute("data-rp"));
            node.setAttribute("draggable", "false");
            node.setAttribute("data-dblclick-to-remove", true);
            node.classList.add("placed-node");
            nodeSocket.innerHTML = "";
            nodeSocket.appendChild(node);
        }

        // Cleanup
        document.removeEventListener("mousemove", onMouseMove);
        clone.remove();
        document.onmouseup = undefined;
        updateManifest();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Add one page on initial load for the title
    addPage();
    // Add a second page for ships
    addPage();



    function categorySplit(title) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const hr = document.createElement("hr");
        h2.innerText = title;
        h2.classList.add("thick-font");
        div.appendChild(h2);
        div.appendChild(hr);
        return div;
    }
    function makeNode(data) {
        const node = document.createElement("img");
        node.setAttribute("src", data["filepath"]);
        node.setAttribute("data-rp", data["RP"]);
        node.classList.add("node");
        node.setAttribute("onmousedown", 'startdragNode(event,this)');
        return node;
    }

    //FACTION SPECIFIC
    const fact_cont = document.getElementById("fact-cont");
    for (const data of FACT_HULLS) {
        const hull = document.createElement("img");
        hull.setAttribute("src", data["filepath"]);
        hull.setAttribute("data-JSON", JSON.stringify(data));
        hull.classList.add("hull");
        hull.setAttribute("onmousedown", 'startdrag(event,this)');
        fact_cont.appendChild(hull);
    }
    for (const data of FACT_OTHERS) { fact_cont.appendChild(makeNode(data)); }


    //HULLS
    const hulls_cont = document.getElementById("hulls-cont");
    for (const hull_data of HULLS) {
        const hull = document.createElement("img");
        hull.setAttribute("src", hull_data["filepath"]);
        hull.setAttribute("data-JSON", JSON.stringify(hull_data));
        hull.classList.add("hull");
        hull.setAttribute("onmousedown", 'startdrag(event,this)');
        hulls_cont.appendChild(hull);
    }
    //CAPTAINS
    for (const data of CAPTAINS) { document.getElementById("capt-cont").appendChild(makeNode(data)); }

    //WEAPONS
    for (const data of S1_WEAPONS) { document.getElementById("weapons-s1-cont").appendChild(makeNode(data)); }
    for (const data of S2_WEAPONS) { document.getElementById("weapons-s2-cont").appendChild(makeNode(data)); }
    for (const data of S3_WEAPONS) { document.getElementById("weapons-s3-cont").appendChild(makeNode(data)); }
    for (const data of S4_WEAPONS) { document.getElementById("weapons-s4-cont").appendChild(makeNode(data)); }

    //EQUIPMENT
    for (const data of S1_EQUIPMENT) { document.getElementById("equipment-s1-cont").appendChild(makeNode(data)); }
    for (const data of S2_EQUIPMENT) { document.getElementById("equipment-s2-cont").appendChild(makeNode(data)); }
    for (const data of S3_EQUIPMENT) { document.getElementById("equipment-s3-cont").appendChild(makeNode(data)); }
    for (const data of S4_EQUIPMENT) { document.getElementById("equipment-s4-cont").appendChild(makeNode(data)); }

    document.querySelector('[data-unhide-id="hulls-cont"]').click();
    document.querySelector('[data-unhide-id="hulls-cont"]').click();
});

(function attachPanelHandlers() {

    const addPageBtn = document.getElementById('btn-add-page');
    const loadTemplate = document.getElementById('btn-load-template');
    const saveFleet = document.getElementById('btn-save');
    const clearFleet = document.getElementById('btn-clear');

    // addPage function — clones the hidden template and appends it to #app
    // If templateName is not provided, the function will apply 'title' for the
    // very first page and 'ships' for any subsequent pages (per request).
    function addPage(templateName) {
        const tpl = document.getElementById('page-template');
        if (!tpl) {
            return null;
        }

        const main = document.getElementById('app') || document.body;
        // Decide default template when none provided: first page = title, others = ships
        const existingPages = main.querySelectorAll('.page').length;
        if (!templateName) {
            templateName = existingPages === 0 ? 'title' : 'ships';
        }

        const fragment = tpl.content.cloneNode(true);
        // Extract the page element from the fragment so we can attach handlers
        const pageEl = fragment.querySelector('.page') || fragment.firstElementChild;
        if (!pageEl) {
            return null;
        }

        // Append the page element (this removes it from the fragment)
        main.appendChild(pageEl);

        // Attach remove handler to the per-page remove button
        const removeBtn = pageEl.querySelector('.remove-btn');
        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
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
        if (autoTpl && contentEl) {
            contentEl.innerHTML = autoTpl.innerHTML;
        }

        const tplButtons = pageEl.querySelectorAll('.template-btn[data-template]');
        tplButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.getAttribute('data-template');
                const tpl = contentTemplateMap[name];
                const contentElInner = pageEl.querySelector('.page-content');
                if (tpl && contentElInner) {
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

    if (addPageBtn) addPageBtn.addEventListener('click', () => {
        addPage();
    });


    if (loadTemplate) loadTemplate.addEventListener('click', () => {
        alert('Open load template dialog (hook into your UI)');
    });

    if (saveFleet) saveFleet.addEventListener('click', () => {
        alert('Save fleet (hook into save function)');
    });

    if (clearFleet) clearFleet.addEventListener('click', () => {
        if (confirm('Clear the current fleet?')) {
            // Example: call a clearFleet() function if present
            // if (typeof clearFleet === 'function') clearFleet();
            alert('Fleet cleared (placeholder)');
        }
    });

    // Print handler: open print dialog (user can select Save as PDF)
    const printBtn = document.getElementById('btn-print');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            // you could prepare pages or run cleanup here before printing
            window.print();
        });
    }
})();