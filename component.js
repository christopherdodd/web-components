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
        <button>Trigger Special Event</button>
      </div>  
    `;
  }

  connectedCallback() {
    this.querySelector('button').addEventListener('click', this.triggerSpecialEvent.bind(this));
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') this.innerTextContent = this.innerHTML = `
      <div>
        <span>${newValue}</span>
        <button>Trigger Special Event</button>
      </div>
    `;
  }

  disconnectedCallback() {
    console.log('web component has been removed');
  }

  static get observedAttributes() {
    return ['text'];
  }

  triggerSpecialEvent() {
    const specialEvent = new Event('special');
    this.dispatchEvent(specialEvent);
  }
}

customElements.define('web-component', WebComponent);