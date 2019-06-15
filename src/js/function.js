// Met toute les valeurs à 0
function init() {
    let values = document.querySelectorAll(".value");
    for (const elt of values) {
        elt.setAttribute("data-after", 0);
    }
};

function toggleButton(button, state) {
    button.disabled = state;
}

function resetButton() {
    toggleButton(LOP.objectives.turret.addTurretBtn, LOP.button.enable);
    toggleButton(LOP.objectives.turret.removeTurretBtn, LOP.button.disable);
    toggleButton(LOP.objectives.inib.addInibBtn, LOP.button.enable);
    toggleButton(LOP.objectives.inib.removeInibBtn, LOP.button.disable);
    toggleButton(LOP.objectives.nexus.addNexusBtn, LOP.button.enable);
    toggleButton(LOP.objectives.nexus.removeNexusBtn, LOP.button.disable);

    toggleButton(LOP.kda.kill.addKillBtn, LOP.button.enable);
    toggleButton(LOP.kda.kill.removeKillBtn, LOP.button.disable);
    toggleButton(LOP.kda.death.addDeathBtn, LOP.button.enable);
    toggleButton(LOP.kda.death.removeDeathBtn, LOP.button.disable);
    toggleButton(LOP.kda.assist.addAssistBtn, LOP.button.enable);
    toggleButton(LOP.kda.assist.removeAssistBtn, LOP.button.disable);

    toggleButton(LOP.jungle.carap.addCarapBtn, LOP.button.enable);
    toggleButton(LOP.jungle.carap.removeCarapBtn, LOP.button.disable);
    toggleButton(LOP.jungle.herald.addHeraldBtn, LOP.button.enable);
    toggleButton(LOP.jungle.herald.removeHeraldBtn, LOP.button.disable);
    toggleButton(LOP.jungle.drake.addDrakeBtn, LOP.button.enable);
    toggleButton(LOP.jungle.drake.removeDrakeBtn, LOP.button.disable);
    toggleButton(LOP.jungle.baron.addBaronBtn, LOP.button.enable);
    toggleButton(LOP.jungle.baron.removeBaronBtn, LOP.button.disable);

    toggleButton(LOP.reset, LOP.button.disable);
}

// Display l'affichage demander
function toggleView(btn) {
    let content = document.querySelectorAll('[id*=-div]');
    content.forEach(elt => {
        if (!elt.classList.contains("hidden")) {
            elt.classList.add("hidden");
        }
    });
    let elt = document.querySelector("#" + btn.id + "-div");
    elt.classList.remove("hidden");
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
                console.log("New value : ", value);
                break;
        }
    }
    value = value <= 0 ? 0 : Math.ceil(value);
    value >= 0 ? 
        toggleButton(LOP.reset, LOP.button.enable) :
        toggleButton(LOP.reset, LOP.button.disable);

    LOP.result.setAttribute("data-after", value);
    isResetable();
}

function isResetable() {
    let buttons = document.getElementsByClassName("minus");
    let reset = 0;
    for (const button of buttons) {
        if (button.disabled) {
            reset += 1;
            if (reset === buttons.length) {
                resetValue();
            }
        }
    }
}