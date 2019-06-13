(() => init())();

// Met toute les valeurs à 0
function init() {
    let values = document.getElementsByClassName("value");
    for (const i of values) {
        i.setAttribute("data-after", 0);
    }
};

// Display l'affichage demander
function toggleView(btn) {
    let div = document.querySelectorAll('[id*=-div]');
    div.forEach(e => {
        if (!e.classList.contains("hidden")) {
            e.classList.add("hidden");
        }
    });
    let id = btn.id;
    let elt = getEltById(id + "-div");
    elt.classList.remove("hidden");
}

// Change les href des links
function reloadLink(pseudo) {
    pseudo = input.value;
    if (pseudo == null || pseudo == undefined || pseudo == "") {
        opgg.href = opggBaseUrl;
        poro.href = poroBaseUrl;
    } else {
        opgg.href = "https://euw.op.gg/summoner/userName=" + pseudo;
        poro.href = "https://porofessor.gg/fr/live/euw/" + pseudo;
    }
}

function getEltById(selector) {
    return document.getElementById(selector);
}

function getValueByID(selector) {
    let value = getEltById(selector);
    return value.getAttribute("data-after");
}

function buttonToggle(selector, state) {
    selector.disabled = state
}

function lopCalcul() {
    let value = 0;
    let values = document.getElementsByClassName("value");
    
    for (const i of values) {
        switch (i.id) {
            case "turret":
                value -= (parseInt(i.getAttribute("data-after")) * 0.50);
                break;

            case "inib":
                value -= (parseInt(i.getAttribute("data-after")) * 0.65);
                break;

            case "nexus":
                value -= (parseInt(i.getAttribute("data-after")) * 1.00);
                break;

            case "kill":
                value -= (parseInt(i.getAttribute("data-after")) * 2.00);
                break;

            case "death":
                value += (parseInt(i.getAttribute("data-after")) * 6.00);
                break;

            case "assist":
                value -= (parseInt(i.getAttribute("data-after")) * 1.00);
                break;

            case "carap":
                value -= (parseInt(i.getAttribute("data-after")) * 0.35);
                break;

            case "herald":
                value -= (parseInt(i.getAttribute("data-after")) * 2.00);
                break;

            case "drake":
                value -= (parseInt(i.getAttribute("data-after")) * 0.60);
                break;

            case "baron":
                value -= (parseInt(i.getAttribute("data-after")) * 0.55);
                break;

            default:
                console.log("erreur lors du calcul, vérifier la débugger")
                break;
        }
    }
    value = value <= 0 ? 0 : Math.ceil(value);
    value >= 0 ? buttonToggle(reset, false) : buttonToggle(reset, true);
    let result = getEltById("result");
    result.setAttribute("data-after", value);
    isResetable();
}

function isResetable() {
    let btn = document.getElementsByClassName("minus");
    let reset = 0;
    for (const i of btn) {
        if (i.disabled) {
            reset += 1;
            if (reset == btn.length) {
                resetValue();
            }
        }
    }
}

function resetValue() {
    buttonToggle(reset, true);
    buttonToggle(removeTurret, true);
    buttonToggle(removeInib, true);
    buttonToggle(removeNexus, true);
    buttonToggle(addNexus, false);
    buttonToggle(removeKill, true);
    buttonToggle(removeDeath, true);
    buttonToggle(removeAssist, true);
    buttonToggle(removeCarap, true);
    buttonToggle(removeHerald, true);
    buttonToggle(addHerald, false);
    buttonToggle(removeDrake, true);
    buttonToggle(removeBaron, true);
}

let reset = getEltById("reset");
reset.onclick = () => {
    resetValue();
    init();
};
