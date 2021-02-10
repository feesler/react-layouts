import PropTypes from 'prop-types';
import { Product } from '../../models/Product';
import ShopItem from './ShopItem.jsx';

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map((item, index) =>
        <ShopItem key={`li_${index}`} item={item} />
      )}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
};
