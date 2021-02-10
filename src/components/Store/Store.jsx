import { useState } from 'react';
import PropTypes from 'prop-types';
import { Product } from '../../models/Product.js';
import IconSwitch from '../IconSwitch/IconSwitch.jsx';
import CardsView from '../CardsView/CardsView.jsx';
import ListView from '../ListView/ListView.jsx';

export default function Store(props) {
  const { products } = props;
  const [state, setState] = useState({ viewType: 'cards' });

  const onViewSwitch = () => {
    setState((prev) => ({
      ...prev,
      viewType: (prev.viewType === 'cards') ? 'list' : 'cards'
    }));
  };

  if (state.viewType === 'list') {
    return (
      <div className="store">
        <IconSwitch icon="view_module" onSwitch={onViewSwitch} />
        <ListView items={products} />
      </div>
    )
  }

  return (
    <div className="store">
      <IconSwitch icon="view_list" onSwitch={onViewSwitch} />
      <CardsView cards={products} />
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
};
