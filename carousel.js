const sliders = document.querySelector(".carousel-container");


let scrollPerClick = 320;

let scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}


const URL =
  "https://api.betaseries.com/movies/discover?type=popular&key=9e0dfcd54d08&limit=8";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    getImg(data);
  })
  .catch((error) => console.log(error));

//récupérer les id des films le plus populaires
function getImg(films) {
  let arrayImage = [];
  for (let film of films.movies) {
    fetch(
       `https://api.betaseries.com/movies/movie?id=${film.id}&key=9e0dfcd54d08`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        arrayImage.push(data.movie.backdrop);
        setImage(arrayImage);
      })
      .catch((error) => console.log(error));
  }
  console.log(arrayImage);
}
//faire un fetch pour récupérer les backdrops et un poster pour le background
let carouselImg = document.querySelectorAll(".carousel-img");
console.log(carouselImg);

function setImage(arrayImage) {
  console.log(arrayImage);
  let index = 0;
  for (image of carouselImg) {
    image.setAttribute("src", arrayImage[index]);
    index++;
  }
}



