const characterBar = document.querySelector('#character-bar');
const detailedInfo = document.querySelector('#detailed-info');
const votesForm = document.querySelector('#votes-form');
const votesInput = document.querySelector('#votes-input');

fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(characters => {
    characters.forEach(character => {
      const span = document.createElement('span');
      span.textContent = character.name;
      span.addEventListener('click', () => {
        displayCharacterDetails(character);
      });
      characterBar.appendChild(span);
    });
  });

function displayCharacterDetails(character) {
  detailedInfo.innerHTML = `
    <img src="${character.image}">
    <h2>${character.name}</h2>
    <p>Votes: ${character.votes}</p>
    <button class="btn" > + </button>
  `;var button = document.querySelector('.btn')
  button.addEventListener("click",()=> {
    let currentVotes = character.votes
    let newVotes = currentVotes + 1
    let votes = document.querySelector("p")
    votes.textContent = newVotes

  })
}