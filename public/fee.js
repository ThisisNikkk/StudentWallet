document.getElementById("date").innerHTML = new Date().toLocaleDateString();
document.getElementById("studentName").innerHTML = "John Doe";
document.getElementById("amountPaid").innerHTML = "$200";
document.getElementById("feeType").innerHTML = "Tuition Fee";
document.getElementById("receiptNumber").innerHTML = "001";

function printReceipt() {
    window.print();
}