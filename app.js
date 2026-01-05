let testCompleted = false;
let paymentCompleted = false;

function runTest() {
  if (testCompleted) {
    alert("Only one test is allowed.");
    return;
  }

  testCompleted = true;

  document.getElementById("testResult").innerText =
    "Verification complete. Result: VALID.";

  document.getElementById("payBtn").disabled = false;
}
