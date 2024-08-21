import { createElement } from '../render.js';

export default class LoadMoreButtonView {
  getTemplate () {
    return '<button class="load-more" type="button">load more</button>';
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
