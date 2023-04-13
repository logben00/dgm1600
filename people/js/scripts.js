import { people } from "../data/people.js";
import { getLastNumber, removeChildren } from "../utils/index.js";

const filterButtons = document.querySelector(".filterButtons");
const characterDiv = document.querySelector(".characterDiv");
const displayText = document.querySelector(".displayText");

const allCharsButton = document.createElement("button");
allCharsButton.textContent = "All Characters";
allCharsButton.addEventListener("click", function () {
  populateDOM(people);
});

const maleCharsButton = document.createElement("button");
maleCharsButton.textContent = "Male Characters";
maleCharsButton.addEventListener("click", function () {
  const maleCharacters = people.filter((person) => person.gender === "male");
  populateDOM(maleCharacters);
});

const femaleCharsButton = document.createElement("button");
femaleCharsButton.textContent = "Female Characters";
femaleCharsButton.addEventListener("click", function () {
  const femaleCharacters = people.filter((person) => person.gender === "female");
  populateDOM(femaleCharacters);
});

const otherCharsButton = document.createElement("button");
otherCharsButton.textContent = "Other Characters";
otherCharsButton.addEventListener("click", function () {
  const otherCharacters = people.filter((person) => person.gender !== "male" && person.gender !== "female");
  populateDOM(otherCharacters);
});

filterButtons.appendChild(allCharsButton);
filterButtons.appendChild(maleCharsButton);
filterButtons.appendChild(femaleCharsButton);
filterButtons.appendChild(otherCharsButton);

function populateDOM(characters) {
  removeChildren(characterDiv);

  if (characters.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No matching characters found.";
    characterDiv.appendChild(p);
  } else {
    characters.forEach((person) => {
      const personFig = document.createElement("figure");
      const personImg = document.createElement("img");
      let charNum = getLastNumber(person.url);
      personImg.src = `https://starwars-visualguide.com/assets/img/characters/.jpg`;
      const personCap = document.createElement("figcaption");
      personCap.textContent = person.name;

      personFig.appendChild(personImg);
      personFig.appendChild(personCap);
      characterDiv.appendChild(personFig);
    });
  }
}

populateDOM(people);
