const images = ["../assets/pheta1.png", "../assets/pheta2.png", "../assets/pheta3.png"];
let currentIndex = 0;

const styles = [
    {
        margin: "1.5rem 0 0 13rem",
        height: "12rem",
        width: "20.4rem",
        position: "relative",
        zIndex: "6",
        transform: "rotate(-7deg)"
    },
    {
        margin: "1.5rem 0 0 13rem",
        height: "12rem",
        width: "20.4rem",
        transform: "rotate(-7deg)",
        zIndex: "6"
    },
    {
        margin: "-7.5rem 0 0 9rem",
        height: "23rem",
        width: "35.5rem",
        transform: "rotate(-3deg)",
        zIndex: "6"
    },
];

const buttons = document.getElementsByClassName("nextPheta");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        currentIndex++;
        if (currentIndex === images.length) {
            currentIndex = 0;
        }

        const imgElement = document.getElementsByClassName("pheta")[0]; 
        imgElement.src = images[currentIndex];

        const currentStyle = styles[currentIndex];
        Object.assign(imgElement.style, currentStyle);
    };
}
