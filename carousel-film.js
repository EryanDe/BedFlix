// carouselWidth est la largeur totale du carrousel
const carouselWidth = document.querySelector('.carousel-slide').scrollWidth;//scrollWidth représente la largeur du contenu déroulant, y compris les parties hors écran

// Appliquer la largeur totale du carrousel à la div carousel-container css
document.querySelector('.carousel-slide').style.width = carouselWidth + 'px';

// Clone les premières images et les ajoute à la fin du carrousel
const carouselImages = document.querySelector('.carousel-slide');
const clonedImages = carouselImages.innerHTML;//prend le contenu de carousel-container 
carouselImages.innerHTML += clonedImages;//et le colle a la fin de carousel-container qui vient de défiler.Cela a pour effet d'insérer une répétition du contenu des images à la fin du contenu existant.


localStorage.setItem('nom', 'Nicolas'); // initialise un nouvel item
let identifiant = localStorage.getItem('nom'); // récupere une valeur via la clé
localStorage.removeItem('nom'); // supprimer mon item
localStorage.clear(); // permet de tout supprimer
localStorage.key(1); // aller chercher la clé a l'index indiqué
localStorage.length; // retourne le nombre d'item stockés
localStorage.setItem("Id", "54gjh4534ghj");
sessionStorage.setItem("nom", "Toto");