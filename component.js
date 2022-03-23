class WebComponent extends HTMLElement {

  // 1. Constructor - created in memory but not necessarily attached to the DOM yet
  // Best place for initialisation, not the best place for interacting with the DOM
  constructor() {
    super();

    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    this.innerHTML = `
      <div>
        <span>${this.innerTextContent}</span>
      </div>  
    `;

    console.log(this.innerHTML);
    console.log('constructor');
  }

  // 2. Connected Callback - When the element is attached from the DOM
  connectedCallback() {
    console.log('connected callback');
  }

  // 3. Attribute Changed Callback - checking if an attribute has changed
  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') this.innerHTML = `
      <div>
        <span>${newValue}</span>
      </div>
    `;
  }

  // 4. Disconnected Callback - When the element is dettached from the DOM
  // Useful for performing cleanup
  disconnectedCallback() {
    console.log('web component has been removed');
  }

  static get observedAttributes() {
    return ['text'];
  }
}

customElements.define('web-component', WebComponent);