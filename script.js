let decrement = document.getElementById("decrement")
let increment = document.getElementById("increment")
let count = document.getElementById("count")
let counter =0

decrement.addEventListener("click",()=> {
counter --
count.innerText = counter
if(count.innerText<0){
    count.classList.remove("green")
    count.classList.add("red")
    count.classList.add("font-size")
}
})

count.addEventListener("click",()=> {
    counter = 0
    count.innerText = 0
})
increment.addEventListener("click",()=> {
    counter ++
    count.innerText = counter
    if(count.innerText>0){
        count.classList.remove("red")
        count.classList.add("green")
        count.classList.add("font-size")
    }
    })
    