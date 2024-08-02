const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


window.addEventListener('scroll', function() {
  var animationmenustyle = document.getElementById("animationmenustyle").style;
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    animationmenustyle.backgroundColor = "#1652F0";
    animationmenustyle.transition = "all 0.5s ease";     
    animationmenustyle.paddingTop = "18px";     
    animationmenustyle.paddingBottom = "18px";     
  } else {
    animationmenustyle.backgroundColor = "transparent";     
    animationmenustyle.transition = "all 0.5s ease";     
    animationmenustyle.paddingTop = "32px";     
    animationmenustyle.paddingBottom = "32px";     
  }
});


const menu = document.getElementById('menu').style;
const bntshow = document.getElementById('bntshow').style;
const btnhide = document.getElementById('btnhide').style;
const showMenu = ()=>{
  menu.left = "0%";
  menu.transition = "all 0.5s ease";
  bntshow.display = "none";
  btnhide.display = "block";
}

const hiddenMenu = ()=>{
  menu.left = "-100%";
  menu.transition = "all 0.5s ease";
  bntshow.display = "block";
  btnhide.display = "none";
  menu.transition = "all 1s ease";
}