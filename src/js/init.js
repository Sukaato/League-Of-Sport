const lopFct = () => {
    // CONTAINER
    let objectif = document.querySelector('#objectif + label');
    let kda = document.querySelector('#kda + label');
    let jungle = document.querySelector('#jungle + label');

    // OBJECTIVE
    let removeTurretBtn = document.querySelector('#removeTurret');
    let addTurretBtn = document.querySelector('#addTurret');

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
        LOP.function.toggleView(document.querySelector('#objectif'));
    });

    kda.addEventListener('click', () => {
        LOP.function.toggleView(document.querySelector('#kda'));
    });

    jungle.addEventListener('click', () => {
        LOP.function.toggleView(document.querySelector('#jungle'));
    });

    // OBJECTIVE
    removeTurretBtn.addEventListener('click', () => {
        let elt = document.querySelector('#turret');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value);

        value === 0 ?
            LOP.function.toggleButton(LOP.objectives.turret.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.objectives.turret.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addTurretBtn.addEventListener('click', () => {
        let elt = document.querySelector('#turret');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.objectives.turret.values.max ?
            LOP.function.toggleButton(LOP.objectives.turret.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.objectives.turret.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeInibBtn.addEventListener('click', () => {
        let elt = document.querySelector('#inib');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.objectives.inib.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.objectives.inib.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addInibBtn.addEventListener('click', () => {
        let elt = document.querySelector('#inib');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.objectives.inib.values.max ?
            LOP.function.toggleButton(LOP.objectives.inib.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.objectives.inib.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeNexusBtn.addEventListener('click', () => {
        let elt = document.querySelector('#nexus');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        LOP.function.toggleButton(LOP.objectives.nexus.remove, LOP.button.state.disable);
        LOP.function.toggleButton(LOP.objectives.nexus.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addNexusBtn.addEventListener('click', () => {
        let elt = document.querySelector('#nexus');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        LOP.function.toggleButton(LOP.objectives.nexus.add,    LOP.button.state.disable);
        LOP.function.toggleButton(LOP.objectives.nexus.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    // KDA
    removeKillBtn.addEventListener('click', () => {
        let elt = document.querySelector('#kill');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.kda.kill.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.kda.kill.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addKillBtn.addEventListener('click', () => {
        let elt = document.querySelector('#kill');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.kill.values.max ?
            LOP.function.toggleButton(LOP.kda.kill.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.kda.kill.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeDeathBtn.addEventListener('click', () => {
        let elt = document.querySelector('#death');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.kda.death.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.kda.death.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addDeathBtn.addEventListener('click', () => {
        let elt = document.querySelector('#death');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.death.values.max ?
            LOP.function.toggleButton(LOP.kda.death.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.kda.death.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeAssistBtn.addEventListener('click', () => {
        let elt = document.querySelector('#assist');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.kda.assist.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.kda.assist.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addAssistBtn.addEventListener('click', () => {
        let elt = document.querySelector('#assist');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.death.values.max ?
            LOP.function.toggleButton(LOP.kda.assist.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.kda.assist.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    // JUNGLE
    removeCarapBtn.addEventListener('click', () => {
        let elt = document.querySelector('#carap');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.jungle.carap.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.jungle.carap.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addCarapBtn.addEventListener('click', () => {
        let elt = document.querySelector('#carap');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.carap.values.max ?
            LOP.function.toggleButton(LOP.jungle.carap.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.jungle.carap.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeHeraldBtn.addEventListener('click', () => {
        let elt = document.querySelector('#herald');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        LOP.function.toggleButton(LOP.jungle.herald.remove, LOP.button.state.disable);
        LOP.function.toggleButton(LOP.jungle.herald.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addHeraldBtn.addEventListener('click', () => {
        let elt = document.querySelector('#herald');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        LOP.function.toggleButton(LOP.jungle.herald.add,    LOP.button.state.disable);
        LOP.function.toggleButton(LOP.jungle.herald.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeDragonBtn.addEventListener('click', () => {
        let elt = document.querySelector('#drake');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.jungle.dragon.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.jungle.dragon.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addDragonBtn.addEventListener('click', () => {
        let elt = document.querySelector('#drake');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.dragon.values.max ?
            LOP.function.toggleButton(LOP.jungle.dragon.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.jungle.dragon.remove, LOP.button.state.enable);
        LOP.function.calcul();
    });

    removeBaronBtn.addEventListener('click', () => {
        let elt = document.querySelector('#baron');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            LOP.function.toggleButton(LOP.jungle.baron.remove, LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.jungle.baron.add,    LOP.button.state.enable);
        LOP.function.calcul();
    });

    addBaronBtn.addEventListener('click', () => {
        let elt = document.querySelector('#baron');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.baron.values.max ?
            LOP.function.toggleButton(LOP.jungle.baron.add,    LOP.button.state.disable) :
            LOP.function.toggleButton(LOP.jungle.baron.remove, LOP.button.state.enable);
        LOP.function.calcul();
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
        LOP.function.resetButton();
        LOP.function.init();
    });

    let init = () => {
        let values = document.querySelectorAll(".value");
        for (const elt of values) {
            elt.setAttribute("data-after", 0);
        }
    };

    let toggleButton = (button, state) => {
        button.disabled = state;
    }

    let toggleView = (btn) => {
        let content = document.querySelectorAll('[id*=-div]');
        content.forEach(elt => {
            if (!elt.classList.contains("hidden")) {
                elt.classList.add("hidden");
            }
        });
        let elt = document.querySelector(`#${btn.id}-div`);
        elt.classList.remove("hidden");
    }

    let resetButton = () => {
        let enable = LOP.button.state.enable;
        let disable = LOP.button.state.disable;

        LOP.function.toggleButton(LOP.objectives.turret.add, enable);
        LOP.function.toggleButton(LOP.objectives.turret.remove, disable);
        LOP.function.toggleButton(LOP.objectives.inib.add, enable);
        LOP.function.toggleButton(LOP.objectives.inib.remove, disable);
        LOP.function.toggleButton(LOP.objectives.nexus.add, enable);
        LOP.function.toggleButton(LOP.objectives.nexus.remove, disable);

        LOP.function.toggleButton(LOP.kda.kill.add, enable);
        LOP.function.toggleButton(LOP.kda.kill.remove, disable);
        LOP.function.toggleButton(LOP.kda.death.add, enable);
        LOP.function.toggleButton(LOP.kda.death.remove, disable);
        LOP.function.toggleButton(LOP.kda.assist.add, enable);
        LOP.function.toggleButton(LOP.kda.assist.remove, disable);

        LOP.function.toggleButton(LOP.jungle.carap.add, enable);
        LOP.function.toggleButton(LOP.jungle.carap.remove, disable);
        LOP.function.toggleButton(LOP.jungle.herald.add, enable);
        LOP.function.toggleButton(LOP.jungle.herald.remove, disable);
        LOP.function.toggleButton(LOP.jungle.dragon.add, enable);
        LOP.function.toggleButton(LOP.jungle.dragon.remove, disable);
        LOP.function.toggleButton(LOP.jungle.baron.add, enable);
        LOP.function.toggleButton(LOP.jungle.baron.remove, disable);

        LOP.function.toggleButton(LOP.button.reset, disable);
    }

    let calcul = () => {
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
            toggleButton(LOP.button.reset, LOP.button.state.enable) :
            toggleButton(LOP.button.reset, LOP.button.state.disable);

        LOP.result.setAttribute("data-after", value);
        LOP.function.isResetable();
    }

    let isResetable = () => {
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

    return {
        result,
        function: {
            toggleView,
            toggleButton,
            init,
            resetButton,
            calcul,
            isResetable
        },
        button: {
            reset: resetBtn,
            state: {
                enable: false,
                disable: true
            },
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
            container: objectif,
            turret: {
                add: addTurretBtn,
                remove: removeTurretBtn,
                values: {
                    max: 11,
                    int: 0.50
                }
            },
            inib: {
                add: addInibBtn,
                remove: removeInibBtn,
                values: {
                    max: 100,
                    int: 0.65
                }
            },
            nexus: {
                add: addNexusBtn,
                remove: removeNexusBtn,
                values: {
                    max: 1,
                    int: 1.00
                }
            }
        },
        kda: {
            container: kda,
            kill: {
                add: addKillBtn,
                remove: removeKillBtn,
                values: {
                    max: 100,
                    int: 2.00
                }
            },
            death: {
                add: addDeathBtn,
                remove: removeDeathBtn,
                values: {
                    max: 100,
                    int: 6.00
                }
            },
            assist: {
                add: addAssistBtn,
                remove: removeAssistBtn,
                values: {
                    max: 100,
                    int: 1.00
                },
            }
        },
        jungle: {
            container: jungle,
            carap: {
                add: addCarapBtn,
                remove: removeCarapBtn,
                values: {
                    max: 100,
                    int: 0.34
                }
            },
            herald: {
                add: addHeraldBtn,
                remove: removeHeraldBtn,
                values: {
                    max: 1,
                    int: 2.00
                }
            },
            dragon: {
                add: addDragonBtn,
                remove: removeDragonBtn,
                values: {
                    max: 100,
                    int: 0.60
                }
            },
            baron: {
                add: addBaronBtn,
                remove: removeBaronBtn,
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