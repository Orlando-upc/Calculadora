
const typeTimeSelect = document.getElementById("typeTime");
const rangeDateInputs = document.getElementById("rangeDateInputs");
const dateDetailInputs = document.getElementById("dateDetailInputs");

document.getElementById("valueToCalculate").addEventListener("change", function() {
    const selectedValue = this.value;
    document.querySelectorAll('label[id^="label"]').forEach(label => {
        setVisibility(selectedValue, label, label.htmlFor);
    });

    document.querySelectorAll('input[id^="input"]').forEach(input => {
        setVisibility(selectedValue, input, input.id);
    });
});

typeTimeSelect.addEventListener("change", function () {
    if (typeTimeSelect.value === "rangeDate") {
        rangeDateInputs.style.display = "flex";
        dateDetailInputs.style.display = "none";
    } else if (typeTimeSelect.value === "dateDetail") {
        rangeDateInputs.style.display = "none";
        dateDetailInputs.style.display = "flex";
    }
});

function setVisibility(selectedValue, element, value) {
    if (selectedValue === value) {
        element.style.display = "none"
    } else {
        element.style.display = "block";
    }
}

