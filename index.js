document.getElementById("simpleInterestBtn").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    if ((isNaN(principal) || principal === 0) && (isNaN(rate) || rate === 0) && (isNaN(time) || time === 0)) {
        document.getElementById("myModal").style.display = "flex";
    } else {
        const simpleInterest = (principal * rate * time) / 100;
        document.getElementById("result").innerHTML = `El interés simple es: $${simpleInterest.toFixed(2)}`;
    }
});

document.getElementById("compoundInterestBtn").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    if ((isNaN(principal) || principal === 0) && (isNaN(rate) || rate === 0) && (isNaN(time) || time === 0)) {
        document.getElementById("myModal").style.display = "flex";
    } else {
        const compoundInterest = principal * (Math.pow(1 + rate / 100, time) - 1);
        document.getElementById("result").innerHTML = `El interés compuesto es: $${compoundInterest.toFixed(2)}`;
    }
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});
