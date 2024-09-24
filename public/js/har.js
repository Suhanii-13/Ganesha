const har = ["assets/har1.png", "assets/har2.png", "assets/har3.png"];
let currIndex = 0;

const stylesHar = [
    {
        marginTop: "-22rem",
        marginBottom: "8rem",
        marginLeft: "20rem",
        height: "11rem",
        width: "14rem",
        position: "relative",
        zIndex: "3"
    },
    {
        marginTop: "-22rem",
        marginBottom: "7rem",
        marginLeft: "20.6rem",
        height: "15rem",
        width: "14rem",
        position: "relative",
        zIndex: "3"
    },
    {
        marginTop: "-18rem",
        marginBottom: "9rem",
        marginLeft: "21rem",
        height: "11rem",
        width: "14rem",
        position: "relative",
        zIndex: "3"
    }
];

document.getElementById("nextHar").onclick = function() {
    currIndex++;
    if (currIndex === har.length) {
        currIndex = 0;
    }

    const harEle = document.getElementById("Har");
    harEle.src = har[currIndex];

    const currentStyle = stylesHar[currIndex];
    Object.assign(harEle.style, currentStyle);
};