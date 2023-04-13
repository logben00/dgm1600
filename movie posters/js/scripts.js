import { films } from '../films.js'
console.log(films)

const pathStart = "https://starwars-visualguide.com/assets/img/films/"
const myTarget = document.querySelector(".list");
for (let x = 0; x < films.length; x++) {
   let barDiv= document.createElement('div')
   barDiv.innerHTML = `<p>${films[x].title}</p>`
   console.log(pathStart)
  
   let myImage = document.createElement("img")
   myImage.setAttribute("src", `${pathStart+films[x].episode_id}.jpg`) // CAN'T FIGURE OUT WHAT WORD TO USE
   myImage.setAttribute("alt", films[x].title)
   
  
   let myCaption = document.createElement('figcaption');
   myCaption.innerHTML = ` DIRECTOR: ${films[x].director} <br>PRODUCER: ${films[x].producer} <br> RELEASED: ${films[x].release_date}`
  console.log(myCaption)
   let mySection = document.createElement('section')
  
  
   mySection.appendChild(barDiv)
   mySection.appendChild(myImage)
   mySection.appendChild(myCaption)
  
   myTarget.appendChild(mySection);
   }

   const btnList = document.querySelector("#list")
   const btnGrid = document.querySelector("#grid")
   const pageBody = document.querySelector("body")
   

   btnGrid.addEventListener('click' , () => pageBody.className= "list")
   btnList.addEventListener('click' , () => pageBody.className= "grid")




  

   
