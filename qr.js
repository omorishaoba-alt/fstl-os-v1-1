function generateQR(text) {
  const qrContainer = document.getElementById("qr");
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: text,
    width: 128,
    height: 128
  });
}
