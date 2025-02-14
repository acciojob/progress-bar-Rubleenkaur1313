let currentStep = 1;
const totalSteps = 5;

const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.addEventListener('click', () => {
    if (currentStep < totalSteps) {
        circles[currentStep].classList.add('active');
        if (currentStep > 0) {
            circles[currentStep - 1].classList.add('active');
        }
        currentStep++;
        updateButtons();
    }
});

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        circles[currentStep].classList.remove('active');
        updateButtons();
    }
});

function updateButtons() {
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === totalSteps;
}
