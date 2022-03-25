export class Section {
  constructor ({items, renderer}, elementContainerSelector)  {
    this._items = items;
    this._renderer = renderer;
    this._elementContainer = document.querySelector(elementContainerSelector);
  }

  _clearContainer() {
    this._elementContainer.innerHTML = "";
  }

  renderItems(){
    this._clearContainer();

    this._items.forEach ( item => {
      this.addItem(item)
    })
  }

  addItem(item) {
    const card = this._renderer(item)
    this._elementContainer.prepend(card);
  }
}
