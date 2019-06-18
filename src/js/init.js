const lopFct = () => {
    let enable = false;
    let disable = true;

    // CONTAINER
    let objectif = document.querySelector('#objectif + label');
    let kda = document.querySelector('#kda + label');
    let jungle = document.querySelector('#jungle + label');

    // OBJECTIVE
    let addTurretBtn = document.querySelector('#addTurret');
    let removeTurretBtn = document.querySelector('#removeTurret');

    let addInibBtn = document.querySelector('#addInib');
    let removeInibBtn = document.querySelector('#removeInib');

    let addNexusBtn = document.querySelector('#addNexus');
    let removeNexusBtn = document.querySelector('#removeNexus');

    // KDA
    let addKillBtn = document.querySelector('#addKill');
    let removeKillBtn = document.querySelector('#removeKill');

    let addDeathBtn = document.querySelector('#addDeath');
    let removeDeathBtn = document.querySelector('#removeDeath');

    let addAssistBtn = document.querySelector('#addAssist');
    let removeAssistBtn = document.querySelector('#removeAssist');

    // JUNGLE
    let addCarapBtn = document.querySelector('#addCarap');
    let removeCarapBtn = document.querySelector('#removeCarap');

    let addHeraldBtn = document.querySelector('#addHerald');
    let removeHeraldBtn = document.querySelector('#removeHerald');

    let addDragonBtn = document.querySelector('#addDrake');
    let removeDragonBtn = document.querySelector('#removeDrake');

    let addBaronBtn = document.querySelector('#addBaron');
    let removeBaronBtn = document.querySelector('#removeBaron');

    let pseudoInput = document.querySelector("#pseudo");
    let opgg = document.querySelector("#opgg");
    let porofessor = document.querySelector("#porofessor");
    
    let resetBtn = document.querySelector("#reset");
    let result = document.querySelector("#result");

    // SWITCH 
    objectif.addEventListener('click', () => {
        toggleView(document.querySelector('#objectif'));
    });

    kda.addEventListener('click', () => {
        toggleView(document.querySelector('#kda'));
    });

    jungle.addEventListener('click', () => {
        toggleView(document.querySelector('#jungle'));
    });

    // OBJECTIVE
    removeTurretBtn.addEventListener('click', () => {
        let elt = document.querySelector('#turret');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value);

        value === 0 ?
            toggleButton(removeTurretBtn, disable) :
            toggleButton(addTurretBtn,    enable);
        calcul();
    });

    addTurretBtn.addEventListener('click', () => {
        let elt = document.querySelector('#turret');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.objectives.turret.values.max ?
            toggleButton(addTurretBtn,    disable) :
            toggleButton(removeTurretBtn, enable);
        calcul();
    });

    removeInibBtn.addEventListener('click', () => {
        let elt = document.querySelector('#inib');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeInibBtn, disable) :
            toggleButton(addInibBtn,    enable);
        calcul();
    });

    addInibBtn.addEventListener('click', () => {
        let elt = document.querySelector('#inib');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.objectives.inib.values.max ?
            toggleButton(addInibBtn,    disable) :
            toggleButton(removeInibBtn, enable);
        calcul();
    });

    removeNexusBtn.addEventListener('click', () => {
        let elt = document.querySelector('#nexus');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        toggleButton(removeNexusBtn, disable);
        toggleButton(addNexusBtn,    enable);
        calcul();
    });

    addNexusBtn.addEventListener('click', () => {
        let elt = document.querySelector('#nexus');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        toggleButton(addNexusBtn,    disable);
        toggleButton(removeNexusBtn, enable);
        calcul();
    });

    // KDA
    removeKillBtn.addEventListener('click', () => {
        let elt = document.querySelector('#kill');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeKillBtn, disable) :
            toggleButton(addKillBtn,    enable);
        calcul();
    });

    addKillBtn.addEventListener('click', () => {
        let elt = document.querySelector('#kill');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.kill.values.max ?
            toggleButton(addKillBtn,    disable) :
            toggleButton(removeKillBtn, enable);
        calcul();
    });

    removeDeathBtn.addEventListener('click', () => {
        let elt = document.querySelector('#death');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeDeathBtn, disable) :
            toggleButton(addDeathBtn,    enable);
        calcul();
    });

    addDeathBtn.addEventListener('click', () => {
        let elt = document.querySelector('#death');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.death.values.max ?
            toggleButton(addDeathBtn,    disable) :
            toggleButton(removeDeathBtn, enable);
        calcul();
    });

    removeAssistBtn.addEventListener('click', () => {
        let elt = document.querySelector('#assist');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeAssistBtn, disable) :
            toggleButton(addAssistBtn,    enable);
        calcul();
    });

    addAssistBtn.addEventListener('click', () => {
        let elt = document.querySelector('#assist');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.death.values.max ?
            toggleButton(addAssistBtn,    disable) :
            toggleButton(removeAssistBtn, enable);
        calcul();
    });

    // JUNGLE
    removeCarapBtn.addEventListener('click', () => {
        let elt = document.querySelector('#carap');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeCaraptBtn, disable) :
            toggleButton(addCaraptBtn,    enable);
        calcul();
    });

    addCarapBtn.addEventListener('click', () => {
        let elt = document.querySelector('#carap');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.carap.values.max ?
            toggleButton(addCaraptBtn,    disable) :
            toggleButton(removeCaraptBtn, enable);
        calcul();
    });

    removeHeraldBtn.addEventListener('click', () => {
        let elt = document.querySelector('#herald');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        toggleButton(removeHeraldBtn, disable);
        toggleButton(addHeraldBtn,    enable);
        calcul();
    });

    addHeraldBtn.addEventListener('click', () => {
        let elt = document.querySelector('#herald');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        toggleButton(addHeraldBtn,    disable);
        toggleButton(removeHeraldBtn, enable);
        calcul();
    });

    removeDragonBtn.addEventListener('click', () => {
        let elt = document.querySelector('#drake');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeDragonBtn, disable) :
            toggleButton(addDragonBtn,    enable);
        calcul();
    });

    addDragonBtn.addEventListener('click', () => {
        let elt = document.querySelector('#drake');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.dragon.values.max ?
            toggleButton(addDragonBtn,    disable) :
            toggleButton(removeDragonBtn, enable);
        calcul();
    });

    removeBaronBtn.addEventListener('click', () => {
        let elt = document.querySelector('#baron');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(removeBaronBtn, disable) :
            toggleButton(addBaronBtn,    enable);
        calcul();
    });

    addBaronBtn.addEventListener('click', () => {
        let elt = document.querySelector('#baron');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.baron.values.max ?
            toggleButton(addBaronBtn,    disable) :
            toggleButton(removeBaronBtn, enable);
        calcul();
    });

    pseudoInput.onkeyup = () => {
        let value      = LOP.link.input.value;
        let opgg       = LOP.link.opgg;
        let porofessor = LOP.link.porofessor;

        if (value) {
            opgg.link.href       = opgg.extented + value;
            porofessor.link.href = porofessor.extented + value;
        } else {
            opgg.link.href       = opgg.base;
            porofessor.link.href = porofessor.base;
        }
    };

    resetBtn.addEventListener('click', () => {
        resetButton();
        LOP.function.init();
    });

    let init = () => {
        let values = document.querySelectorAll(".value");
        for (const elt of values) {
            elt.setAttribute("data-after", 0);
        }
    };

    function toggleButton(button, state) {
        button.disabled = state;
    }

    function toggleView(btn) {
        let content = document.querySelectorAll('[id*=-div]');
        content.forEach(elt => {
            if (!elt.classList.contains("hidden")) {
                elt.classList.add("hidden");
            }
        });
        let elt = document.querySelector(`#${btn.id}-div`);
        elt.classList.remove("hidden");
    }

    function resetButton() {
        toggleButton(addTurretBtn, enable);
        toggleButton(removeTurretBtn, disable);
        toggleButton(addInibBtn, enable);
        toggleButton(removeInibBtn, disable);
        toggleButton(addNexusBtn, enable);
        toggleButton(removeNexusBtn, disable);

        toggleButton(addKillBtn, enable);
        toggleButton(removeKillBtn, disable);
        toggleButton(addDeathBtn, enable);
        toggleButton(removeDeathBtn, disable);
        toggleButton(addAssistBtn, enable);
        toggleButton(removeAssistBtn, disable);

        toggleButton(addCarapBtn, enable);
        toggleButton(removeCarapBtn, disable);
        toggleButton(addHeraldBtn, enable);
        toggleButton(removeHeraldBtn, disable);
        toggleButton(addDragonBtn, enable);
        toggleButton(removeDragonBtn, disable);
        toggleButton(addBaronBtn, enable);
        toggleButton(removeBaronBtn, disable);

        toggleButton(resetBtn, disable);
    }

    function calcul() {
        let value = 0;
        let values = document.getElementsByClassName("value");

        for (const i of values) {
            switch (i.id) {
                case "turret":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.objectives.turret.values.int);
                    break;

                case "inib":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.objectives.inib.values.int);
                    break;

                case "nexus":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.objectives.nexus.values.int);
                    break;

                case "kill":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.kda.kill.values.int);
                    break;

                case "death":
                    value += (parseInt(i.getAttribute("data-after")) * LOP.kda.death.values.int);
                    break;

                case "assist":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.kda.assist.values.int);
                    break;

                case "carap":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.jungle.carap.values.int);
                    break;

                case "herald":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.jungle.herald.values.int);
                    break;

                case "drake":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.jungle.dragon.values.int);
                    break;

                case "baron":
                    value -= (parseInt(i.getAttribute("data-after")) * LOP.jungle.baron.values.int);
                    break;

                default:
                    console.log("New value : ", value);
                    break;
            }
        }
        value = value <= 0 ? 0 : Math.ceil(value);
        value >= 0 ?
            toggleButton(resetBtn, enable) :
            toggleButton(resetBtn, disable);

        result.setAttribute("data-after", value);
        isResetable();
    }

    function isResetable() {
        let buttons = document.getElementsByClassName("minus");
        let reset = 0;
        for (const button of buttons) {
            if (button.disabled) {
                reset += 1;
                if (reset === buttons.length) {
                    LOP.function.init();
                }
            }
        }
    }

    return {
        function: {
            init
        },
        link: {
            input: pseudoInput,
            opgg: {
                link: opgg,
                base: "http://euw.op.gg",
                extented: "https://euw.op.gg/summoner/userName=",
                multi: "https://euw.op.gg/multi/query="

            },
            porofessor: {
                link: porofessor,
                base: "http://porofessor.gg",
                extented: "https://porofessor.gg/fr/live/euw/",
                pregame: "https://porofessor.gg/fr/pregame/euw/"
            }
        },
        objectives: {
            turret: {
                values: {
                    max: 11,
                    int: 0.50
                }
            },
            inib: {
                values: {
                    max: 100,
                    int: 0.65
                }
            },
            nexus: {
                values: {
                    max: 1,
                    int: 1.00
                }
            }
        },
        kda: {
            kill: {
                values: {
                    max: 100,
                    int: 2.00
                }
            },
            death: {
                values: {
                    max: 100,
                    int: 6.00
                }
            },
            assist: {
                values: {
                    max: 100,
                    int: 1.00
                },
            }
        },
        jungle: {
            carap: {
                values: {
                    max: 100,
                    int: 0.34
                }
            },
            herald: {
                values: {
                    max: 1,
                    int: 2.00
                }
            },
            dragon: {
                values: {
                    max: 100,
                    int: 0.60
                }
            },
            baron: {
                values: {
                    max: 100,
                    int: 0.70
                }
            }
        }
    }
}

const LOP = lopFct();
(() => LOP.function.init())();