let sectionNav = document.querySelectorAll("section");
let NavTag = document.getElementById("navbar_header");
let sectionNavLength = sectionNav.length;
let sectionNavPositions = [];
let prePosition = 0;
let currentPosition = 0;

function scrollToSection(sectionID) {
	window.scrollTo(0, sectionID);
}

// build the nav bar
sectionNav.forEach((element, index) => {
	let sectionName = element.getAttribute("data-nav");
	let toOffSection = element.offsetTop + 30;
	let liTag = document.createElement("li");
	liTag.setAttribute("class", "menu_link" + index);
	liTag.innerHTML = `<a onClick="scrollToSection(${toOffSection})">${sectionName}</a>`;
	NavTag.appendChild(liTag);
});
