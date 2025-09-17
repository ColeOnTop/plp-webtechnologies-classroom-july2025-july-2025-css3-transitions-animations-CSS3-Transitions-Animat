
// Global variable
let clickCount = 0;

// Function with parameter + return value
function incrementCounter(value) {
  return value + 1;
}

// Function to toggle animation
function toggleAnimation() {
  const box = document.getElementById("animateBox");
  box.classList.toggle("animate");

  // Update global counter using function
  clickCount = incrementCounter(clickCount);

  // Display result in console
  console.log("Button clicked " + clickCount + " times");

  // Example of local scope
  function showMessage(message) {
    let localMessage = "Local: " + message;
    console.log(localMessage);
  }

  showMessage("Animation triggered!");
}

// Event Listener for Button
document.getElementById("animateBtn").addEventListener("click", toggleAnimation);