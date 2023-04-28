import {fruits} from "../data/fruits.js"
//console.log(fruits)

//grab the html references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')


//nav items 
fruits.forEach(fruits => {
    //console.log(fruits)
    const myButton = document.createElement('button')
    myButton.textContent = fruits.title
    myButton.addEventListener('click', () => showFruits(fruits))
    myNav.appendChild(myButton)
})

function showFruits(fruits) {
    console.log(fruits)

    let fruitsSection = document.createElement ("section")
    let fruitsName= document.createElement ("h2")
    let fruitsPhoto= document.createElement ("img")
    let fruitsPrice = document.createElement ("p")
    let fruitsDescription = document.createElement ('p')
    let fruitsGrownName = document.createElement ('p')

    let fruitsColorsName = document.createElement('p')
    let fruitsColors = document.createElement ("url")
    

    fruitsName.textContent = fruits.title
    fruitsPhoto.src = `images/${fruits.photo}`
    fruitsPhoto.alt = fruits.first
    fruitsPrice.textContent = `Price: ${fruits.price}`
    fruitsDescription.textContent = `Description: ${fruits.description}`
    fruitsGrownName.textContent = `Grown: ${fruits.grown}`

   /* fruits.colors.forEach(grown => {
        console.log(grown)
        let theGrown = document.createElement('li')
        theGrown.textContent = grown
        flowerGrown.appendChild(theGrown)
    })*/

    fruitsSection.appendChild(fruitsName)
    fruitsSection.appendChild(fruitsPhoto)
    fruitsSection.appendChild(fruitsPrice)
    fruitsSection.appendChild(fruitsDescription)
    fruitsSection.appendChild(fruitsGrownName)
   // fruitsSection.appendChild(fruitsGrown)
    myViewer.textContent = ""
    myViewer.appendChild(fruitsSection)

} //end