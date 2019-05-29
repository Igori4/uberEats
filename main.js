import cards from './cards-info.js'

function addRestourants(element,cards) {
   cards.map(el => {
    element.innerHTML +=`
    <div class="container__card">
      <a href="#!" id ="${el['id']}">
      <img  class="card__img" src='./${el['image']}'>
      </a>
      <div class="card__description">
        <h3 class="description__text">${el['name']}</h3>
        <p class="description__category">${el['category']}</p>
        <span class="description__delivery-time">${el['delivery-time']}</span>
      </div>
    </div>  
   `
   }).join('')
  
}

addRestourants(document.querySelector('[data-element="restourant-cards"]'), cards);

function scrollup() {
  window.scrollTo(0, 0);
  console.log('sdf')
}

document.querySelector('.up-scroll').addEventListener('click', scrollup);
