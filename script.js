var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");  
    },500);
}


var checkDead = setInterval(function() {
    var characterTop =
    parseInt(Window.getComputedStyle(character)
    .getPropertyValue("top"));
    var blockLeft =
    parseInt(Window.getComputedStyle(block)
    .getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none"
        alert("u lose")
    }
}, 10);
