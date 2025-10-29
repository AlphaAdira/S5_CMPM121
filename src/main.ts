// CMPM 121 Smelly Code Activity

let counter = 0;

// button IDs and heading text
const increment = "increment",
  counterDisplay = "counter",
  header = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${counterDisplay}">0</span></p>
    <button id="${increment}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get references to html elements
  const IncrementBtn = document.getElementById(increment);
  const DecrementBtn = document.getElementById("dec");
  const ResetBtn = document.getElementById("reset");
  const counterElement = document.getElementById(counterDisplay);

  // Check if any element is missing, then exit the function
  if (!IncrementBtn || !DecrementBtn || !ResetBtn || !counterElement) return;

  // click events
  IncrementBtn.addEventListener("click", () => {
    counter++;
    updateCounter();
  });

  DecrementBtn.addEventListener("click", () => {
    counter--;
    updateCounter();
  });

  ResetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounter();
  });

  function updateCounter() {
    // Update the counter display
    counterElement!.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  }
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
