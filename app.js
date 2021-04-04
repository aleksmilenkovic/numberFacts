let fact = document.getElementById("fact");
let numberInput = document.getElementById("numberInput");
numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersapi.com/" + number, true);
  xhr.onload = function () {
    if (this.status == 200 && number !== "") fact.innerHTML = this.responseText;
  };
  xhr.send();
}
