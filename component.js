class WebComponent extends HTMLElement {
  constructor() {
    super();

    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    // NOTE: Attributes are not the same as properties
    // If I am to console.log this.text, it will come up undefined
    console.log('this.text =', this.text); 

    this.innerHTML = `
      <div>
        <span>${this.innerTextContent}</span>
      </div>  
    `;
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') this.innerTextContent = this.innerHTML = `
      <div>
        <span>${newValue}</span>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['text'];
  }
}

customElements.define('web-component', WebComponent);