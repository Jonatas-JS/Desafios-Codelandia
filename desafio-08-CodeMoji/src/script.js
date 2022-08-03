let images = [
  {
    id: 1,
    image: './src/assets/memoji-01.svg',
    bgImage: './src/assets/memoji-01-form.svg',
  },
  {
    id: 2,
    image: './src/assets/memoji-02.svg',
    bgImage: './src/assets/memoji-02-form.svg',
  },
  {
    id: 3,
    image: './src/assets/memoji-03.svg',
    bgImage: './src/assets/memoji-03-form.svg',
  },
  {
    id: 4,
    image: './src/assets/memoji-04.svg',
    bgImage: './src/assets/memoji-04-form.svg',
  },
  {
    id: 5,
    image: './src/assets/memoji-05.svg',
    bgImage: './src/assets/memoji-05-form.svg',
  },
]

function renderImages() {
  let bloco = document.querySelector('.image-bg')
  for(i = 0; i < images.length; i++) {
      bloco.innerHTML += `
        <div class="image">
          <img src="${images[i].image}"/>
          <span><img src="${images[i].bgImage}"/></span>
        </div>
      `
  }
}
renderImages()