function newHTML(nodeName) {
    return document.createElement(nodeName);
}

let labels = document.querySelectorAll('[class*="CLI"]');

labels.forEach(e => {
    let span = newHTML("span"),
        labelText = e.outerText;

    span.classList.add("CLI-placeholder");
    span.innerText = labelText;
    
    let input = e.children[0];
    if (e.classList.contains("CLI-basic-in") || e.classList.contains("CLI-basic-in-out")) {
        input.placeholder = " ";
    }
    
    e.innerText = null;
    e.append(input, span);

    if (e.classList.contains("CLI-highligth")) {
        let highligth = newHTML("span");
        highligth.classList.add("CLI-highligth");
        e.append(highligth);
    }
});