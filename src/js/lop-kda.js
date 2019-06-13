let removeKill = getEltById("removeKill"),
    addKill = getEltById("addKill"),
    removeDeath = getEltById("removeDeath"),
    addDeath = getEltById("addDeath"),
    removeAssist = getEltById("removeAssist"),
    addAssist = getEltById("addAssist");

removeKill.onclick = () => {
    let elt = getEltById("kill");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeKill, true) : "";
    lopCalcul();
}
addKill.onclick = () => {
    let elt = getEltById("kill");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeKill, false);
    lopCalcul();
}

removeDeath.onclick = () => {
    let elt = getEltById("death");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeDeath, true) : "";
    lopCalcul();
}
addDeath.onclick = () => {
    let elt = getEltById("death");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeDeath, false);
    lopCalcul();
}

removeAssist.onclick = () => {
    let elt = getEltById("assist");
    let value = parseInt(elt.getAttribute("data-after")) - 1;
    elt.setAttribute("data-after", value)

    value <= 0 ? buttonToggle(removeAssist, true) : "";
    lopCalcul();
}
addAssist.onclick = () => {
    let elt = getEltById("assist");
    let value = parseInt(elt.getAttribute("data-after")) + 1;
    elt.setAttribute("data-after", value)

    buttonToggle(removeAssist, false);
    lopCalcul();
}