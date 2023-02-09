let id0= document.querySelectorAll(".box")
let pawn = document.querySelector(".fa-chess-pawn");

// pawn.addEventListener("click", oppawn);

// function oppawn(event){
//         console.log(event.target.classList)
// }

checkmoves();

function checkmoves(){
    document.querySelectorAll(".box").forEach( item => {
        if(item.target.classList == ".fa-pawn"){
            console.log("hi")
        }
    })
}