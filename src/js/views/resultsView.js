import View from './View.js';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  // Patron publisher/subscriber
  // addHandlerRender(handler) {
  //   ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  // }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }

  /*   _generateMarkupIngredient(ing) {
    return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ing.quantity ? new Fraction(ing.quantity).toString() : ''
      }</div>
      <div class="recipe__description">
      
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
    `;
  } */
}

export default new ResultView();
