const arrowLeft = document.getElementById("arrow-left");
arrowLeft.addEventListener("click", function() {
console.log("ca marche a gauche !"); 
});

const arrowRight = document.getElementById("arrow-right");
arrowRight.addEventListener("click", () => {
console.log("ca marche a droite!"); 
});

const slides = [ "slide1", "slide2", "slide3", "slide4", 
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
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;
    document.getElementById("slides").src = slides[numero];
	alert(tu as cliqué!);
}



/*const imageBanner = document.getElementById("banner-img") 
imageBanner.addEventListener("click", function() {
console.log("c'est super !"); 
});

const textBanner = document.getElementById("#banner>p")
textBanner.addEventListener("click", function() {
	console.log("et ça ?");  
});
/*function changeSlide (slides)
for (let i=0; i < slides.length; i++) {
    const elementSlide = document.getElementById("#banner");
    const ImageSlide = document.getElementById("banner-img");
    ImageSlide = slides[i].image;
    elementSlide.appenchild(ImageElement);
    document.body.appenchild(elementSlide);
}*/


 /*let changeText = document.getElementById("#banner>p") 
 changeText.innerHTML("click", function() =>{

 })*/

