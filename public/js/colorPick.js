document.getElementById("color1").addEventListener("input", updateStyles);
document.getElementById("color2").addEventListener("input", updateStyles);
document.getElementById("borderColor").addEventListener("input", updateStyles);

function updateStyles() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const borderColor = document.getElementById("borderColor").value;

    const gradients = document.querySelectorAll("linearGradient");
    gradients.forEach(gradient => {
        gradient.children[0].setAttribute("stop-color", color1);
        gradient.children[1].setAttribute("stop-color", color2);
    });

    const paths = document.querySelectorAll(".border");
    paths.forEach(path => {
        path.setAttribute("stroke", borderColor);
    });
}
