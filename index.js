// Contact form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Message Sent Successfully!");
      // You can send the form data to the server here
    } else {
      alert("Please fill out all fields.");
    }
  });

// Simple Image Slider for the home page
let currentIndex = 0;
const images = document.querySelectorAll(".slider img");

function showNextImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Initially display the first image
images[currentIndex].style.display = "block";
