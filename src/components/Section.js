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
      this._renderer(item)
    })
  }

  addItem (element) {
    this._elementContainer.prepend(element);
  }
}
