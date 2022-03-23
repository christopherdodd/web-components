class CustomButton extends HTMLButtonElement {
  constructor() {
    super();

    this.link = this.getAttribute('link');
    this.addEventListener('click', event => {
      event.preventDefault();
      window.location.href = this.link;
    })
  }
}

customElements.define('custom-button', CustomButton, { extends: 'button' });