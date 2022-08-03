// ======== SHOW SIDEBAR ========
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// -------- SIDEBAR SHOW --------
// Validate if Constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-sidebar')
  })
}

// -------- SIDEBAR HIDDEN --------
// Validate if Constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-sidebar')
  })
}


// ======== MIXITUP FILTER - PROJECTS ========
let mixerProjects = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

// Link Active Work
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(item => item.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(item => item.addEventListener("click", activeWork))


// Project Popup
document.addEventListener("click", (event) => {
  // If user clicks the text
  if (event.target.classList.contains("work__button")) {
    toggleProjectPopup();
    projectItemDetails(event.target.parentElement);
  }
  // If user clicks the icon
  else if (event.target.classList.contains("work__button__icon")) {
    toggleProjectPopup();
    projectItemDetails(event.target.parentElement.parentElement);
  }
})

function toggleProjectPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(projectItem) {
  document.querySelector(".pp_thumbnail img").src = projectItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = projectItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = projectItem.querySelector(".portfolio__item-details").innerHTML;
}


// ======== SCROLL SECTIONS ACTIVE LINK ========
// Get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighligher);

function navHighligher() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through the sections to get their height, top value and ID for each
  sections.forEach(current => {
    
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    // If our current scroll position is within the space where the current section is,
    // add .active class to the corresponding navigation link, otherwise remove it

    // To know which link needs an active class, we use the sectionId variable above
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']')
      .classList.add("active-link")
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']')
      .classList.remove("active-link")
    }

  })
}
