const imageBanner = document.getElementById("banner-img");
const textBanner = document.getElementById("banner-text");
const dots = document.querySelector(".dots");


const arrowLeft = document.getElementById("arrow-left");
arrowLeft.addEventListener("click", () => {
	console.log("ca marche a gauche !"); 
	indexSlide = (indexSlide - 1 + slides.length) % slides.length;
	upDateBanner(indexSlide) ;
});

const arrowRight = document.getElementById("arrow-right");
arrowRight.addEventListener("click", () => {
	indexSlide = (indexSlide + 1) % slides.length;
	upDateBanner(indexSlide) ;
	}
);
 
function upDateBanner(indexSlide) {
	const prevSlide = slides[indexSlide];
	imageBanner.setAttribute("src","./assets/images/slideshow/" + prevSlide.image);
	textBanner.innerHTML= prevSlide.tagLine;
	updateDots()
}

function removeDots () {
	dots.innerHTML = ""
};

function drawDots () {
	for (let i = 0; i < slides.length; i++) {
		const dotBtn = document.createElement('div')
		dotBtn.classList.add('dot')

		if (i == indexSlide) {
			dotBtn.classList.add('dot_selected')
		}
		dots.appendChild(dotBtn)
	}
};
	
	/*const dotElements= dots.querySelectorAll('div')
	
	dotElements.forEach((el, i) => {
		el.classList.remove('dot_selected')
		if (i== indexSlide)
			el.classList.add('dot-selected')
	})*/
	//for (let i=0; i < slides.length; i++)
//};

function updateDots() {
	removeDots()
	drawDots()
}; 

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


