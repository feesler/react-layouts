import PropTypes from 'prop-types';
import { Product } from '../../models/Product';
import ShopCard from './ShopCard.jsx';

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map((card, index) =>
        <ShopCard key={`c_${index}`} card={card} />
      )}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
};
