import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createProduct} from '../store';

const Detail = ({ shoes }) => {
  const { id } = useParams();
  const parseId = parseInt(id);

  const [event, setEvent] = useState(true);
  const [tab , setTab ] = useState(0);

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("시작!")
    setTimeout(() => {
      setEvent(false)
    }, 2000)
  }, [])


  const findProdcut = shoes.find((item) => {
    return item.id === parseId;
  })

  return (
    <div className="container">
      <div className="row" style={{flexDirection:"column" ,alignItems:"center"}}>
        {event &&
          <div className="alert alert-warning">
            if you buy in 2seconds, it will be 20% discount
          </div>
        }
        <div className="col-md-6" style={{textAlign:"center"}}>
          <img src={findProdcut.url} alt="" />
        </div>
        <div className="col-md-6 mt-4" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
          <h4 className='pt-5'>{findProdcut.title}</h4>
          <p>{findProdcut.content}</p>
          <p>{findProdcut.price}</p>
          <button 
            className='btn btn-danger'
            style={{margin:"0 auto"}}
            onClick={
              ()=>{dispatch(createProduct({id : findProdcut.id, name : findProdcut.title , count : 1}))}
            }
          >Get a Cart
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTab(0)} >버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTab(1)} >버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTab(2)} >버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab
        프롭탭네임={tab}
      />
    </div>
  );
};

function Tab ({프롭탭네임}) {
  
  const [css ,setCss] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      setCss('end');
    },50)
    return ()=>{  
      setCss('');
    }
  },[프롭탭네임])

  return (
    <div className={`start ${css}`}>
      {[<div>0000</div>,<div>1111</div>,<div>2222</div>][프롭탭네임]}
    </div>
  )
}


export default Detail;