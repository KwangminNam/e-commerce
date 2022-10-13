import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

const Items = ({ itemTitle, itemPrice, itemImgUrl ,each }) => {
  return (
    <Link to={each}>
      <div className="col-md-4">
        <img src={itemImgUrl} alt={itemImgUrl} width="80%" />
        <h4>{itemTitle}</h4>
        <p>{itemPrice}</p>
      </div>
    </Link>

  );
};

export default Items;