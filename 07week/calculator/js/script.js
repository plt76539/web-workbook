console.log("hhh");



function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value += "-";
}

function multiply() {
  document.querySelector("#results").value += "*";
}

function divide() {
  document.querySelector("#results").value += "/";
}

function flipPole() {
  let num = document.querySelector("#results").value;

  if (num[0] == "-") {
    document.querySelector("#results").value = num.slice(1);
  } else {
    document.querySelector("#results").value = "-" + document.querySelector("#results").value;
  }
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results")).value;
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}