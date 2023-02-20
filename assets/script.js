const leftArrowEl = document.getElementById("fleche_gauche");
const rightArrowEl = document.getElementById("fleche_droite");
const img = document.getElementById('banner-image');
const txt = document.getElementById("span");
const dotsContainerEl = document.querySelector(".dots");



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

for (let i=0; i < slides.length; i++){
	const dotEl = document.createElement('span');
	dotEl.classList.add('dot');
	if( i === index ) {
		dotEl.classList.add('dot_selected');
	}
	dotsContainerEl.appendChild(dotEl);
}

const dotsEl = document.querySelectorAll('.dot');

function Changement_Classdot() {
	dotsEl.forEach(item =>{
		item.classList.remove('dot_selected');
	})
	dotsEl[index].classList.add('dot_selected');
}

// function Changement_points() {
// 	for(let i=0; i < image.length; i++){
// 		points[i].classList.remove('dot_selected');
// 	}
// 	points[index].classList.add('dot_selected');
// }

function Changement_src() {
	img.src= './assets/images/slideshow/' + (slides[index].image);
}

function Changement_innerHTML() {
	txt.innerHTML = slides[index].tagLine;
}



leftArrowEl.addEventListener("click", function(){
	if (index <= 0 )
		index = slides.length;
	index--;
	Changement_src()
	Changement_innerHTML()
	Changement_Classdot();
} );

rightArrowEl.addEventListener("click", function(){
	if (index >= slides.length-1)
		index = -1;
	index++;
	Changement_src()
	Changement_innerHTML()
	Changement_Classdot();
})
