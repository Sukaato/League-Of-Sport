(() => init())();

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

    let addDrakeBtn = document.querySelector('#addDrake');
    let removeDrakeBtn = document.querySelector('#removeDrake');

    let addBaronBtn = document.querySelector('#addBaron');
    let removeBaronBtn = document.querySelector('#removeBaron');

    let input = document.querySelector("#pseudo");
    let opgg = document.querySelector("#opgg");
    let porofessor = document.querySelector("#porofessor");
    
    let reset = document.querySelector("#reset");
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
            toggleButton(LOP.objectives.turret.removeTurretBtn, LOP.button.disable) :
            toggleButton(LOP.objectives.turret.addTurretBtn, LOP.button.enable);
        lopCalcul();
    });

    addTurretBtn.addEventListener('click', () => {
        let elt = document.querySelector('#turret');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.objectives.turret.values.max ?
            toggleButton(LOP.objectives.turret.addTurretBtn, LOP.button.disable) :
            toggleButton(LOP.objectives.turret.removeTurretBtn, LOP.button.enable);
        lopCalcul();
    });

    removeInibBtn.addEventListener('click', () => {
        let elt = document.querySelector('#inib');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.objectives.inib.removeInibBtn, LOP.button.disable) :
            toggleButton(LOP.objectives.inib.addInibBtn, LOP.button.enable);
        lopCalcul();
    });

    addInibBtn.addEventListener('click', () => {
        let elt = document.querySelector('#inib');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.objectives.inib.values.max ?
            toggleButton(LOP.objectives.inib.addInibBtn, LOP.button.disable) :
            toggleButton(LOP.objectives.inib.removeInibBtn, LOP.button.enable);
        lopCalcul();
    });

    removeNexusBtn.addEventListener('click', () => {
        let elt = document.querySelector('#nexus');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        toggleButton(LOP.objectives.nexus.addNexusBtn, LOP.button.enable);
        toggleButton(LOP.objectives.nexus.removeNexusBtn, LOP.button.disable);
        lopCalcul();
    });

    addNexusBtn.addEventListener('click', () => {
        let elt = document.querySelector('#nexus');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        toggleButton(LOP.objectives.nexus.addNexusBtn, LOP.button.disable);
        toggleButton(LOP.objectives.nexus.removeNexusBtn, LOP.button.enable);
        lopCalcul();
    });

    // KDA
    removeKillBtn.addEventListener('click', () => {
        let elt = document.querySelector('#kill');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.kda.kill.removeKillBtn, LOP.button.disable) :
            toggleButton(LOP.kda.kill.addKillBtn, LOP.button.enable);
        lopCalcul();
    });

    addKillBtn.addEventListener('click', () => {
        let elt = document.querySelector('#kill');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.kill.values.max ?
            toggleButton(LOP.kda.kill.addKillBtn, LOP.button.disable) :
            toggleButton(LOP.kda.kill.removeKillBtn, LOP.button.enable);
        lopCalcul();
    });

    removeDeathBtn.addEventListener('click', () => {
        let elt = document.querySelector('#death');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.kda.death.removeDeathBtn, LOP.button.disable) :
            toggleButton(LOP.kda.death.addDeathBtn, LOP.button.enable);
        lopCalcul();
    });

    addDeathBtn.addEventListener('click', () => {
        let elt = document.querySelector('#death');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.death.values.max ?
            toggleButton(LOP.kda.death.addDeathBtn, LOP.button.disable) :
            toggleButton(LOP.kda.death.removeDeathBtn, LOP.button.enable);
        lopCalcul();
    });

    removeAssistBtn.addEventListener('click', () => {
        let elt = document.querySelector('#assist');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.kda.assist.removeAssistBtn, LOP.button.disable) :
            toggleButton(LOP.kda.assist.addAssistBtn, LOP.button.enable);
        lopCalcul();
    });

    addAssistBtn.addEventListener('click', () => {
        let elt = document.querySelector('#assist');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.kda.death.values.max ?
            toggleButton(LOP.kda.assist.addAssistBtn, LOP.button.disable) :
            toggleButton(LOP.kda.assist.removeAssistBtn, LOP.button.enable);
        lopCalcul();
    });

    // JUNGLE
    removeCarapBtn.addEventListener('click', () => {
        let elt = document.querySelector('#carap');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.jungle.carap.removeCarapBtn, LOP.button.disable) :
            toggleButton(LOP.jungle.carap.addCarapBtn, LOP.button.enable);
        lopCalcul();
    });

    addCarapBtn.addEventListener('click', () => {
        let elt = document.querySelector('#carap');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.carap.values.max ?
            toggleButton(LOP.jungle.carap.addCarapBtn, LOP.button.disable) :
            toggleButton(LOP.jungle.carap.removeCarapBtn, LOP.button.enable);
        lopCalcul();
    });

    removeHeraldBtn.addEventListener('click', () => {
        let elt = document.querySelector('#herald');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        toggleButton(LOP.jungle.herald.removeHeraldBtn, LOP.button.disable);
        toggleButton(LOP.jungle.herald.addHeraldBtn, LOP.button.enable);
        lopCalcul();
    });

    addHeraldBtn.addEventListener('click', () => {
        let elt = document.querySelector('#herald');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        toggleButton(LOP.jungle.herald.addHeraldBtn, LOP.button.disable);
        toggleButton(LOP.jungle.herald.removeHeraldBtn, LOP.button.enable);
        lopCalcul();
    });

    removeDrakeBtn.addEventListener('click', () => {
        let elt = document.querySelector('#drake');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.jungle.drake.removeDrakeBtn, LOP.button.disable) :
            toggleButton(LOP.jungle.drake.addDrakeBtn, LOP.button.enable);
        lopCalcul();
    });

    addDrakeBtn.addEventListener('click', () => {
        let elt = document.querySelector('#drake');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.drake.values.max ?
            toggleButton(LOP.jungle.drake.addDrakeBtn, LOP.button.disable) :
            toggleButton(LOP.jungle.drake.removeDrakeBtn, LOP.button.enable);
        lopCalcul();
    });

    removeBaronBtn.addEventListener('click', () => {
        let elt = document.querySelector('#baron');
        let value = parseInt(elt.getAttribute("data-after")) - 1;
        elt.setAttribute("data-after", value)

        value === 0 ?
            toggleButton(LOP.jungle.baron.removeBaronBtn, LOP.button.disable) :
            toggleButton(LOP.jungle.baron.addBaronBtn, LOP.button.enable);
        lopCalcul();
    });

    addBaronBtn.addEventListener('click', () => {
        let elt = document.querySelector('#baron');
        let value = parseInt(elt.getAttribute("data-after")) + 1;
        elt.setAttribute("data-after", value)

        value === LOP.jungle.baron.values.max ?
            toggleButton(LOP.jungle.baron.addBaronBtn, LOP.button.disable) :
            toggleButton(LOP.jungle.baron.removeBaronBtn, LOP.button.enable);
        lopCalcul();
    });

    input.onkeyup = () => {
        let input = LOP.link.input
        let string = input.value;
        let opgg = LOP.link.opgg;
        let porofessor = LOP.link.porofessor;

        if (!string) {
            opgg.opgg.href = opgg.base;
            porofessor.porofessor.href = porofessor.base;
        } else {
            opgg.opgg.href = opgg.extented + string;
            porofessor.porofessor.href = porofessor.extented + string;
        }
    };

    reset.addEventListener('click', () => {
        resetButton();
        init();
    });

    return {
        result,
        reset,
        button: {
            enable: false,
            disable: true
        },
        link: {
            input,
            opgg: {
                opgg,
                base: "http://euw.op.gg",
                extented: "https://euw.op.gg/summoner/userName=",
                multi: "https://euw.op.gg/multi/query="

            },
            porofessor: {
                porofessor,
                base: "http://porofessor.gg",
                extented: "https://porofessor.gg/fr/live/euw/",
                pregame: "https://porofessor.gg/fr/pregame/euw/"
            }
        },
        objectives: {
            objectif,
            turret: {
                addTurretBtn,
                removeTurretBtn,
                values: {
                    max: 11,
                    value: 0.50
                }
            },
            inib: {
                addInibBtn,
                removeInibBtn,
                values: {
                    max: 100,
                    value: 0.65
                }
            },
            nexus: {
                addNexusBtn,
                removeNexusBtn,
                values: {
                    max: 1,
                    value: 1.00
                }
            }
        },
        kda: {
            kda,
            kill: {
                addKillBtn,
                removeKillBtn,
                values: {
                    max: 100,
                    value: 2.00
                }
            },
            death: {
                addDeathBtn,
                removeDeathBtn,
                values: {
                    max: 100,
                    value: 6.00
                }
            },
            assist: {
                addAssistBtn,
                removeAssistBtn,
                values: {
                    max: 100,
                    value: 1.00
                },
            }
        },
        jungle: {
            jungle,
            carap: {
                addCarapBtn,
                removeCarapBtn,
                values: {
                    max: 100,
                    value: 0.34
                }
            },
            herald: {
                addHeraldBtn,
                removeHeraldBtn,
                values: {
                    max: 1,
                    value: 2.00
                }
            },
            drake: {
                addDrakeBtn,
                removeDrakeBtn,
                values: {
                    max: 100,
                    value: 0.60
                }
            },
            baron: {
                addBaronBtn,
                removeBaronBtn,
                values: {
                    max: 100,
                    value: 0.70
                }
            }
        }
    }
}

const LOP = lopFct();