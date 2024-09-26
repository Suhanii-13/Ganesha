document.getElementById("color1").addEventListener("input", updateStyles);
document.getElementById("color2").addEventListener("input", updateStyles);

function updateStyles() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;

    const gradients = document.querySelectorAll("linearGradient");
    gradients.forEach(gradient => {
        gradient.children[0].setAttribute("stop-color", color1);
        gradient.children[1].setAttribute("stop-color", color2);
    });

}

const colorPicker = document.getElementById('bg').addEventListener("input", UpdatebgColor);
     function UpdatebgColor(){
          const body = document.body;
          const bg = document.getElementById("bg").value;
        
          body.style.backgroundImage = `
            url("../assets/bg.png"), 
            radial-gradient(
                circle, 
                rgba(173, 216, 230, 0.5) 30%, 
                ${bg} 80%)`;
     }    