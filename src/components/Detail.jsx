import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../assets/data/data';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

  const { id } = useParams();
  const parseId = parseInt(id);

  const [event, setEvent] = useState(true);
  const [input , setInput ] = useState("");
  const onChange = (e)=>{
    setInput(e.target.value);
  }



  useEffect(()=>{
    if(isNaN(input)==true){
      alert('nope')
    }
    console.log("text!")
  },[input])

  useEffect(() => {
    console.log("시작!")
    setTimeout(()=>{
      setEvent(false)
    },2000)
  },[])


  const findProdcut = props.shoes.find((item) => {
    return item.id === parseId;
  })

  return (
    <div className="container">
      <input type="text"   value={input} onChange={onChange}/>
      <div className="row">
        {event &&
          <div className="alert alert-warning">
            if you buy in 2seconds, it will be 20% discount
          </div>
        }
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