const trishulImages = [
    // First set of images (initial)
    {
        trishul1: "assets/trishulG.png",
        trishul2: "assets/trishul2G.png",
        styles1: {
            marginTop: "-14rem",
            marginBottom: "9rem",
            marginLeft: "5.6rem",
            height: "8rem",
            width: "5rem",
            zIndex: "4",
            transform: "rotate(10deg)",
        },
        styles2: {
            marginTop: "-21rem",
            marginBottom: "17rem",
            marginLeft: "40.3rem",
            height: "8rem",
            width: "6rem",
            zIndex: "0",
            transform: "rotate(6deg)",
            transform: "scaleX(-1)"
        }
    },
    // Second set of images (to switch to)
    {
        trishul1: "assets/trishulS.png",
        trishul2: "assets/trishul2S.png",
        styles1: {
            marginTop: "-15rem",
            marginBottom: "8rem",
            marginLeft: "6rem",
            height: "9rem",
            width: "6rem",
            zIndex: "4",
            transform: "rotate(-8deg)",
        },
        styles2: {
            marginTop: "-20rem",
            marginBottom: "16rem",
            marginLeft: "38.8rem",
            height: "7rem",
            width: "7rem",
            zIndex: "1",
            transform: "rotate(3deg)",
            transform: "scaleX(-1)"
        }
    }
];

let currentSet = 0;

document.getElementById("nextTri").onclick = function() {
    currentSet = (currentSet + 1) % trishulImages.length;

    const trishul1 = document.getElementById("trishul1");
    const trishul2 = document.getElementById("trishul2");

    trishul1.src = trishulImages[currentSet].trishul1;
    trishul2.src = trishulImages[currentSet].trishul2;

    Object.assign(trishul1.style, trishulImages[currentSet].styles1);

    Object.assign(trishul2.style, trishulImages[currentSet].styles2);
};
