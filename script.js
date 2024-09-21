//  color pickers
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


//pheta
const images = ["pheta1.png", "pheta2.png"];
let currentIndex = 0;

document.getElementById("nextBtn").onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("image").src = images[currentIndex]; 
};


//menubar
const menuBtn = document.getElementById('menu-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});
