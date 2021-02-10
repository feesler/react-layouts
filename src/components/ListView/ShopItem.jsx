import PropTypes from 'prop-types';
import { Product } from '../../models/Product';

export default function ShopItem(props) {
  const { item } = props;
  const bgImage = {
    backgroundImage: `url(${item.img})`,
  };

  return (
    <div className="shop-item">
      <div className="product-image" style={bgImage}></div>
      <div className="product-title">{item.name}</div>
      <div className="product-color">{item.color}</div>
      <div className="product-price">{item.formatPrice()}</div>
      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.instanceOf(Product).isRequired,
};
