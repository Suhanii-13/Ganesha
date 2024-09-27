const menuBtn = document.getElementById('menu-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});

document.addEventListener('DOMContentLoaded', () => {
    const turbanButton = document.getElementById("nextPheta");
    const necklaceButton = document.getElementById("nextHar");
    const tridentButton = document.getElementById("nextTri");

    function updateButtonText() {
        if (window.innerWidth <= 888) {
            turbanButton.textContent = 'Change Turban';
            necklaceButton.textContent = 'Change Necklace';
            tridentButton.textContent = 'Change Trident';
        } else {
            turbanButton.textContent = 'Choose here';
            necklaceButton.textContent = 'Choose here';
            tridentButton.textContent = 'Choose here';
        }
    }

    updateButtonText();

    window.addEventListener('resize', updateButtonText);
});
