import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../assets/data/data';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

  const {id} = useParams();
  console.log(typeof(id));
  const parseId = parseInt(id);

  const findProdcut = props.shoes.find((item)=>{
    return item.id === parseId;
  })



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={findProdcut.url} alt="" />
        </div>
        <div className="col-md-6 mt-4">
        <h4 className='pt-5'>{findProdcut.title}</h4>
          <p>{findProdcut.content}</p>
          <p>{findProdcut.price}</p>
          <button className='btn btn-danger'>btn!</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;