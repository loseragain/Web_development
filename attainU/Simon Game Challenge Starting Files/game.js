buttonColors=["red","blue","green","yellow"]
gamePattern = []
userClickedPattern = []
var level = 0
var started = false
if(!started){
    $("#level-title").textContent = "Level " + level
    started = true
}
function nextSequence() {
    level = level + 1
    document.querySelector("#level-title").textContent = "Level " + level
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    
}
function handler(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
}
function playSound(name) {
    path = "sounds/"+name+".mp3"
    var audio=new Audio(path)
    audio.play()
}
function animatePress(currentColor) {
    $("."+currentColor).addClass("pressed");
    // var self = $(this);
    // self.addClass("bg1");

    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    }, 100);
}
if(level == 0){
    $(document).on("keypress",function(){
        document.querySelector("#level-title").textContent = "Level "+ level        
    })
}
$(document).on("keypress",nextSequence)
$(".btn").click(handler)
