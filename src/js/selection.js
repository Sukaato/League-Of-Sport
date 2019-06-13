// DIV GLOBAL
    result = getEltById('result');

// BOUTON DE SELECTION
let selectObj = document.querySelectorAll('#objectif + label')[0];
    selectKda = document.querySelectorAll('#kda + label')[0];
    selectJng = document.querySelectorAll('#jungle + label')[0];

selectObj.addEventListener('click', () => toggleView(getEltById('objectif')));
selectKda.addEventListener('click', () => toggleView(getEltById('kda')));
selectJng.addEventListener('click', () => toggleView(getEltById('jungle')));