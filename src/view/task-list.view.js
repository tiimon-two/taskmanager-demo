import { createElement } from '../render.js';

export default class TaskListView {
  getTemplate () {
    return '<div class="board__tasks"></div>';
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
