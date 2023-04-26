//references to the HTML
const parentTag = document.querySelector('#weatherCard')


// writing a deafult zipcode
let zip = localStorage.getItem('myZipCode')
if (zip == null) {
    let deafultZip = "84106"
    localStorage.setItem('myZipCode',deafultZip )
    zip = deafultZip
} // end if

console.log(zip)

//setting the path to the AIP on weather
const myKey = "4668939f46dc393030bfc95c98029ef2"
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`
//fetch the remote json data for the current weather
fetch(myPath)
.then((response) => response.json())
.then((allData) => {
    //console.log(allData)
    currentWeather (allData)
})


//function that displays the current weather
function currentWeather(weatherResults){
    console.log(weatherResults)
    console.log(weatherResults.weather[0].icon)

    //add the correct town name 
    const myTown = document.querySelector('#town')
    myTown.textContent = `Weather for ${weatherResults.name}`

 //current date
 const myDate = document.createElement('p')
 myDate.className = "date"
 const d = new Date()
 myDate.textContent = d.toDateString()
 parentTag.appendChild(myDate)

 
 //current icon
 const myWeatherIcon = document.createElement('img')
 myWeatherIcon.src =`https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
 myWeatherIcon.alt = weatherResults.weather[0].description
 parentTag.appendChild(myWeatherIcon)

    // current temp
  const myCurrentTemp = document.createElement('p')
  myCurrentTemp.className = 'temp'
  myCurrentTemp.innerHTML = weatherResults.main.temp + "&deg;F"
  parentTag.appendChild(myCurrentTemp)
 
  // feels like temp
  const myFeelTemp = document.createElement('p')
  myFeelTemp.className = 'feel'
  myFeelTemp.innerHTML = `Feels like ${weatherResults.main.feels_like + "&deg;F"}`
  parentTag.appendChild(myFeelTemp)

  // wind.speed
  const myWind = document.createElement('p')
  myWind.className = 'wind'
  myWind.innerHTML = `Wind Speed: ${weatherResults.wind.speed}`
  parentTag.appendChild(myWind)

}// end of the current weathr


//ask for a new zipcode
const theModalBox = document.querySelector('aside')
const theSettings = document.querySelector('#settings')
theSettings.addEventListener('click', () => {
    theModalBox.classList.toggle('show') 
})

// set the new zip 
const myButton = document.querySelector('#applyZip')
myButton.addEventListener('click', () => {
    console.log("you clicked me")
    theModalBox.className = ""
    let newZipCode = document.querySelector('#newZip').value
    if (newZipCode.length == 5) {
        localStorage.setItem('myZipCode',newZipCode )
    }
    window.location.reload()
})
//data validation for the zipcode

myInput = document.querySelector('#newZip')
myInput.addEventListener('input', () => {
   myInput.value = myInput.value.slice(0, 5)
})