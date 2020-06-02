/**
 * Name: Manpreet Singh
 */
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 */

/**
 * Define Global Variables
 *
 */

let sectionList = document.querySelectorAll('section');
let navListTag = document.getElementById('navbar_list');
let sectionLength = sectionList.length;
let sectionPositions = [];
let oldPosition = 0;
let currentPosition = 0;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function scrollToSection(sectionID) {
  window.scrollTo(0, sectionID);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav bar
sectionList.forEach((element, index) => {
  let sectionName = element.getAttribute('data-nav');
  let toOffSection = element.offsetTop + 30;
  let liTag = document.createElement('li');
  liTag.setAttribute('class', 'menu_link' + index);
  liTag.innerHTML = `<a onClick="scrollToSection(${toOffSection})">${sectionName}</a>`;
  navListTag.appendChild(liTag);
});

document.addEventListener('scroll', () => {
  currentPosition = this.scrollY;
  // Section Positions
  sectionPositions = [];
  sectionList.forEach(element =>
    sectionPositions.push(element.getBoundingClientRect().top + 50)
  );

  // Adding and removing active sections
  let addIndex = sectionPositions.findIndex(element => element > 0);
  for (let i = 0; i < sectionLength; i++) {
    if (addIndex === i) {
      document.querySelector('.menu_link' + addIndex).classList.add('active');
      document
        .querySelector(`#section${addIndex + 1}`)
        .classList.add('your-active-class');
    } else {
      document.querySelector('.menu_link' + i).classList.remove('active');
      document.querySelector(`#section${i + 1}`).removeAttribute('class');
    }
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */
