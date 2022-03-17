class WebComponent extends HTMLElement {
  constructor() {
    super();

    // 1. By simply setting the innerHTML
    this.innerHTML = `
      <div>
        <span>This is a web component</span>
      </div>
    `;

    // 2. By creating elements and add them to the DOM
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = "This is a web component";
    div.appendChild(span);
    this.appendChild(div);

    // 3. Parse a HTML string
    const html = `<div><span>This is a web component</span></div>`
    const innerHTML = new DOMParser().parseFromString(html, 'text/html').body.innerHTML;
    this.innerHTML = innerHTML;
  }
}

customElements.define('web-component', WebComponent);