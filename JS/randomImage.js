const myButton = document.querySelector('button');
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const image = document.querySelector('img');


myButton.addEventListener('click', changeImage);

function changeImage (){

    let randomIndex = Math.floor(Math.random()* images.length);
    image.src = "Img/" + images[randomIndex];
}

