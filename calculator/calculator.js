let display = document.getElementById("display");
let displayvalue = "";
let btn = document.querySelectorAll("button");
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "X") {
      displayvalue += "*";
      display.value = displayvalue;
    } else if (btntext == "Reset") {
      displayvalue = "";
      display.value = displayvalue;
    } else if (btntext == "=") {
      display.value = eval(displayvalue);
      displayvalue = eval(displayvalue);
    } else if (btntext == "Del") {
      let z = display.value.length;
      if (z == 1) {
        display.value = 0;
        displayvalue = 0;
      } else {
        c = z - 1;
        let cutvalue = displayvalue.slice(0, c);
        displayvalue = displayvalue.slice(0, c);

        display.value = cutvalue;
      }
    } else {
      displayvalue += btntext;
      display.value = displayvalue;
    }
  });
}
