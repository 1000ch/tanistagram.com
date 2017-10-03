export default class BookAffiliate extends HTMLElement {
  static get template() {
    return `
      <style>
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          cursor: pointer;
          border: none;
          outline: none;
        }
      </style>
      <a target="_blank">
        <img>
      </a>
    `;
  }

  get url() {
    return this.getAttribute('url');
  }

  get src() {
    return `img/book/${this.getAttribute('name')}.jpg`;
  }

  constructor() {
    super();

    this.attachShadow({
      mode : 'open'
    }).innerHTML = BookAffiliate.template;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('a').href = this.url;
    this.shadowRoot.querySelector('img').src = this.src;
    this.shadowRoot.querySelector('img').alt = this.title;
  }
}
