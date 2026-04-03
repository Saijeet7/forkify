import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.goto);
    });
  }

  _generatePageButton(gotoPage, direction) {
    const isNext = direction === 'next';
    const icon = isNext ? 'icon-arrow-right' : 'icon-arrow-left';
    const btnClass = isNext
      ? 'pagination__btn--next'
      : 'pagination__btn--prev';
    return `
        <button data-goto="${gotoPage}" class="btn--inline ${btnClass}">
          <span>Page ${gotoPage}</span>
          <svg class="search__icon">
            <use href="${icons}#${icon}"></use>
          </svg>
        </button>
      `;
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );
    if (numPages <= 1) return '';

    const { page } = this._data;
    let markup = '';
    if (page > 1) markup += this._generatePageButton(page - 1, 'prev');
    if (page < numPages) markup += this._generatePageButton(page + 1, 'next');
    return markup;
  }
}

export default new PaginationView();
