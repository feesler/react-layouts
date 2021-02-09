export class Product {
  constructor(entity) {
    Object.assign(this, {
      name: '',
      color: '',
      img: '',
      currency: '$',
      price: ''
    }, entity);
  }

  formatPrice() {
    return `${this.currency}${this.price}`;
  }
}
