window.onload = function () {
  let boundaries = document.querySelectorAll(".boundary");
  let start = document.getElementById("start");
  let end = document.getElementById("end");
  let status = document.getElementById("status");
  let gameStarted = false;
  let gameLost = false;

  // Start the game only when "S" is clicked
  start.addEventListener("click", function () {
    gameStarted = true; // Set the game to started
    boundaries.forEach((boundary) => boundary.classList.remove("youlose")); // Reset boundaries
    gameLost = false; // Reset gameLost flag
    status.textContent =
      "Game started! Move to 'E' without touching the walls.";
  });

  // Check boundaries only if the game has started
  boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
      if (gameStarted && !gameLost) {
        // Only apply this logic if the game has started
        boundaries.forEach((b) => b.classList.add("youlose")); // Turn all boundaries red
        gameLost = true;
        status.textContent = "You lost! Click 'S' to restart.";
        // Show lose alert
        setTimeout(() => {
          alert("You lose!");
          location.reload(); // Refresh the page after losing
        }, 300); // Delay to give the user a moment to see the loss
      }
    });
  });

  // Show a win message if the user reaches the end without losing
  end.addEventListener("mouseover", function () {
    if (gameStarted && !gameLost) {
      alert("You win!");
      gameStarted = false; // Reset the game state
    }
  });
};
