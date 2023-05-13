class Loader {
  constructor({ el, className }) {
    this.el = el;
    this.className = className;
  }

  show() {
    this.el.classList.add(this.className);
  }

  hide() {
    this.el.classList.remove(this.className);
  }
}

export default Loader;
