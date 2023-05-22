const myButton = document.querySelector('button');
const colors = ["red", "green", "blue", "yellow"];
const myBox = document.querySelector('.box');

myButton.addEventListener('click', changeColor);

function changeColor() {
    console.log("Hello from scrip file!");

    let randomIndex = Math.floor(Math.random()* colors.length); /*math.random algab nullist ja läheb kuni andmemassiivi viimase väärtuseni (loetakse .length käsklusega) */
    console.log(randomIndex);
    myBox.style.backgroundColor = colors[randomIndex];
}

