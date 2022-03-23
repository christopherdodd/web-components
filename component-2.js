class CustomLink extends HTMLAnchorElement {
    constructor() {
        super();
        this.addEventListener('click', event => {
            if(!confirm('Sure you wanna use Google?')) {
                event.preventDefault();
            }
        })
    }
}

export default CustomLink;