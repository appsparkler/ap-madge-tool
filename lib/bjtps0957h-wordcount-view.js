'use babel';

export default class Bjtps0957hWordcountView {

  constructor(serializedState) {
    // Create root element
    this.wordcount =  0;
    this.element = document.createElement('div');
    this.element.classList.add('bjtps0957h-wordcount');

    // Create message element
    const message = document.createElement('div');
    message.classList.add('message');
    const  img = document
      .createElement('img');
    img.src = "https://placekitten.com/220/120"
    this.element.appendChild(message);
    this.element.appendChild(img);
  }

  setCount(wordcount) {
    this.wordcount =  wordcount
    return this
  }

  setSVG(svg) {
    this.element.innerHTML = svg;
    console.log(this.element);
  }

  setModalText() {
    console.log(this)
    this.element.textContent = `There are ${this.wordcount} words.`
    return this;
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
