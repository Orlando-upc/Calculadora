
document.getElementById("simpleInterestBtn").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const simpleInterest = (principal * rate * time) / 100;
    document.getElementById("result").innerHTML = `El interés simple es: $${simpleInterest.toFixed(2)}`;
});

document.getElementById("compoundInterestBtn").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const compoundInterest = principal * (Math.pow(1 + rate / 100, time) - 1);
    document.getElementById("result").innerHTML = `El interés compuesto es: $${compoundInterest.toFixed(2)}`;
});
