//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    // const hamburger = document.querySelector(".hamburger-line")

  
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    //   hamburger.style.backgroundColor= 'black';
    } else {
    // hamburger.style.backgroundColor= 'white';
      header.classList.remove("navbar-fixed");
    }
  };
  
  //hamburger
  
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });