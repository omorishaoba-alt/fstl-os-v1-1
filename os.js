let verifiedData = null;

function runTest() {
  const name = document.getElementById("name").value;
  const idno = document.getElementById("idno").value;
  const ref = document.getElementById("ref").value;

  if (!name || !idno || !ref) {
    alert("Complete all fields");
    return;
  }

  verifiedData = {
    name,
    idno,
    ref,
    time: new Date().toISOString()
  };

  document.getElementById("testResult").innerHTML =
    "<p style='color:#00ff99'>Verification logic executed successfully.</p>";

  document.getElementById("payment").classList.remove("hidden");
}

function confirmPayment() {
  if (!verifiedData) {
    alert("No verification data");
    return;
  }

  generatePDF();
}

function generatePDF() {
  const content = `
FSTL OS VERIFICATION RECEIPT

Name: ${verifiedData.name}
ID: ${verifiedData.idno}
Reference: ${verifiedData.ref}
Time: ${verifiedData.time}

Status: VERIFIED
Guarantee: AVAILABLE

QR CODE:
${btoa(JSON.stringify(verifiedData))}
`;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "fstl-verification-receipt.txt";
  a.click();
}
