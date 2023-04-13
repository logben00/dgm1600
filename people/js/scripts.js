import { people } from "../people.js";

const filterButtons = document.querySelector(".filterButtons");
const characterDiv = document.querySelector(".characterDiv");
const displayText = document.querySelector(".displayText");

const allCharsButton = createFilterButton("All Characters", "all");
const maleCharsButton = createFilterButton("Male Characters", "male");
const femaleCharsButton = createFilterButton("Female Characters", "female");
const otherCharsButton = createFilterButton("Other Characters", "other");

filterButtons.appendChild(allCharsButton);
filterButtons.appendChild(maleCharsButton);
filterButtons.appendChild(femaleCharsButton);
filterButtons.appendChild(otherCharsButton);

function createFilterButton(text, filterValue) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", function () {
    if (filterValue != "all"){
      const filteredChars = filterCharacters(filterValue);
      populateDOM(filteredChars);
    }else{
      populateDOM(people);
    }
  });
  return button;
}

function filterCharacters(filterValue) {
  if (filterValue === "other") {
    return people.filter((person) => person.gender !== "male" && person.gender !== "female");
  } else {
    return people.filter((person) => person.gender === filterValue);
  }
}

function populateDOM(characters) {
  characterDiv.innerHTML = "";
  if (characters.length === 0) {
    displayText.textContent = "No matching characters found.";
  } else {
    characters.forEach((person) => {
      const personFig = document.createElement("figure");
      const personImg = document.createElement("img");
      const charNum = extractCharNum(person.url);
      personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
      const personCap = document.createElement("figcaption");
      personCap.textContent = person.name;
      personFig.appendChild(personImg);
      personFig.appendChild(personCap);
      characterDiv.appendChild(personFig);
    });
    displayText.textContent = "";
  }
}

function extractCharNum(url) {
  const regex = /\/(\d+)\/$/;
  return url.match(regex)[1];
}

populateDOM(people);
