function cardsGeneration() {
  const cards = document.querySelector('.cardsList')
  for ( let i = 0; i < 6; i++) {
    cards.innerHTML += `
    <div class="card">
    <div class="cardColor" style="background: ${generateColor()}"></div>
    <div class="cardDescription">
      <h2>Título do card</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
    </div>
  </div>
    `
  }

  function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
} cardsGeneration()
