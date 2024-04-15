/*=============== SHOW MENU ===============*/
// show menu //
const navMenu = document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

// menu show //
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// menu hidden //

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const LinkAction = ()=> {
    const navMenu =document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click',LinkAction))


/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const  scrollUp =() =>{
    const scrollUp =document.getElementById('scroll-up');
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')
 const scrollActive =() => {
    const scrollDown =window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollDown > sectionTop && scrollDown<= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }
              else{
                sectionsClass.classList.remove('active-link')
              }

    })    
 }
 window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

