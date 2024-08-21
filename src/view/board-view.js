import { createElement } from '../render.js';

export default class BoardView {
  getTemplate () {
    return '<section class="board container"></section>';
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
