{const typingElement = document.querySelector('.typing');
const titles= ["Artificial Intelligence","Data Science","Tech Enthusiast"];
let wordIndex=0;
let charIndex=0;
let isDeleting = false;

function typeEffect(){
    const current=titles[wordIndex];
    if(isDeleting){
        typingElement.textContent=current.substring(0,charIndex--);
    }else{
        typingElement.textContent=current.substring(0,charIndex++);
    }
    if(!isDeleting && charIndex === current.length){
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
    }else if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % titles.length; // Move to the next title
        setTimeout(typeEffect, 300); // Pause before typing next title
}else{
    setTimeout(typeEffect, isDeleting? 30 : 70); // Speed of typing or deleting
}
}
document.addEventListener('DOMContentLoaded',typeEffect);
}{
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.onscroll = () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };
}