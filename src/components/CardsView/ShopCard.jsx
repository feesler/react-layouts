import PropTypes from 'prop-types';
import { Product } from '../../models/Product';

export default function ShopCard(props) {
  const { card } = props;
  const bgImage = {
    backgroundImage: `url(${card.img})`,
  };

  return (
    <div className="shop-card">
      <div className="product-title">{card.name}</div>
      <div className="product-color">{card.color}</div>
      <div className="product-image" style={bgImage} />
      <div className="shop-card__purchase-info">
        <div className="product-price">{card.formatPrice()}</div>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(Product).isRequired,
};
