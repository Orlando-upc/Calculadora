
const typeTimeSelect = document.getElementById("typeTime");
const rangeDateInputs = document.getElementById("rangeDateInputs");
const dateDetailInputs = document.getElementById("dateDetailInputs");

function hidenLabelInput() {
    document.getElementById('labelInterest').style.display = 'none';
    document.getElementById('inputInterest').style.display = 'none';
    document.getElementById('labelInterestRate').style.display = 'none';
    document.getElementById('inputInterestRate').style.display = 'none';
    document.getElementById('labelCapital').style.display = 'none';
    document.getElementById('inputCapital').style.display = 'none';
    document.getElementById('labelFinalAmount').style.display = 'none';
    document.getElementById('inputFinalAmount').style.display = 'none';
    document.getElementById('time').style.display = 'none';
}

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

    if (selectedValue === 'simpleInterest' || selectedValue === 'compoundInterest') {
        document.getElementById('interest').style.display = 'block';
    } else {
        document.getElementById('interest').style.display = 'none';
    }

    if (selectedValue === 'internalRateReturn') {
        document.getElementById('internalRateReturnContainer').style.display = 'block';
        document.getElementById('internalRateReturn').style.display = 'block';
    } else {
        document.getElementById('internalRateReturnContainer').style.display = 'none';
        document.getElementById('internalRateReturn').style.display = 'none';
    }

    if (selectedValue === 'AmortizationCapitalization') {
        document.getElementById('AmortizationCapitalizationSelect').style.display = 'block';
        document.getElementById('AmortizationCapitalization').style.display = 'block';
    } else {
        document.getElementById('AmortizationCapitalizationSelect').style.display = 'none';
        document.getElementById('AmortizationCapitalization').style.display = 'none';
    }

    hidenLabelInput();
    document.getElementById("valueToCalculate").value = 0;

})

document.getElementById("valueToCalculateAC").addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === 'simpleCapitalization' || selectedValue === 'compoundCapitalization') {
        document.getElementById('CapitalizationSelectValue').style.display = 'block';
    } else {
        document.getElementById('CapitalizationSelectValue').style.display = 'none';
    } 
    if (selectedValue === 'AmortizationConstant') {
        document.getElementById('labelCapitalAC').style.display = 'block';
        document.getElementById('inputCapitalAC').style.display = 'block';
        document.getElementById('time').style.display = 'block';
    } else {
        document.getElementById('labelCapitalAC').style.display = 'none';
        document.getElementById('inputCapitalAC').style.display = 'none';
        document.getElementById('time').style.display = 'none';
    }

})

document.getElementById("valueToCalculateACValue").addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === 'inputInterestAC' || selectedValue === 'inputFinalAmountAC') {
        document.getElementById('labelInterestRateAC').style.display = 'block';
        document.getElementById('inputInterestRateAC').style.display = 'block';
        document.getElementById('labelCapitalAC').style.display = 'block';
        document.getElementById('inputCapitalAC').style.display = 'block';
        document.getElementById('time').style.display = 'block';
    } else {
        document.getElementById('labelInterestRateAC').style.display = 'none';
        document.getElementById('inputInterestRateAC').style.display = 'none';
        document.getElementById('labelCapitalAC').style.display = 'none';
        document.getElementById('inputCapitalAC').style.display = 'none';
        document.getElementById('time').style.display = 'none';
    } 
})

document.getElementById("valueToCalculate").addEventListener("change", function() {
    const selectedValue = this.value;
    hidenLabelInput();
    if (document.getElementById("selectTypeInterest").value === 'simpleInterest') {
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
    } else if (document.getElementById("selectTypeInterest").value === 'compoundInterest') {

        if (selectedValue === 'inputFinalAmount') {
            document.getElementById('labelCapital').style.display = 'block';
            document.getElementById('inputCapital').style.display = 'block';
            document.getElementById('labelInterestRate').style.display = 'block';
            document.getElementById('inputInterestRate').style.display = 'block';
            document.getElementById('time').style.display = 'block';

        }
        if (selectedValue === 'inputTime') {
            document.getElementById('labelCapital').style.display = 'block';
            document.getElementById('inputCapital').style.display = 'block';
            document.getElementById('labelFinalAmount').style.display = 'block';
            document.getElementById('inputFinalAmount').style.display = 'block';
            document.getElementById('labelInterestRate').style.display = 'block';
            document.getElementById('inputInterestRate').style.display = 'block';
        }

        if (selectedValue === 'inputInterestRate') {
            document.getElementById('labelCapital').style.display = 'block';
            document.getElementById('inputCapital').style.display = 'block';
            document.getElementById('labelFinalAmount').style.display = 'block';
            document.getElementById('inputFinalAmount').style.display = 'block';
            document.getElementById('time').style.display = 'block';
        }

        if (selectedValue === 'inputCapital') {
            document.getElementById('labelInterestRate').style.display = 'block';
            document.getElementById('inputInterestRate').style.display = 'block';
            document.getElementById('labelFinalAmount').style.display = 'block';
            document.getElementById('inputFinalAmount').style.display = 'block';
            document.getElementById('time').style.display = 'block';
        }
        //document.getElementById('labelInterest').style.display = 'none';
        //document.getElementById('inputInterest').style.display = 'none';
    }

    document.getElementById('result').innerHTML = '';
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
            if (day === 0 && month === 0 && year > 0) {
                montoFinal = capital * (1 + (inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const diferenciaEnMilisegundos = Math.abs(endDate.getTime() - startDate.getTime());
            const days = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
            montoFinal = capital * (1 + (inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("result").innerHTML = `El monto final es: $${Math.floor(montoFinal)}`;

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
            if (day === 0 && month === 0 && year > 0) {
                interes = capital * ((inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            interes  = capital * ((inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("result").innerHTML = `El interés que produce es: $${Math.floor(interes)}`;

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
            if (day === 0 && month === 0 && year > 0) {
                capital = inputInterest / ((inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            capital = intereses / ((inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("result").innerHTML = `El capital es: $${capital}`;
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
            if (day === 0 && month === 0 && year > 0) {
                tasaInteres = inputInterest / ( capital * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            tasaInteres = inputInterest / ((inputInterestRate / 100) * (days / 365));
        }
        tasaInteres = tasaInteres * 100;
        document.getElementById("result").innerHTML = `La tasa de interés es: ${tasaInteres}%`;

        // calcular tiempo, teniendo capital, interes y tasa de interes
    } else if (valueToCalculate.value === 'inputTime') {
        let tiempo = (inputInterest / (capital * (inputInterestRate / 100)));
        if (tiempo > 1) {
            const decimal = tiempo % 1; // tomo la parte decimal
            const anio = Math.floor(tiempo); // tomo la parte entera
            const dias = decimal * 365;
            const meses = Math.floor(dias / 30);
            const diasRestantes = dias % 30;
            document.getElementById("result").innerHTML = `El tiempo es: ${anio} año(s), ${meses} mes(es), ${Math.floor(diasRestantes)} dia(s)`;

        } else {
            const decimal = tiempo % 1;
            const dias = decimal * 365;
            const meses = Math.floor(dias / 30);
            const diasRestantes = dias % 30;
            document.getElementById("result").innerHTML = `El tiempo es: ${meses} mes(es), ${Math.floor(diasRestantes)} dia(s)`;
        }
    }
});

document.getElementById("compoundInterestBtn").addEventListener("click", function() {
    const capital = parseFloat(document.getElementById("inputCapital").value);
    const inputInterest = parseFloat(document.getElementById("inputInterest").value);
    const inputInterestRate = parseFloat(document.getElementById("inputInterestRate").value);
    const inputFinalAmount = parseFloat(document.getElementById("inputFinalAmount").value);
    const day = parseFloat(document.getElementById("day").value);
    const month = parseFloat(document.getElementById("month").value);
    const year = parseFloat(document.getElementById("year").value);
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    // calcular monto compuesto
    if (valueToCalculate.value === 'inputFinalAmount') {
        let montoCompuesto= 0;
        if (typeTimeSelect.value === 'dateDetail') {
            // Si viene dia, mes y año
            if (day > 0 && month > 0 && year > 0) {
                montoCompuesto = capital * (1 + (inputInterestRate / 100) * (year + month /12 + day / 365));
            }
            if (day > 0 && month === 0 && year === 0) {
                montoCompuesto = capital * (1 + (inputInterestRate / 100) * (day / 365));
            }
            if (day === 0 && month > 0 && year === 0) {
                montoCompuesto = capital * Math.pow(1 + (inputInterestRate / 100), month);
            }
            if (day === 0 && month === 0 && year > 0) {
                montoCompuesto = capital * (1 + (inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const diferenciaEnMilisegundos = Math.abs(endDate.getTime() - startDate.getTime());
            const days = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
            montoCompuesto = capital * (1 + (inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("result").innerHTML = `El monto compuesto es: $${Math.floor(montoCompuesto)}`;

        // calcular
    } else if (valueToCalculate.value === 'inputInterestRate') {
        let tasaInteres = 0;
        if (typeTimeSelect.value === 'dateDetail') {
            // i = (MC / C ) ^ 1/n - 1
            if (day > 0 && month > 0 && year > 0) {
                tasaInteres = capital * ((inputInterestRate / 100) * (year + month /12 + day / 365));
            }
            if (day > 0 && month === 0 && year === 0) {
                tasaInteres = capital * ((inputInterestRate / 100) * (day / 365));
            }
            if (day === 0 && month > 0 && year === 0) {
                tasaInteres= Math.pow(inputFinalAmount / capital, 1/month) - 1;
            }
            if (day === 0 && month === 0 && year > 0) {
                tasaInteres = capital * ((inputInterestRate / 100) * (year));
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            tasaInteres  = capital * ((inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("result").innerHTML = `La tasa de interés es: ${tasaInteres}% = ${tasaInteres.toFixed(3)}% `;

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
            if (day === 0 && month === 0 && year > 0) {
                capital = inputFinalAmount / Math.pow(1 + (inputInterestRate / 100), year);
            }
        } else if (typeTimeSelect.value === 'rangeDate') {
            const days = startDate - endDate;
            capital = intereses / ((inputInterestRate / 100) * (days / 365));
        }
        document.getElementById("result").innerHTML = `El capital es: $${Math.floor(capital)}`;
    // tiempo compuesto
    } else if (valueToCalculate.value === 'inputTime') {
        let tiempo = (Math.log(inputFinalAmount) - Math.log(capital)) / Math.log((1 + (inputInterestRate / 100)));
        document.getElementById("result").innerHTML = `El tiempo es: ${tiempo} = ${tiempo.toFixed(2)}`;
    }
})

document.getElementById("internalRateReturnBtn").addEventListener("click", function() {

    inputValues = []; 
    inputValues.push(parseFloat(document.getElementById("inputInvestment").value * -1))
    const inputs = document.querySelectorAll("#inputContainer input");
    inputs.forEach(input => {
    inputValues.push(parseFloat(input.value));
    });

    let irr = 0.1;
    let difference = 1;

    for (let i = 0; i < 1000; i++) {
        let npv = 0;
        let npvDerivative = 0;

        for (let j = 0; j < inputValues.length; j++) {
        npv += inputValues[j] / Math.pow(1 + irr, j);
        npvDerivative += -j * inputValues[j] / Math.pow(1 + irr, j + 1);
        }

        irr = irr - npv / npvDerivative;
        difference = npv;
        if (Math.abs(difference) < 0.0001) {
            break;
        }
    }
    irr = irr*100;
    document.getElementById("result").innerHTML = `La TIR es: ${irr.toFixed(2)}%`;

})

document.getElementById("AmortizationCapitalizationBtn").addEventListener("click", function() {
    let principal = parseFloat(document.getElementById("inputCapitalAC").value);
    let tasaInteres = parseFloat(document.getElementById("inputInterestRateAC").value);
    const day = parseFloat(document.getElementById("day").value);
    const month = parseFloat(document.getElementById("month").value);
    const year = parseFloat(document.getElementById("year").value);
    const selectedValue = document.getElementById("valueToCalculateAC").value
    const selectedACValue = document.getElementById("valueToCalculateACValue").value
    let periodos = 0;
    if (year != 0) {
        periodos = year;
    } else if (month != 0) {
        periodos = month / 12;
    } else if (day != 0) {
        let meses = day / 30
        periodos = Math.floor(meses) / 12;
    }
    if (selectedValue == "simpleCapitalization" && selectedACValue == "inputFinalAmountAC") {
        const tasaDecimal = tasaInteres / 100;
        const montoAcumulado = principal * (1 + tasaDecimal * periodos);
        document.getElementById("result").innerHTML = `El monto es: ${Math.floor(montoAcumulado)}`;
    } else if (selectedValue == "simpleCapitalization" && selectedACValue == "inputInterestAC") {
        const tasaInteresDecimal = tasaInteres / 100;
        let interes = principal * tasaInteresDecimal * periodos;
        interes = Math.floor(interes);
        document.getElementById("result").innerHTML = `El interes Ganado es: ${interes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    } else if (selectedValue == "compoundCapitalization" && selectedACValue == "inputInterestAC") {
        const tasaInteresDecimal = tasaInteres / 100;
        const montoAcumulado = principal * Math.pow(1 + tasaInteresDecimal / 1, 1 * periodos);
        let interesGanado = montoAcumulado - principal;
        interesGanado = Math.floor(interesGanado);
        document.getElementById("result").innerHTML = `El interes Ganado es: ${interesGanado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    } else if (selectedValue == "compoundCapitalization" && selectedACValue == "inputFinalAmountAC") {
        const tasaInteresDecimal = tasaInteres / 100;
        const montoAcumulado = principal * Math.pow(1 + tasaInteresDecimal / 1, 1 * periodos);
        document.getElementById("result").innerHTML = `El monto es: ${Math.floor(montoAcumulado)}`;
    } else if (selectedValue == "AmortizationConstant") {
        const amortizacion = principal / periodos;
        document.getElementById("result").innerHTML = `La amortizacion constante es: ${Math.floor(amortizacion)}`;
    }else {
        document.getElementById("result").innerHTML = "";
    }
})

function generarInputs() {
    const cantidad = parseFloat(document.getElementById("numberFlows").value);
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Limpiar el contenedor

    for (let i = 1; i <= cantidad; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Flujo ${i}`;
      input.style = "width: 90%;"
      inputContainer.appendChild(input);
    }
  }

  // Agregar un evento change al select
  document.getElementById("numberFlows").addEventListener("change", generarInputs);
  
