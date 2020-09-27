'use babel';

import Bjtps0957hWordcountView from './bjtps0957h-wordcount-view';
import { CompositeDisposable } from 'atom';

export default {
  bjtps0957hWordcountView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bjtps0957hWordcountView = new Bjtps0957hWordcountView(state.bjtps0957hWordcountViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bjtps0957hWordcountView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'bjtps0957h-wordcount:toggle': () => {
        const editor = atom.workspace.getActiveTextEditor();
        console.log(atom.workspace);
        try{
          const activePaneItem = atom.workspace.getActivePaneItem();
          const filePath = activePaneItem.buffer.file.path;
          // const {exec} = require('child_process');
          const madge = require('madge');
          const options = {}
          madge(filePath, options)
            .then(res => res.svg())
            .then(img => {
              const svgStr = img.toString();
              this.bjtps0957hWordcountView
                .setSVG(svgStr);
              console.log(svgStr);
              // const fs = require('fs');
              // fs.writeFile(
              //   './current-image.svg',
              //   img.toString(),
              //   (err) => {
              //     if(err) throw err;
              //     console.log('Done!')
              //   }
              // );
            });

          console.log(filePath);
        } catch(e) {
          console.error(e)
        }
        // const words = editor
        //   .getText()
        //   .split(/\s+/)
        //   .length;
        // this.bjtps0957hWordcountView
        //   .setCount(words)
        //   .setModalText();
        this.toggle();
      }
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bjtps0957hWordcountView.destroy();
  },

  serialize() {
    return {
      bjtps0957hWordcountViewState: this.bjtps0957hWordcountView.serialize()
    };
  },

  toggle() {
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
