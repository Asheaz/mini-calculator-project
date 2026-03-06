


const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const modal = document.getElementById("resultModal");
const resultText = document.getElementById("resultText");
const closeModalBtn = document.getElementById("closeModal");

/* Show Modal */
function showModal(message) {
    resultText.textContent = message;
    modal.classList.add("show");
}

/* Hide Modal */
function hideModal() {
    modal.classList.remove("show");
}

/* Get Numbers */
function getNumbers() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if (num1Input.value === "" || num2Input.value === "") {
        showModal("Please enter both numbers.");
        return null;
    }

    return { num1, num2 };
}

/* Event Listeners */
addBtn.addEventListener("click", function () {
    const numbers = getNumbers();
    if (!numbers) return;

    const result = numbers.num1 + numbers.num2;
    showModal(Result: ${result});
});

subtractBtn.addEventListener("click", function () {
    const numbers = getNumbers();
    if (!numbers) return;

    const result = numbers.num1 - numbers.num2;
    showModal(Result: ${result});
});

multiplyBtn.addEventListener("click", function () {
    const numbers = getNumbers();
    if (!numbers) return;

    const result = numbers.num1 * numbers.num2;
    showModal(Result: ${result});
});

divideBtn.addEventListener("click", function () {
    const numbers = getNumbers();
    if (!numbers) return;

    if (numbers.num2 === 0) {
        showModal("Error: Cannot divide by zero.");
        return;
    }

    const result = numbers.num1 / numbers.num2;
    showModal(Result: ${result});
});

closeModalBtn.addEventListener("click", hideModal);