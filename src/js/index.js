const screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");

buttons = [...buttons];

function calculate() {
  screen.textContent = eval(screen.textContent);
}

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    console.log("d", action);

    if (action === "=") {
      calculate();
    } else if (action === "clear") {
      screen.textContent = " ";
    } else if (action === "del") {
      screen.textContent = screen.textContent.slice(0, -1);
    } else {
      screen.textContent += action;
    }
  });
});
