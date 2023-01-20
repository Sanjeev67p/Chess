let id0= document.querySelectorAll(".box")
let pawn = document.querySelector(".fa-chess-pawn");

pawn.addEventListener("click", oppawn);

function oppawn(){
    if(id0.id == "9"){
        const element = document.getElementById("9")
        element.remove();
    }

}