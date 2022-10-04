import React, { useState } from 'react';
import Items from './Items';
import data from '../assets/data/data';


const MainBg = () => {

  const [items , setItems ] = useState(data);


  return (
    <>
      <div className='main-bg'>
      
      </div>
      <button onClick={onSubmit}>click!</button>
      <div className="container">
        <div className="row">
          {items.map((item) =>
            <Items
              key={item.id}
              itemImgUrl={item.url}
              itemTitle={item.title}
              itemPrice={item.price}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MainBg;