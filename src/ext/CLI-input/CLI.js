function newHTML(nodeName) {
    return document.createElement(nodeName);
}

let labels = document.querySelectorAll('[class*="CLI"]');

labels.forEach(label => {
    let span = newHTML("span"),
        labelText = label.outerText;

    span.classList.add("CLI-placeholder");
    span.innerText = labelText;

    let input = label.children[0];
    if (label.classList.contains("CLI-basic-in") || label.classList.contains("CLI-basic-in-out")) {
        input.placeholder = " ";
    }

    label.innerText = null;
    label.append(input, span);

    if (label.classList.contains("CLI-highligth")) {
        let highligth = newHTML("span");
        highligth.classList.add("CLI-highligth");
        label.append(highligth);
    }
});