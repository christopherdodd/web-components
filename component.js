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

export default CustomButton;