import { useSelector } from 'react-redux';

import CollectionSlider from '../collection-slider/CollectionSlider';
import { selectCollectionsAsArray } from '../../store/features/shop/shop.selectors.js';

// Container of slider components
function CollectionOverview() {
  const collections = useSelector(selectCollectionsAsArray);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionSlider key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default CollectionOverview;
