const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const imageContainer = document.getElementById('imageContainer');
const container = document.querySelector('.container');

let isFirstClick = true; // Flag to track the first click

yesButton.addEventListener('click', () => {
  window.location.href = 'Carta.html'; // Reemplaza con la URL deseada
});


function moveNoButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calculate random positions within the visible screen area
  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Set the new position
  noButton.style.position = 'fixed'; // Use fixed positioning to stay within the viewport
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Show image and move button when "No" is clicked or hovered
noButton.addEventListener('click', () => {
  if (isFirstClick) {
    // Apply a transition effect on the first click
    noButton.style.transition = 'transform 0.5s ease';
    noButton.style.transform = 'scale(1.2)'; // Example: Scale up the button
    setTimeout(() => {
      noButton.style.transform = 'scale(1)'; // Reset the scale
      isFirstClick = false; // Mark the first click as done
    }, 500); // Duration of the transition
  }
  mouseoverNoButton()
  moveNoButton();
  
});
function mouseoverNoButton() {
  noButton.addEventListener('mouseover', () => {
    imageContainer.innerHTML = '<img src="img/Sukuna.jpg" alt="sukuna">';
    response.textContent = "Lo siento mi amor pero oprime el otro boton TwT";
    moveNoButton();
  });
}
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Modo Con Derechos ☀️';
  } else {
    darkModeToggle.textContent = 'Modo Humilde 🌙';
  }
});