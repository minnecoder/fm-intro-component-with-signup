const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pw = document.getElementById("pw");
const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const emailError = document.getElementById("email-error");
const pwError = document.getElementById("pw-error");
const reg = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

function verifyInputs() {
  if (fname.value == "") {
    fnameError.classList.remove("hidden");
    fname.classList.add("error");
    fname.placeholder = "";
  }
  if (lname.value == "") {
    lnameError.classList.remove("hidden");
    lname.classList.add("error");
    lname.placeholder = "";
  }
  if (pw.value == "") {
    pwError.classList.remove("hidden");
    pw.classList.add("error");
    pw.placeholder = "";
  }
  if (!reg.test(email.value)) {
    emailError.classList.remove("hidden");
    email.classList.add("error");
    email.value = "";
    email.placeholder = "email@example.com";
  }
}
