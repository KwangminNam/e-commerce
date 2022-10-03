import React from 'react';
import data from '../assets/data/data';
import Items from './Items';

const Row = () => {

  const [items , setItems ] = useState(data);
  return (
    <div className="container">
    <div className="row">
      {items.map((item)=>
        <Items
          key={item.id}
          itemImgUrl={item.url}
          itemTitle={item.title}
          itemPrice={item.price}
        />
      )}
    </div>
  </div>
  );
};

export default Row;