var removeKill = getEltById("removeKill"),
    addKill = getEltById("addKill"),
    removeDeath = getEltById("removeDeath"),
    addDeath = getEltById("addDeath"),
    removeAssist = getEltById("removeAssist"),
    addAssist = getEltById("addAssist");

removeKill.onclick = () => {
    var elt = getEltById("kill");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeKill, true) : "";
    lopCalcul();
}
addKill.onclick = () => {
    var elt = getEltById("kill");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeKill, false);
    lopCalcul();
}

removeDeath.onclick = () => {
    var elt = getEltById("death");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeDeath, true) : "";
    lopCalcul();
}
addDeath.onclick = () => {
    var elt = getEltById("death");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeDeath, false);
    lopCalcul();
}

removeAssist.onclick = () => {
    var elt = getEltById("assist");
    var value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeAssist, true) : "";
    lopCalcul();
}
addAssist.onclick = () => {
    var elt = getEltById("assist");
    var value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeAssist, false);
    lopCalcul();
}