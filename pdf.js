function generatePDF() {
  if (!paymentCompleted) {
    alert("Payment required before PDF generation.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const guaranteeID = "FSTL-G-" + Date.now();

  doc.setFontSize(14);
  doc.text("FSTL VERIFICATION REPORT", 20, 20);

  doc.setFontSize(11);
  doc.text("Status: VERIFIED", 20, 35);
  doc.text("Guarantee ID: " + guaranteeID, 20, 45);

  doc.text(
    "This document confirms that FSTL has verified the submitted transaction.\n" +
    "Where reliance is placed on this verification, FSTL bears the verification risk\n" +
    "under its guarantee framework.",
    20,
    60
  );

  // QR
  generateQR(guaranteeID);
  const qrCanvas = document.querySelector("#qr canvas");
  const qrImg = qrCanvas.toDataURL("image/png");

  doc.addImage(qrImg, "PNG", 140, 30, 40, 40);

  doc.save("FSTL_Verification_Report.pdf");
}
