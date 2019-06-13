let opgg = getEltById("opgg");
    poro = getEltById("porofessor");
    opggBaseUrl = opgg.href;
    poroBaseUrl = poro.href;
    input = getEltById("pseudo");
    

input.onkeyup = () => reloadLink();