// nav link active
const links = document.querySelectorAll("nav ul li a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.toggle("active");
        iconBar.classList.toggle("fa-times");
        bar.classList.toggle("active");
    }
    rmvActive();
    link.classList.add("active");
  });
});
function rmvActive() {
  links.forEach((link) => link.classList.remove("active"));
}
// Bar
const bar = document.querySelector(".bar");
const iconBar = document.querySelector(".fa-bars");
const nav = document.querySelector(".content-nav");
bar.addEventListener("click",function navbar(){
  nav.classList.toggle("active");
  iconBar.classList.toggle("fa-times");
  bar.classList.toggle("active");
});
// slider me
const sliders = document.querySelectorAll(".display");
let currentIndex = 0;
const left = document.querySelector(".left");
const right = document.querySelector(".right");

window.addEventListener("DOMContentLoaded", () => {
  let int = setInterval(nextImage, 4000);
  function nextImage() {
    sliders[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % sliders.length;
    sliders[currentIndex].classList.add("active");
  }
  left.addEventListener("click", () => {
    clearInterval(int);
    sliders[currentIndex].classList.remove("active");
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = sliders.length - 1;
    }
    sliders[currentIndex].classList.add("active");
  });
  right.addEventListener("click", () => {
    clearInterval(int);
    sliders[currentIndex].classList.remove("active");
    currentIndex += 1;
    if (currentIndex === sliders.length) {
      currentIndex = 0;
    }

    sliders[currentIndex].classList.add("active");
  });
});

// FAQ
const faq_link = document.querySelectorAll(".faq_link");
const faq_p = document.querySelectorAll(".faq_p");
const faq_icon = document.querySelectorAll(".faq_link i");

faq_link.forEach((link, i) => {
  link.addEventListener("click", () => {
    for (let j = 0; j < faq_link.length; j++) {
      if (j == i) {
        continue;
      }
      if (faq_link[j].classList.contains("active")) {
        faq_link[j].classList.toggle("active");
        faq_p[j].classList.toggle("active");
        faq_icon[j].classList.toggle("fa-window-minimize");
      }
    }
    faq_icon[i].classList.toggle("fa-window-minimize");
    link.classList.toggle("active");
    faq_p[i].classList.toggle("active");
  });
});

// Animation Recent Work
// Animation 2 pictures Who iam
let works = document.querySelectorAll(".my-work");
let pic1 = document.querySelector(".pic1");
let pic2 = document.querySelector(".pic2");
window.addEventListener("scroll", () => {
  for (let index = 0; index < works.length; index++) {
    if (works[index].getBoundingClientRect().top < window.innerHeight) {
      works[index].classList.add("active");
    }
  }

  if (pic1.getBoundingClientRect().top < window.innerHeight) {
    pic1.classList.add("active");
    pic2.classList.add("active");
    pic2.classList.add("activee");
  } else {
    pic1.classList.remove("active");
    pic2.classList.remove("active");
    pic2.classList.remove("activee");
  }
});

//()
