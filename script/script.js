var inputEq = document.getElementById("input-text");

//function for adding text to input
function changeInp(val) {
  inputEq.value += val;
}
//function for evaluation
function solve() {
  let x = inputEq.value;
  let y = eval(x);
  inputEq.value = y;
}
//function for clearing the display
function clr() {
  inputEq.value = "";
}
