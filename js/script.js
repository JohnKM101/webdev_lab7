function init() {
  // add your JavaScript between these two lines of code
  
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const userText = input.value;

    alert("Mishal: " + userText);

    output.textContent = userText;
  });

}

window.addEventListener('load', init);
