function newHTML(nodeName) {
    return document.createElement(nodeName);
}

var labels = document.querySelectorAll('[class*="CLI"]');

labels.forEach(e => {
    var span = newHTML("span"),
        labelText = e.outerText;

    span.classList.add("CLI-placeholder");
    span.innerText = labelText;
    
    var input = e.children[0];
    if (e.classList.contains("CLI-basic-in") || e.classList.contains("CLI-basic-in-out")) {
        input.placeholder = " ";
    }
    
    e.innerText = null;
    e.append(input, span);

    if (e.classList.contains("CLI-highligth")) {
        var highligth = newHTML("span");
        highligth.classList.add("CLI-highligth");
        e.append(highligth);
    }
});