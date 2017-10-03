export default class TaniImage extends HTMLElement {
  static get template() {
    return `
      <style>
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          cursor: pointer;
        }
      </style>
      <picture>
        <source type="image/webp">
        <img>
      </picture>
    `;
  }

  get src() {
    return `img/tani/${this.id}.jpg`;
  }

  get srcset() {
    return `img/tani/${this.id}.webp`;
  }

  constructor() {
    super();

    this.attachShadow({
      mode : 'open'
    }).innerHTML = TaniImage.template;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('img').src = this.src;
    this.shadowRoot.querySelector('source').src = this.srcset;
  }
};
