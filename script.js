const btn = document.querySelector(".btn");
const colorList = ["red", "blue", "white", "yellow", "purple", "green"];


function getRandomColor(){
    let randomNumber = Math.floor(Math.random() * colorList.length);
    let randomColor = colorList[randomNumber];
    return randomColor;
}


btn.addEventListener("click", function(){
    randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor
});