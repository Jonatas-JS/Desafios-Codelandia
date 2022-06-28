let cardList = [
  {
    id: 1,
    link: {
      link: 'air-jordan-01-mid-dutch-green-1-400.svg',
      name: 'Air Jordan 01 Mid Dutch Green 1 400',
    }
  },
  {
    id: 2,
    link: {
      link: 'air-jordan-02-high-zoom-cmft-tropical-twist-1-400.svg',
      name: 'Air Jordan 02 Mig Zoom cmft Tropical Twist 1 400',
    }
  },
  {
    id: 3,
    link: {
      link: 'air-jordan-03-retro-high-court-purple-w-1-400.svg',
      name: 'Air Jordan 03 Retro High Court Purple w 1 400',
    }
  },
  {
    id: 4,
    link: {
      link: 'air-jordan-04-mid-light-smoke-grey-gs-1-1000.svg',
      name: 'Air Jordan 04 Mid light Smoke Grey gs 1 1000',
    }
  },
  {
    id: 5,
    link: {
      link: 'air-jordan-05-mid-black-noble-red-w-1-1000.svg',
      name: 'Air Jordan 05 Mid Black Noble Red w 1 1000',
    }
  },
  {
    id: 6,
    link: {
      link: 'air-jordan-06-mid-bright-citrus-1-1000 1.svg',
      name: 'Air Jordan 06 Mid Bright Citrus 1 1000',
    }
  },
  {
    id: 7,
    link: {
      link: 'air-jordan-07-mid-grey-camo-1-1000 1.svg',
      name: 'Air Jordan 07 Mid Grey Camo 1 1000',
    }
  },
  {
    id: 8,
    link: {
      link: 'air-jordan-08-mid-carbon-fiber-1-1000 1.svg',
      name: 'Air Jordan 08 Mid Carbon Fiber 1 1000',
    }
  },
]

function cardsGenration() {
  let cards = document.querySelector('.cards')
  for(let i = 0; i < cardList.length; i++) {
    cards.innerHTML += `
    <div class="card"><a href="#"><img src="./src/assets/${cardList[i].link.link}" alt="${cardList[i].link.name}" title="${cardList[i].link.name}"></a></div>
    `
  }
}
cardsGenration()