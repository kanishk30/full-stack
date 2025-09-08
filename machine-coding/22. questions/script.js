//  BAD WAY...
// const allStars = document.querySelectorAll(".star");

// for(let i = 0 ; i < allStars.length; i++){
//     allStars[i].addEventListener("click", () => {
//         console.log("clicked");
        
//     })
// }

// GOOD WAY:

const starContainer = document.querySelector("#star_container");
const stars = document.querySelectorAll(".star");
let indexSelected = 0;

starContainer.addEventListener("click", ((ev) => {
    console.log(ev.target)
    indexSelected = ev.target.getAttribute("data-idx")
   
    fillStars(indexSelected)
}))

const countContainer = document.querySelector("#count");
function fillStars(starsCountToFill){
    countContainer.textContent = starsCountToFill;
   
    changeStars(starsCountToFill)
}

starContainer.addEventListener("mouseover", (e) => {
    let elem = e.target;
    if(elem.hasAttribute("data-idx")) {

        let index = elem.getAttribute("data-idx");
        changeStars(index)
    }
})

starContainer.addEventListener("mouseleave", () => {
        changeStars(indexSelected)
} )

function changeStars(idx) {
    
     // reset all stars color.
    for (let i = 0 ; i < stars.length; i++){
        stars[i].classList.remove("star-fill");
        console.log("removed")
    }

    // add yellow color.
    for (let i = 0 ; i < idx; i++){
        stars[i].classList.add("star-fill")
        console.log("added")

    }
}