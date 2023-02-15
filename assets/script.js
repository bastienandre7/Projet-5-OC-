const leftarrowEl = document.getElementById("fleche_gauche");
const rightarrowEl = document.getElementById("fleche_droite");
const img = document.getElementById('banner-image');
const txt = document.getElementById("span");
let points = document.getElementsByClassName('dots');



const image = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.png']

const tagline = [
	"Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>",
]

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

let index = 0;


function Changement_points() {
	for(let i=0; i < image.length; i++){
		points[i].classList.remove('dot_selected');
	}
	points[index].classList.add('dot_selected');
}

function Changement_src() {
	img.src= './assets/images/slideshow/' + (image[index]);
}

function Changement_innerHTML() {
	txt.innerHTML = tagline[index];
}



leftarrowEl.addEventListener("click", function(){
	if (index <= 0 )
		index = image.length;
	index--;
	Changement_src()
	Changement_innerHTML()
	Changement_points();
} );

rightarrowEl.addEventListener("click", function(){
	if (index >= image.length-1)
		index = -1;
	index++;
	Changement_src()
	Changement_innerHTML()
	Changement_points();
})
