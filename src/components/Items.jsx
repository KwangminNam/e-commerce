import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Items = ({ itemTitle, itemPrice, itemImgUrl }) => {
  return (
    <div className="col-md-4">
      <img src={itemImgUrl} alt={itemImgUrl} width="80%" />
      <h4>{itemTitle}</h4>
      <p>{itemPrice}</p>
    </div>
  );
};

export default Items;