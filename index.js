import pokemon from './data.js'

// const pokemonArray = ['one', 'two', 'three','three','three','three','three','three','three','three']


function getHtml() {
  let htmlStrings = ''

  pokemon.map(pokemon => {
    htmlStrings += `
    <div class='card'>
        <img src=${pokemon.image} alt=${pokemon.name}/>
        <h3 class='name'>${pokemon.name}</h3>
     </div>`
  })
  return htmlStrings
}

document.getElementById('grid').innerHTML = getHtml()

// const pokemondata = pokemon.map((poke) => {
//   return poke.name
// })
      // <a href='/pokemon/${pokemon.id}'>...</a>
