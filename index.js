document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".home").classList.add("active");
    }, 500); 
});
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          navLinks.forEach(function(link) {
              link.classList.remove('active');
          });
          this.classList.add('active');
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector('.typing-cursor');
    const text = "Hi, I'm Rohaan Arshad"; 
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

document.getElementById('cvLink').addEventListener('click', function(event) {
  event.preventDefault(); 

  window.open(this.href, '_blank'); 
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

document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.projects');
  const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
          aboutSection.classList.add('loaded');
          observer.disconnect();
      }
  });
  observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.skills');
  const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
          aboutSection.classList.add('loaded');
          observer.disconnect();
      }
  });
  observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.contact-center');
  const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
          aboutSection.classList.add('loaded');
          observer.disconnect();
      }
  });
  observer.observe(aboutSection);
});



document.getElementById('contactForm').addEventListener('submit', function(event) {

  var name = document.getElementById("formGroupExampleInput").value;
  var email = document.getElementById("formGroupExampleInput2").value;
  var msg = document.getElementById("exampleFormControlTextarea1").value;

  var errorElement = document.getElementById('error');
      errorElement.textContent = 'Sent !!';

      setTimeout(function() {
          errorElement.textContent = '';
      }, 1500);
      event.preventDefault();
});
