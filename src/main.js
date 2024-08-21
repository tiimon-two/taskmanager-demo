import { render } from './render.js';
import BoardPresenter from './view/board-presenter.js';
import FilterView from './view/filter-view.js';
import NewTaskButtonView from './view/new-task-button-view.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');
const boardPresenter = new BoardPresenter();

render(new NewTaskButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);

boardPresenter.init(siteMainElement);

