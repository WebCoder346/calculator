const boxes = document.querySelectorAll(".boxes");
const equalBtn = document.querySelector(".equalBox");
const clearBtn = document.querySelector(".clearBox");
let input = document.querySelector(".input");
let a = "";
boxes.forEach((box) => {
  box.addEventListener("click", (element) => {
    a = a + element.target.innerText;
    document.querySelector(".input").value = a;
  })
})
equalBtn.addEventListener("click", () => {
  
  input.value = eval(eval(a));
  a = input.value;
})
clearBtn.addEventListener("click", () => {
  a = "";
  input.value = "0";
})
document.querySelector(".x").addEventListener("click", () => {
  a = a + "*";
  document.querySelector(".input").value = a;
})