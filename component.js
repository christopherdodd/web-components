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
      <div>
        <div>
          <slot name="slot-1"></slot>
        </div>
        <div>
         <slot name="slot-2"></slot>
        </div>
      </div>  
    `;

    const slots = this.shadowRoot.querySelectorAll('slot');
    // console.dir(slots[0]);
    slots[0].addEventListener('slotchange', event => {
      console.dir(slots[0]);
    })
  }

  disconnectedCallback() {
    console.log('web component has been removed');
  }

}

customElements.define('web-component', WebComponent);