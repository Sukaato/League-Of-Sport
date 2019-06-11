var removeCarap = getEltById("removeCarap"),
    addCarap = getEltById("addCarap"),
    removeHerald = getEltById("removeHerald"),
    addHerald = getEltById("addHerald"),
    removeDrake = getEltById("removeDrake"),
    addDrake = getEltById("addDrake"),
    removeBaron = getEltById("removeBaron"),
    addBaron = getEltById("addBaron");

removeCarap.onclick = () => {
    var elt = getEltById("carap");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeCarap, true) : "";
    lopCalcul();
}
addCarap.onclick = () => {
    var elt = getEltById("carap");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeCarap, false);
    lopCalcul();
}

removeHerald.onclick = () => {
    var elt = getEltById("herald");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeHerald, true) : "";
    lopCalcul();
}
addHerald.onclick = () => {
    var elt = getEltById("herald");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeHerald, false);
    lopCalcul();
}

removeDrake.onclick = () => {
    var elt = getEltById("drake");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeDrake, true) : "";
    lopCalcul();
}
addDrake.onclick = () => {
    var elt = getEltById("drake");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeDrake, false);
    lopCalcul();
}

removeBaron.onclick = () => {
    var elt = getEltById("baron");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeBaron, true) : "";
    lopCalcul();
}
addBaron.onclick = () => {
    var elt = getEltById("baron");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeBaron, false);
    lopCalcul();
}