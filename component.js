class WebComponent extends HTMLElement {

  // 1. Constructor - created in memory but not necessarily attached to the DOM yet
  // Best place for initialisation, not the best place for interacting with the DOM
  constructor() {
    super();

    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-weight: bold;
        }
        span {
          /* background-color: black; */
          background-color: var(--bg-color);
          color: white;
        }
        ::slotted(span) {
          /* background-color: black; */
          background-color: var(--bg-color);
        }
      </style>
      <div>
        <span>${this.innerTextContent}</span>
        <slot></slot>
      </div>  
    `;
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') this.shadowRoot.querySelector('span').innerHTML = newValue;
  }

  disconnectedCallback() {
    console.log('web component has been removed');
  }

  static get observedAttributes() {
    return ['text'];
  }

}

customElements.define('web-component', WebComponent);