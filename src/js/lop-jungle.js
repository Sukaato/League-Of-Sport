let removeCarap = getEltById("removeCarap"),
    addCarap = getEltById("addCarap"),
    removeHerald = getEltById("removeHerald"),
    addHerald = getEltById("addHerald"),
    removeDrake = getEltById("removeDrake"),
    addDrake = getEltById("addDrake"),
    removeBaron = getEltById("removeBaron"),
    addBaron = getEltById("addBaron");

removeCarap.onclick = () => {
    let elt = getEltById("carap");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeCarap, true) : "";
    lopCalcul();
}
addCarap.onclick = () => {
    let elt = getEltById("carap");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeCarap, false);
    lopCalcul();
}

removeHerald.onclick = () => {
    let elt = getEltById("herald");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)
    
    buttonToggle(removeHerald, true);
    buttonToggle(addHerald, false);
    lopCalcul();
}
addHerald.onclick = () => {
    let elt = getEltById("herald");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeHerald, false);
    buttonToggle(addHerald, true);
    lopCalcul();
}

removeDrake.onclick = () => {
    let elt = getEltById("drake");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeDrake, true) : "";
    lopCalcul();
}
addDrake.onclick = () => {
    let elt = getEltById("drake");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeDrake, false);
    lopCalcul();
}

removeBaron.onclick = () => {
    let elt = getEltById("baron");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeBaron, true) : "";
    lopCalcul();
}
addBaron.onclick = () => {
    let elt = getEltById("baron");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeBaron, false);
    lopCalcul();
}