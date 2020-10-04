'use babel'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Bjtps0957hWordcountView {

  constructor(serializedState) {
    this.wordcount =  0;
    this.element = document.createElement('div');
    this.element.classList.add('bjtps0957h-wordcount');
    const img = document
      .createElement('img');
    img.src = "https://placekitten.com/220/220"
    this.element.appendChild(img);
    const root = document.createElement('div')
    root.id = "root";
    this.element.appendChild(root);
    ReactDOM.render(<div>
      Hello
      </div>, root)
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
