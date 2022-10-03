import React from 'react';
import { Outlet } from 'react-router-dom';

const Event = () => {
  return (
    <div>
      Today's Event!
      <Outlet/>
    </div>
  );
};

export default Event;