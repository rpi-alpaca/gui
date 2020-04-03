// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import Blockly from 'blockly';

window.addEventListener('DOMContentLoaded', () => {
  Blockly.inject('blocklyDiv', {
  });

/*
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element !== null) {
      element.innerText = text;
    }
  }

  for (const type of ['chrome', 'node', 'electron']) {
  	// @ts-ignore
    replaceText(`${type}-version`, process.versions[type]);
  }
*/
});
