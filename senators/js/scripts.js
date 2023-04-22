import {allSenators} from '../data/senators.js'
console.log(allSenators);

//grab references to the HTML stuff
const myNavigation = document.querySelector('nav');
const cardParent = document.querySelector('#allCards');

//create an all senators button 
const btnAll = document.createElement('button');
btnAll.textContent = 'All'
btnAll.addEventListener('click', () => {
   displayPeople(allSenators)
})
//Event Listener and filter for the Democrats
const btnDemocrats = document.createElement('button');
btnDemocrats.textContent = 'Democrats'
btnDemocrats.addEventListener('click', () => {
   const democratSenators =allSenators.filter(x => x.party === 'D')
   displayPeople(democratSenators)
})//end of button

//Event Listener and filter for the Republicans
const btnRepublicans = document.createElement('button');
btnRepublicans.textContent = 'Republicans'
btnRepublicans.addEventListener('click', () => {
   const republicansSenators =allSenators.filter(x => x.party === 'R')
   displayPeople(republicansSenators)
})// end of republican button

//Event Listener and filter for the women
const btnFemale = document.createElement('button');
btnFemale.textContent = 'Women'
btnFemale.addEventListener('click', () => {
   const femaleSenators =allSenators.filter(x => x.gender === 'F')
   displayPeople(femaleSenators)
});// end of female

//Event Listener and filter for the men
const btnMale = document.createElement('button');
btnMale.textContent = 'Man'
btnMale.addEventListener('click', () => {
   const maleSenators =allSenators.filter(x => x.gender === 'M')
   displayPeople(maleSenators)
});


//add buttons to page 
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnDemocrats)
myNavigation.appendChild(btnRepublicans)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)

//loop through all the people 
function displayPeople (x) {
    cardParent.textContent = ""


    x.forEach(senator => {
        const myFigure = document.createElement('figure')

        let barDiv = document.createElement('div')
        barDiv.innerHTML = `<p>${senator.first_name}<br>${senator.last_name}</p>`
        console.log(barDiv)

        const myCaption = document.createElement('figcaption')
        myCaption.innerHTML = `${senator.state}<br>${senator.date_of_birth}<br>${senator.state_rank}<br>Party: ${senator.party}`
        //(senator.first_name) + (senator.last_name)//need to have space between first and last 


        const myImage = document.createElement('img')
        myImage.src=`https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`

    //asign gender class
    console.log(senator.gender)
    switch (senator.gender) {
        case "F":
            myFigure.className = "Female"
        break;
        case "M":
            myFigure.className = "Male"
        break;
    }
        switch (senator.party) {
            case "D":
                myFigure.className = "Democrat"
            break;
            case "R":
                myFigure.className = "Republican"
            break;
            default:
                myFigure.className = "other"
        }


        // assemble the parts
        myFigure.appendChild(barDiv)
        myFigure.appendChild(myImage)
        myFigure.appendChild(myCaption)

        // attach to the html page
        cardParent.appendChild(myFigure)
        
        

    }// end of fat arrow
    )//end of loop
} //end of function

//call the function
displayPeople(allSenators);