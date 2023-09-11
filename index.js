document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".home").classList.add("active");
    }, 500); 
});

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector('.typing-cursor');
    const text = "Hi I'm Rohaan Arshad"; 
    let index = 0;
  
    function type() {
      if (index < text.length) {
        document.querySelector('.home-content h1').textContent += text[index];
        index++;
        setTimeout(type, 100); 
      }
    }
  
    type();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".home").classList.add("new_image");
    }, 2000); 
});

/* add in every   psss about exceptof setion anem*/
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.about');
  const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
          aboutSection.classList.add('loaded');
          observer.disconnect();
      }
  });
  observer.observe(aboutSection);
});

  