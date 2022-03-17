class WebComponent extends HTMLElement {
  constructor() {
    super();
    console.log(this.innerHTML);
  }
}

customElements.define('web-component', WebComponent);