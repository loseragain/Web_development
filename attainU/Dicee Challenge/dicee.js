var pl1 = Math.floor(Math.random() * 6 + 1)
var pl2 = Math.floor(Math.random() * 6 + 1)
var pl1imgpath = "images/dice"+pl1+".png"
var pl2imgpath = "images/dice"+pl2+".png"
document.querySelector(".dice .img1").setAttribute("src",pl1imgpath);
document.querySelector(".dice .img2").setAttribute("src",pl2imgpath);
if(pl1>pl2){
    document.querySelector(".container h1").textContent= "Player 1 Wins!"
}
else if(pl1==pl2){
    document.querySelector(".container h1").textContent = "It's a draw!"
}
else {
    document.querySelector(".container h1").textContent = "Player 2 Wins!"
}