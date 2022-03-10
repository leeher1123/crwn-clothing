import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
      {collections.map((collection) => (
        <CollectionPreview collection={collection} key={collection.id} />
      ))}
    </div>
  );
}

export default ShopPage;
