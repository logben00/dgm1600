let incrementBtn = document.querySelector('#increment-btn')
let saveBtn = document.querySelector('#save-btn')

let count = 0
let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")

incrementBtn.onclick = function increment() {
    count = count + 1
    countEl.innerText = count
}


saveBtn.onclick = function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")
