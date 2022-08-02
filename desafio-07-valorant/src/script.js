
let cards = [
  {
    id: 1,
    url: './src/assets/img-card-01.svg',
    name: 'Omen',
  },
  {
    id: 2,
    url: './src/assets/img-card-02.svg',
    name: 'Sage',
  },
  {
    id: 3,
    url: './src/assets/img-card-03.svg',
    name: 'Sova',
  },
]
function cardGeneration() {
  let card = document.querySelector('.cards-post')
  console.log(card)
  for(i = 0; i < cards.length; i++) {
    card.innerHTML += `
    <div class="card">
    <img src="${cards[i].url}"/>
    <p>${cards[i].name}</p>
    </div>
    
    `
  }
}
cardGeneration()