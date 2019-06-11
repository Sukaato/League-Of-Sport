var removeTurret = getEltById("removeTurret"),
    addTurret = getEltById("addTurret"),
    removeInib = getEltById("removeInib"),
    addInib = getEltById("addInib"),
    removeNexus = getEltById("removeNexus"),
    addNexus = getEltById("addNexus");

removeTurret.onclick = () => {
    var elt = getEltById("turret");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeTurret, true) : buttonToggle(addTurret, false);
    lopCalcul();
}
addTurret.onclick = () => {
    var elt = getEltById("turret");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    value >= 11 ? buttonToggle(addTurret, true) : buttonToggle(removeTurret, false);
    lopCalcul();
}

removeInib.onclick = () => {
    var elt = getEltById("inib");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeInib, true) : "";
    lopCalcul();
}
addInib.onclick = () => {
    var elt = getEltById("inib");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeInib, false);
    lopCalcul();
}

removeNexus.onclick = () => {
    var elt = getEltById("nexus");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeNexus, true);
    buttonToggle(addNexus, false);
    lopCalcul();
}
addNexus.onclick = () => {
    var elt = getEltById("nexus");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeNexus, false);
    buttonToggle(addNexus, true);
    lopCalcul();
}