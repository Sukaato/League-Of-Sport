let removeKill = document.getElementById("removeKill"),
    addKill = document.getElementById("addKill"),
    killValue = document.getElementById("killValue");

let removeDeath = document.getElementById("removeDeath"),
    addDeath = document.getElementById("addDeath"),
    deathValue = document.getElementById("deathValue");

let removeAssist = document.getElementById("removeAssist"),
    addAssist = document.getElementById("addAssist"),
    assistValue = document.getElementById("assistValue");

let reset = document.getElementById("reset");

// Calcul
function pumpCalcul() {
    let pumpValue = document.getElementById("pumpValue"),
        k = parseInt(killValue.textContent),
        d = parseInt(deathValue.textContent),
        a = parseInt(assistValue.textContent),

        value = (d * 5) - (k * 2 + a);
    if (value <= 0) {
        value = 0;
    }
    if (k == 0 && d == 0 && a == 0) {
        reset.disabled = true;
    } else {
        reset.disabled = false;
    }
    pumpValue.textContent = value;

}

reset.onclick = function () {
    killValue.textContent = "0";
    deathValue.textContent = "0";
    assistValue.textContent = "0";
    pumpValue.textContent = "0";

    removeKill.disabled = true;
    removeDeath.disabled = true;
    removeAssist.disabled = true;
    reset.disabled = true;
}

// KILL
removeKill.onclick = function () {
    value = parseInt(killValue.textContent) - 1;
    killValue.textContent = value;

    if (value == 0) {
        removeKill.disabled = true;
    }
    pumpCalcul();
}
addKill.onclick = function () {
    value = parseInt(killValue.textContent) + 1;
    killValue.textContent = value;

    if (value >= 1) {
        removeKill.disabled = false;
    }
    pumpCalcul();
}

// Mort
removeDeath.onclick = function () {
    value = parseInt(deathValue.textContent) - 1;
    deathValue.textContent = value;

    if (value == 0) {
        removeDeath.disabled = true;
    }
    pumpCalcul();
}
addDeath.onclick = function () {
    value = parseInt(deathValue.textContent) + 1;
    deathValue.textContent = value;

    if (value >= 1) {
        removeDeath.disabled = false;
    }
    pumpCalcul();
}

// Assist
removeAssist.onclick = function () {
    value = parseInt(assistValue.textContent) - 1;
    assistValue.textContent = value;

    if (value == 0) {
        removeAssist.disabled = true;
    }
    pumpCalcul();
}
addAssist.onclick = function () {
    value = parseInt(assistValue.textContent) + 1;
    assistValue.textContent = value;

    if (value >= 1) {
        removeAssist.disabled = false;
    }
    pumpCalcul();
}