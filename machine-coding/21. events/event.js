const box = document.querySelector("#box");

// mouse events

box.addEventListener("mouseover", () => {
    console.log("mouseover : hover occured")
})

box.addEventListener("mouseleave", () => {
    console.log("mouseleave occured")
})

// click is mousedown + mouseup
box.addEventListener("click", () => {
    console.log("click occured") 
})

box.addEventListener("mousedown", () => {
    console.log("mousedown occured")
})

box.addEventListener("mouseup", () => {
    console.log("mouseup occured")
})

box.addEventListener("dblclick", () => {
    console.log("dblclick occured")
})


const input = document.querySelector("input");

input.addEventListener("keydown", (ev) => {
    console.log("keydown called", ev.keyCode)
})

input.addEventListener("keyup", (e) => {
    console.log("keyup called", e.key)
})

input.addEventListener("keypress", cb)

function cb(event) {
    console.log("keypress called")
    console.log("key pressed: ", event.key)
}
