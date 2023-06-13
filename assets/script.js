const bannerSlide = document.getElementById("#banner");
const imageBanner = document.getElementById("banner-img");
const textBanner = document.getElementById("banner-text");
const dots = document.querySelector("dots");
const dotBannerActive= document.querySelectorAll('dot-selected')

const arrowLeft = document.getElementById("arrow-left");
arrowLeft.addEventListener("click", () => {
	console.log("ca marche a gauche !"); 
	indexSlide = (indexSlide - 1 + slides.length) % slides.length;
	const prevSlide = slides[indexSlide];
	imageBanner.setAttribute("src","./assets/images/slideshow/" + prevSlide.image);
	textBanner.innerHTML= prevSlide.tagLine;
	
});

const arrowRight = document.getElementById("arrow-right");
arrowRight.addEventListener("click", () => {
	console.log("ca marche a droite!"); 
	indexSlide = (indexSlide + 1) % slides.length; 
	const nextSlide = slides[indexSlide];
	imageBanner.setAttribute("src","./assets/images/slideshow/" + nextSlide.image)
	textBanner.innerHTML= nextSlide.tagLine;
	
	}
);

function removeDots () {
	dots.classList.remove('dot')
};

function drawDots () {
	for (let indexSlide = 0; indexSlide < 100; indexSlide++)
	dots.classList.add('dot_selected')
};

 onclick = function(upDateDots) {
	removeDots();
	drawDots();

 }

let indexSlide = 0;

const slides = [ 
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


