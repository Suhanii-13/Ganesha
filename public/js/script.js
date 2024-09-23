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
const images = ["../assets/pheta1.png", "../assets/pheta2.png", "../assets/pheta3.png"];
let currentIndex = 0;

const styles = [
    {
        margin: "1.5rem 0 0 13rem",
        height: "12rem",
        width: "20.4rem",
        position: "relative",
        zIindex: "2",
        transform: "rotate(-7deg)"
    },
    {
        margin: "1.5rem 0 0 13rem",
        height: "12rem",
        width: "20.4rem",
        transform: "rotate(-7deg)",
        zIndex: 2
    },
    {
    margin: "-7.5rem 0 0 9rem",
    height: "23rem",
    width: "35.5rem",
    transform: "rotate(-3deg)",
    zIndex: 2
  },
  
];

document.getElementById("nextBtn").onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  const imgElement = document.getElementById("image");
  imgElement.src = images[currentIndex];
  
  const currentStyle = styles[currentIndex % styles.length];
  Object.assign(imgElement.style, currentStyle);
};

//menubar
const menuBtn = document.getElementById('menu-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});
