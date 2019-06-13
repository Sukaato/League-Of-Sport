let removeTurret = getEltById("removeTurret"),
    addTurret = getEltById("addTurret"),
    removeInib = getEltById("removeInib"),
    addInib = getEltById("addInib"),
    removeNexus = getEltById("removeNexus"),
    addNexus = getEltById("addNexus");

removeTurret.onclick = () => {
    let elt = getEltById("turret");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeTurret, true) : buttonToggle(addTurret, false);
    lopCalcul();
}
addTurret.onclick = () => {
    let elt = getEltById("turret");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    value >= 11 ? buttonToggle(addTurret, true) : buttonToggle(removeTurret, false);
    lopCalcul();
}

removeInib.onclick = () => {
    let elt = getEltById("inib");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeInib, true) : "";
    lopCalcul();
}
addInib.onclick = () => {
    let elt = getEltById("inib");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeInib, false);
    lopCalcul();
}

removeNexus.onclick = () => {
    let elt = getEltById("nexus");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeNexus, true);
    buttonToggle(addNexus, false);
    lopCalcul();
}
addNexus.onclick = () => {
    let elt = getEltById("nexus");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeNexus, false);
    buttonToggle(addNexus, true);
    lopCalcul();
}