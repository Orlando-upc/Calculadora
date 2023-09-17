
const typeTimeSelect = document.getElementById("typeTime");
const rangeDateInputs = document.getElementById("rangeDateInputs");
const dateDetailInputs = document.getElementById("dateDetailInputs");

document.getElementById("selectTypeInterest").addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === 'simpleInterest') {
        document.getElementById('simpleInterest').style.display = 'block';
    } else {
        document.getElementById('simpleInterest').style.display = 'none';
    }

    if (selectedValue === 'compoundInterest') {
        document.getElementById('compoundInterest').style.display = 'block';
    } else {
        document.getElementById('compoundInterest').style.display = 'none';
    }
})

document.getElementById("valueToCalculate").addEventListener("change", function() {
    const selectedValue = this.value;
    document.querySelectorAll('label[id^="label"]').forEach(label => {
        setVisibility(selectedValue, label, label.htmlFor);
    });

    document.querySelectorAll('input[id^="input"]').forEach(input => {
        setVisibility(selectedValue, input, input.id);
    });

    if (selectedValue === 'inputFinalAmount') {
        document.getElementById("inputInterest").style.display = 'none';
        document.getElementById("labelInterest").style.display = 'none';
    }

    if (selectedValue === 'inputInterest' || selectedValue === 'inputInterestRate' || selectedValue === 'inputCapital' || selectedValue === 'inputTime') {
        document.getElementById("inputFinalAmount").style.display = 'none';
        document.getElementById("labelFinalAmount").style.display = 'none';
    }

    if (selectedValue === 'inputTime') {
        document.getElementById("time").style.display = 'none';
    } else {
        document.getElementById("time").style.display = 'block';
    }
    document.getElementById('resultSimpleInterest').innerHTML = '';
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
    element.value = '';
}

document.getElementById("simpleInterestBtn").addEventListener("click", function() {
    const capital = parseFloat(document.getElementById("inputCapital").value);
    const inputInterest = parseFloat(document.getElementById("inputInterest").value);
    const inputInterestRate = parseFloat(document.getElementById("inputInterestRate").value);
    const day = parseFloat(document.getElementById("day").value);
    const month = parseFloat(document.getElementById("month").value);
    const year = parseFloat(document.getElementById("year").value);
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    // calcular monto final, teniendo capital, tasa de interes y tiempo
    if (valueToCalculate.value === 'inputFinalAmount') {
        let montoFinal= 0;
        if (typeTimeSelect.value === 'dateDetail') {
            // Si viene dia, mes y año
            if (day > 0 && month > 0 && year > 0) {
                montoFinal = capital * (1 + (inputInterestRate / 100) * (year + month /12 + day / 365));
            }
            if (day > 0 && month === 0 && year === 0) {
                montoFinal = capital * (1 + (inputInterestRate / 100) * (day / 365));
            }
            if (day === 0 && month > 0 && year === 0) {
                montoFinal = capital * (1 + (inputInterestRate / 100) * (month / 12));
            }
            if (day > 0 && month === 0 && year === 0) {
                montoFinal = capital * (1 + (inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const diferenciaEnMilisegundos = Math.abs(endDate.getTime() - startDate.getTime());
            const days = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
            debugger
            montoFinal = capital * (1 + (inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("inputInterest").value = montoFinal - capital;
        document.getElementById("resultSimpleInterest").innerHTML = `El monto final es: $${montoFinal}`;

        // calcular interés que produce un capital, teniendo capital, tasa de interes y tiempo
    } else if (valueToCalculate.value === 'inputInterest') {
        let interes = 0;
        if (typeTimeSelect.value === 'dateDetail') {
            // Si viene dia, mes y año
            if (day > 0 && month > 0 && year > 0) {
                interes = capital * ((inputInterestRate / 100) * (year + month /12 + day / 365));
            }
            if (day > 0 && month === 0 && year === 0) {
                interes = capital * ((inputInterestRate / 100) * (day / 365));
            }
            if (day === 0 && month > 0 && year === 0) {
                interes = capital * ((inputInterestRate / 100) * (month / 12));
            }
            if (day > 0 && month === 0 && year === 0) {
                interes = capital * ((inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            interes  = capital * ((inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("resultSimpleInterest").innerHTML = `El interés que produce es: $${interes}`;

        // calcular capital, teniendo tasa de interes, intereses y tiempo
    } else if (valueToCalculate.value === 'inputCapital') {
        let capital = 0;
        if (typeTimeSelect.value === 'dateDetail') {
            // Si viene dia, mes y año
            if (day > 0 && month > 0 && year > 0) {
                capital = inputInterest / ((inputInterestRate / 100) * (year + month /12 + day / 365));
            }
            if (day > 0 && month === 0 && year === 0) {
                capital = inputInterest / ((inputInterestRate / 100) * (day / 365));
            }
            if (day === 0 && month > 0 && year === 0) {
                capital = inputInterest / ((inputInterestRate / 100) * (month / 12));
            }
            if (day > 0 && month === 0 && year === 0) {
                capital = inputInterest / ((inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            capital = intereses / ((inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("resultSimpleInterest").innerHTML = `El capital es: $${capital}`;
        // calcular tasa de interés, teniendo capital, interes y tiempo
    } else if (valueToCalculate.value === 'inputInterestRate') {
        let tasaInteres = 0;
        if (typeTimeSelect.value === 'dateDetail') {
            // Si viene dia, mes y año
            if (day > 0 && month > 0 && year > 0) {
                tasaInteres = inputInterest / ( capital * (year + month /12 + day / 365));
            }
            if (day > 0 && month === 0 && year === 0) {
                tasaInteres = inputInterest / ( capital * (day / 365));
            }
            if (day === 0 && month > 0 && year === 0) {
                tasaInteres = inputInterest / ( capital * (month / 12));
            }
            if (day > 0 && month === 0 && year === 0) {
                tasaInteres = inputInterest / ( capital * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            tasaInteres = inputInterest / ((inputInterestRate / 100) * (days / 365));
        }
        tasaInteres = tasaInteres * 100;
        document.getElementById("resultSimpleInterest").innerHTML = `La tasa de interés es: ${tasaInteres}%`;

        // calcular tiempo, teniendo capital, interes y tasa de interes
    } else if (valueToCalculate.value === 'inputTime') {
        let tiempo = (inputInterest / (capital * (inputInterestRate / 100)));
        if (tiempo > 1) {
            const decimal = tiempo % 1; // tomo la parte decimal
            const anio = Math.floor(tiempo); // tomo la parte entera
            const dias = decimal * 365;
            const meses = Math.floor(dias / 30);
            const diasRestantes = dias % 30;
            document.getElementById("resultSimpleInterest").innerHTML = `El tiempo es: ${anio} año(s), ${meses} mes(es), ${Math.floor(diasRestantes)} dia(s)`;

        } else {
            const decimal = tiempo % 1;
            const dias = decimal * 365;
            const meses = Math.floor(dias / 30);
            const diasRestantes = dias % 30;
            document.getElementById("resultSimpleInterest").innerHTML = `El tiempo es: ${meses} mes(es), ${Math.floor(diasRestantes)} dia(s)`;
        }
    }
});
