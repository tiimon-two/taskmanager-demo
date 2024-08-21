import { render } from '../render';
import BoardView from './board-view.js';
import LoadMoreButtonView from './load-more-button-view.js';
import SortView from './sort-view.js';
import TaskEditView from './task-edit-view.js';
import TaskListView from './task-list.view.js';
import TaskView from './task-view.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new TaskEditView(), this.taskListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TaskView(), this.taskListComponent.getElement());
    }

    render(new LoadMoreButtonView(), this.boardComponent.getElement());
  };
}
