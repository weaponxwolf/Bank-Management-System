function submitTransaction() {
    const transaction = {
        transactionId: document.getElementById('transactionId').value,
        customerSsnId: document.getElementById('customerSsnId').value,
        customerName: document.getElementById('customerName').value,
        accountId: document.getElementById('accountId').value,
        aadhaarNo: document.getElementById('aadhaarNo').value,
        panNo: document.getElementById('panNo').value,
        address: document.getElementById('address').value,
        transactionDate: document.getElementById('transactionDate').value,
        contactNumber: document.getElementById('contactNumber').value,
        modeOfTransaction: document.getElementById('modeOfTransaction').value,
        amount: document.getElementById('amount').value,
        transactionType: document.getElementById('transactionType').value,
    };

    console.log('Transaction Captured:', transaction);

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Reset form
    document.getElementById('transactionForm').reset();

    setTimeout(() => successMessage.style.display = 'none', 3000);
}
