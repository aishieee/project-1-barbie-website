// Slider 
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

  
  