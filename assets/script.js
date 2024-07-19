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

let indexcourant = 0;

/* Navigation carroussel flèche de gauche et boucle à l'infini*/
document.querySelector("#nav-left").addEventListener("click", () => {
	/*console.log("J'ai cliqué sur la flèche gauche")*/
	indexcourant = indexcourant-1;
	if (indexcourant < 0 ) {    
		indexcourant = slides.length - 1;
	}	
	console.log(indexcourant);
	creationCarroussel();
}
)

/* Navigation carousel flèche de droite et boucle à l'infini */

document.querySelector("#nav-right").addEventListener("click", () => {
	/*console.log("J'ai cliqué sur la flèche droite")*/
		indexcourant = indexcourant+1;
	if(indexcourant == slides.length){
		indexcourant = 0;
	}
	console.log(indexcourant);
	creationCarroussel();
}
)

/* Création bullet point en fonction du nombre de slide dans le carroussel */
let dotsContainer = document.querySelector("#banner .dots");
for(let i = 0; i < slides.length ; i++) {
		let bulletpoint = document.createElement("div");
	bulletpoint.classList.add("dot");
	if(i==0){
		bulletpoint.classList.add("dot_selected");
	}
	dotsContainer.appendChild(bulletpoint);
}

/* Carroussel */

function creationCarroussel(){
	const element = slides[indexcourant];

	const img = document.querySelector(".banner-img");
	img.src = "./assets/images/slideshow/"+ element.image ;

	const p = document.querySelector(".banner-text");
	p.innerHTML = element.tagLine;

	const dots = document.querySelectorAll(".dot");
	for(let i = 0; i < slides.length ; i++) {
		dots[i].classList.remove("dot_selected");
		if (i == indexcourant) {
			dots[i].classList.add("dot_selected");
		}
	}
}


