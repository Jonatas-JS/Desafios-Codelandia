## Desafio 03 - One Page

* Esse é o 3º desafio da comunidade <strong>Codelândia</strong> do Discord, onde foi requisitado a criação de um site com vários cards informativos.
* Foram utilizadas as tecnologias:
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

* Vale ressaltar que os cards são carregados usando a função <strong>`for`</strong> no arquivo JavaScript, não foi criado um Array contendo cada informação de cada card pois todos os cards tem a mesma informação mudando somente a cor dos cards.

<p align="center"><img src=".github/images/image-01.png" width="100%"></p>
<p align="center"><img src=".github/images/image-02.png" width="100%"></p>
<h3 align="center">--- Mobile Version ---<h3>
<p align="center"><img src=".github/images/gif-02.gif" width="100%"></p>
<p align="center"><img src=".github/images/image-03.png" height="100%"></p>

* Como implementação optei por fazer com que seja gerada um cor aleatória para cada card todas as vezes que houver um reload na página como pode ser visto na function abaixo.

```tsx
  function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) { // o loop tem que ser de 6x pois uma cor no formato HTML tem 6 caracteres, ex.: #6C63FF
    //nessa function ela busca na const letters uma letra ou número
    //Math.floor => retorna um número inteiro.
    //Math.random => retorna um número randômico
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
```

<p align="center"><img src=".github/images/gif-01.gif" width="100%"></p>