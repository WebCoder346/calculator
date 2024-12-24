const display = document.querySelector(".input");

Array.from(document.querySelectorAll(".box")).forEach(e => {
  e.addEventListener("click", () => {
    let inp = e.textContent.trim();
    let num = "";
    if (inp !== "=" & inp != "c" & inp !== "") {
      display.value += inp;
    }
    if (inp === "=") {

      display.value = display.value.replace("÷", "/");
      display.value = display.value.replace("×", "*");
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    }
    else if (inp == "c") {
      display.value = "";
      num = "";
    }
    else if (inp == "") {
      display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
    }
  })
})
