import { createElement } from '../render.js';

export default class SortView {
  getTemplate () {
    return `<div class="board__sort-list">
              <a href="#" class="board__sort-item">SORT BY DEFAULT</a>
              <a href="#" class="board__sort-item">SORT BY DATE up</a>
              <a href="#" class="board__sort-item">SORT BY DATE down</a>
            </div>`;
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
