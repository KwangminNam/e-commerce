import React from 'react';
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const Cart = () => {


  const a = useSelector(state => state);

  const { main } = a;
  console.log(main);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {main.map((item)=>{
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.count}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;