let sectionNav = document.querySelectorAll("section");
let NavTag = document.getElementById("navbar_header");
let sectionNavLength = sectionNav.length;
let sectionNavPositions = [];
let prePosition = 0;
let currentPosition = 0;

function scrollToSection(sectionID) {
	window.scrollTo(0, sectionID);
}
