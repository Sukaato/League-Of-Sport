(() => init())();

function init() {
    var values = document.getElementsByClassName("value");
    for (const i of values) {
        i.setAttribute("data-after", 0);
    }
};

function toggleView(btn) {
    var div = document.querySelectorAll('[id*=-div]');
    div.forEach(e => {
        if (!e.classList.contains("hidden")) {
            e.classList.add("hidden");
        }
    });
    var id = btn.id;
    var elt = getEltById(id + "-div");
    elt.classList.remove("hidden");
}

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
    var value = getEltById(selector);
    return value.getAttribute("data-after");
}

function buttonToggle(selector, state) {
    selector.disabled = state
}

function lopCalcul() {
    var value = 0;
        values = document.getElementsByClassName("value");
        valuesLength = values.length;
    
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
                break;
        }
    }
    value = value <= 0 ? 0 : Math.ceil(value);
    value >= 0 ? buttonToggle(reset, false) : buttonToggle(reset, true);
    var result = getEltById("result");
    result.setAttribute("data-after", value);
    isResetable();
}

function isResetable() {
    var btn = document.getElementsByClassName("minus");
    var reset = 0;
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
    buttonToggle(removeKill, true);
    buttonToggle(removeDeath, true);
    buttonToggle(removeAssist, true);
    buttonToggle(removeCarap, true);
    buttonToggle(removeHerald, true);
    buttonToggle(removeDrake, true);
    buttonToggle(removeBaron, true);
}

var reset = getEltById("reset");
reset.onclick = () => {
    resetValue();
    init();
};
