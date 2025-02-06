/* jshint esversion: 6 */

/// Slider 
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
    showSlide(n - 1);
}

// Auto-slider functionality 
let slideInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Timeline 
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");
  
    faqs.forEach(faq => {
      faq.querySelector(".faq-question").addEventListener("click", () => {
        const answer = faq.querySelector(".faq-answer");
        const icon = faq.querySelector(".icon");
  
        // Toggle the visibility of the answer
        if (faq.classList.contains("open")) {
          answer.style.display = "none";
          faq.classList.remove("open");
          icon.textContent = "+";
        } else {
          answer.style.display = "block";
          faq.classList.add("open");
          icon.textContent = "-";
        }
      });
    });
  });

// Video 
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const video = document.getElementById("video");
    const thumbnail = document.getElementById("thumbnail");
  
    playButton.addEventListener("click", () => {
      playButton.style.display = "none"; // Hide the play button
      thumbnail.style.display = "none"; // Hide the image
      video.style.display = "block"; // Show the video
      video.play(); // Play the video
    });
  
    // Show play button and thumbnail if video is paused 
    video.addEventListener("pause", () => {
      playButton.style.display = "block";
      thumbnail.style.display = "block";
      video.style.display = "none";
    });
  });
  