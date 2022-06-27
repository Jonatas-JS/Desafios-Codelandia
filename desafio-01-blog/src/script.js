const postsList = [
  {
    id: 1,
    title: 'Agora é oficial: o Windows 11 está vindo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    date: '12 de jul, 2021',
  },
  {
    id: 2,
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    date: '09 de jul, 2021',
  },
  {
    id: 3,
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
    date: '09 de jul, 2021',
  },
  {
    id: 4,
    title: 'John McAfee, criador do antivírus McAfee, morre',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    date: '07 de jul, 2021',
  },
]

let posts = document.querySelector('.posts-list')
for (let i = 0; i < postsList.length; i++) {
  posts.innerHTML += `
  <div class="post">
    <div class="post-header">
      <p class="post-date">${postsList[i].date}</p>
        <label for="checkbox" class="likeCheckbox">
          <input type="checkbox" class="checkbox">
          <span class="like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="17" class="post-like"></path></svg></span>
        </label>
      </div>
    <h3 class="post-title">${postsList[i].title}</h3>
    <p class="post-description">${postsList[i].description}</p>
  </div>
  `
}

// function like(){
//   let likeStatus = document.querySelector('.like')
//   if(likeStatus = document.querySelector('.like .active')){
//     likeStatus.classList.remove('active')
//   } else {
//     likeStatus.classList.add('active')
//   }
// }
