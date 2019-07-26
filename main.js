// Selecting the HTML elements we want to manipulate with JavaScript
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Toggle to aturn auto slide on and off
const auto = false;
// Settings for auto slide
const intervalTime = 5000;
let slideInterval;

// The nextSlide function is hooked up to the right button later
const nextSlide = () => {
	// The first slide element has the class current. We move this class to the next slide element to change the current slide
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	//Check for next slide (sibling)
	if (current.nextElementSibling) {
		// Add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// Add current to start
		slides[0].classList.add('current');
	}

	// Forgot what this is for? 
	setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	//Check for prev slide (sibling)
	if (current.previousElementSibling) {
		// Add current to prev sibling
		current.previousElementSibling.classList.add('current');
	} else {
		// Add current to last
		slides[slides.length - 1].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'));
}

// Button events

next.addEventListener('click', e => {
	nextSlide();
})

prev.addEventListener('click', e => {
	prevSlide();
})

if (auto) {
	// Run next slide at interval time
	slideInterval = setInterval(nextSlide, intervalTime);
}

