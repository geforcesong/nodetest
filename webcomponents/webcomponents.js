//Source: https://www.dannymoerkerke.com/blog/web-components-will-replace-your-frontend-framework
class MyElement extends HTMLElement {
    constructor() {
        super();
        console.log('MyElement created');
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        :host{
            background-color: blue;
            opacity: 0.5;
        }
        .disabled {          
            opacity: 0.4;
            background-color: gray;
        }
        .textRed{
            color: red;
        }
        </style>
        <div id="container">
            <p> This is test </p>
        </div>`;
        this.container = this.shadowRoot.querySelector('#container');
    }

    connectedCallback() {
        // here the element has been inserted into the DOM
        console.log('MyElement inserted');
    }

    static get observedAttributes() {
        // only these attributes will be oberserved and attributeChangedCallback will be called
        return ['foo', 'bar', 'disabled'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        console.log(`${attr}, ${oldVal}, ${newVal}`);
        if (attr === 'disabled') {
            if (this.disabled) {
                this.container.classList.add('disabled');
            }
            else {
                this.container.classList.remove('disabled')
            }
        }
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    colorText(){
        this.container.classList.add('textRed');
    }
}

window.customElements.define('my-element', MyElement);


window.onload = function(){
    setTimeout(function(){
        const element = document.querySelector('my-element');
        element.colorText();
    }, 2000)
}