let guaranteeAccepted = false;

function showGuaranteeOption() {
  document.getElementById("guaranteeBox").style.display = "block";
}

function acceptGuarantee() {
  const checkbox = document.getElementById("guaranteeCheck");
  if (!checkbox.checked) {
    alert("You must accept the guarantee terms to proceed.");
    return;
  }

  guaranteeAccepted = true;
  alert("FSTL Guarantee activated.");
}
