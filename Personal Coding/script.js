const typingText = document.getElementById('typingText');
const cursor = document.getElementById('cursor');

const texts = ["Frontend Developer.", "Firefighter", "Policeman"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    let displayText = currentText.substring(0, charIndex);

    typingText.textContent = displayText;

    if (isDeleting) {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(type, 100);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        }
    } else {
        if (charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, 150);
        } else {
            isDeleting = true;
            setTimeout(type, 1000);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});
