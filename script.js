// Add event listeners for the color pickers
document.getElementById("color1").addEventListener("input", updateStyles);
document.getElementById("color2").addEventListener("input", updateStyles);
document.getElementById("borderColor").addEventListener("input", updateStyles);

function updateStyles() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const borderColor = document.getElementById("borderColor").value;

    // Update each gradient dynamically
    const gradients = document.querySelectorAll("linearGradient");
    gradients.forEach(gradient => {
        gradient.children[0].setAttribute("stop-color", color1);
        gradient.children[1].setAttribute("stop-color", color2);
    });

    // Update all SVG paths dynamically
    const paths = document.querySelectorAll(".border");
    paths.forEach(path => {
        path.setAttribute("stroke", borderColor);
    });
}


const images = ["pheta1.png", "pheta2.png"]; // List of image file names
let currentIndex = 0;

document.getElementById("nextBtn").onclick = function() {
  currentIndex = (currentIndex + 1) % images.length; // Loop to the next image
  document.getElementById("image").src = images[currentIndex]; // Update the img src
};