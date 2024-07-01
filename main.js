function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);

    if (!isNaN(income) && !isNaN(taxRate)) {
        const tax = (income * taxRate) / 100;
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Your estimated tax is: $${tax.toFixed(2)}</p>`;
    } else {
        alert('Please enter valid numbers for both income and tax rate.');
    }
}
