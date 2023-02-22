class SearchView {
  #parentEle = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEle.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEle.querySelector('.search__field').value = '';
  }

  addHandleSearch(handler) {
    this.#parentEle.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
