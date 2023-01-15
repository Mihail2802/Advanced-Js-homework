let submitBtn = document.querySelector("#btn-submit");
let paragraph_container = document.querySelector("#paragraph_container");
let inputUserName = document.querySelector("#firstName");
let inputLastname = document.querySelector("#lastName");
let inputAge = document.querySelector("#Age");
let inputEmail = document.querySelector("#Email");
let database = [];

function Student(inputUserName, inputLastname, inputAge, inputEmail) {
  this.inputUserName = inputUserName;
  this.inputLastname = inputLastname;
  this.inputAge = inputAge;
  this.inputEmail = inputEmail;
}

function printFormParams(student) {
  paragraph_container.innerHTML = `${student.inputUserName} ${student.inputLastname}, ${student.inputAge}-${student.inputEmail}`;
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let userName = inputUserName.value;
  let lastname = inputLastname.value;
  let age = inputAge.value;
  let email = inputEmail.value;
  let mihail = new Student(userName, lastname, age, email);
  printFormParams(mihail);
  database.push(mihail);
  inputUserName.value = "";
  inputLastname.value = "";
  inputAge.value = "";
  inputEmail.value = "";
});
