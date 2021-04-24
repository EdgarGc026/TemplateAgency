/* Funcionalidad del toggle */
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

/* Validacion del formulario */
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  inputValidation();
});

function inputValidation() {
  const nameValue = name.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  nameValue === ""
    ? setErrorFor(name, "Has dejado el campo vacio")
    : setSuccessFor(name);

  lastnameValue === ""
    ? setErrorFor(lastname, "Has dejado el campo vacio")
    : setSuccessFor(lastname);

  if (emailValue === "") {
    setErrorFor(email, "Has dejado el campo vacio");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Has dejado el campo vacio");
  } else {
    setSuccessFor(email);
  }

  subjectValue === ""
    ? setErrorFor(subject, "Has dejado el campo vacio")
    : setSuccessFor(subject);

  messageValue === ""
    ? setErrorForTextArea(message, "Has dejado el campo vacio")
    : setSuccessForTextArea(message);
}

function setErrorFor(input, errorMessage) {
  const input50 = input.parentNode;
  const small = input50.querySelector("small");

  //Agregamos el mesaje de error dentro del small
  small.innerText = errorMessage;
  input50.className = "input50 error";
}

function setErrorForTextArea(input, errorMessage) {
  const input100 = input.parentNode;
  const small = input100.querySelector("small");

  //Agregamos el mesaje de error dentro del small
  small.innerText = errorMessage;
  input100.className = "input100 error";
}

function setSuccessFor(input) {
  const input50 = input.parentNode;
  input50.className = "input50 success";
}

function setSuccessForTextArea(input) {
  const input100 = input.parentNode;
  input100.className = "input100 success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
