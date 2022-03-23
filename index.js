import CustomButton from './component.js';
import CustomLink from './component-2.js';

customElements.define('custom-button', CustomButton, { extends: 'button' });
customElements.define('custom-link', CustomLink, { extends: 'a' });