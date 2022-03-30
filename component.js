class WebComponent extends HTMLElement {

  // 1. Constructor - created in memory but not necessarily attached to the DOM yet
  // Best place for initialisation, not the best place for interacting with the DOM
  constructor() {
    super();

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
    `;
    // const template = document.querySelector('#template').content.cloneNode(true);
    const template = this.querySelector('template').content.cloneNode(true);
    this.shadowRoot.appendChild(template);
  }

  disconnectedCallback() {
    console.log('web component has been removed');
  }

}

customElements.define('web-component', WebComponent);