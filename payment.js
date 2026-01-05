function makePayment() {
  if (!testCompleted) {
    alert("Run verification first.");
    return;
  }

  paymentCompleted = true;
  document.getElementById("pdfBtn").disabled = false;

  alert("Payment confirmed. PDF unlocked.");
}
