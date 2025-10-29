// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
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

  // Get the increment button element from the document
  const IncrementBtn = document.getElementById(increment);
  // Get the decrement button element from the document
  const DecrementBtn = document.getElementById("dec");
  // Get the reset button element from the document
  const ResetBtn = document.getElementById("reset");
  // Get the counter span element from the document
  const counterElement = document.getElementById(counterDisplay);

  // Check if any element is missing, then exit the function
  if (!IncrementBtn || !DecrementBtn || !ResetBtn || !counterElement) return;

  // Add click event to the increment button
  IncrementBtn.addEventListener("click", () => {
    // Increase the counter by 1
    counter++;
    // Update the counter display
    counterElement.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });

  // Add click event to the decrement button
  DecrementBtn.addEventListener("click", () => {
    // Decrease the counter by 1
    counter--;
    // Update the counter display
    counterElement.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });

  // Add click event to the reset button
  ResetBtn.addEventListener("click", () => {
    // Reset the counter to 0
    counter = 0;
    // Update the counter display
    counterElement.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
