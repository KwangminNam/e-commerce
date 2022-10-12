import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName  , changeAge , increase} from '../store';


const Cart = () => {


  const a = useSelector(state => state);  
  const dispatch = useDispatch();

  const { main , user } = a;

  return (
    <div>
      <div>{user.name} , {user.age}</div>
      <button onClick={()=>{dispatch(changeAge(100))}}>age!</button>
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
                <td><button onClick={()=>{dispatch(increase(item.id))}}>+</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;