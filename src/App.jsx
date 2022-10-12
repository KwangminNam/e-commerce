import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainBg from './components/MainBg';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './components/Detail';
import Row from './components/Row';
import ErrorPage from './components/ErrorPage';
import Event from './components/Event';
import data from './assets/data/data';
import Items from './components/Items';
import axios from 'axios';
import Cart from './components/Cart';

function App() {

  const nav = useNavigate();
  const [items, setItems] = useState(data);
  const [count, setCount] = useState(1);

  const onSubmit = (e) => {
    setCount((prev) => prev + 1);
    if (count === 1) {
      axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((data) => {
          const copy2 = items.concat(data.data);
          console.log(copy2);
          setItems(copy2);
          setLoading(false)
        })
    } else if (count === 2) {
      axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((data) => {
          const copy2 = items.concat(data.data);
          console.log(copy2);
          setItems(copy2);
          setLoading(false)
        })
    } else if (count === 3) {
      alert('no more!');
    }
  }

  return (
    <div className="app">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { nav('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { nav('/detail') }}>Details</Nav.Link>
              <Nav.Link onClick={() => { nav('/cart') }}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
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
            <button onClick={onSubmit}>get</button>
          </>
        }></Route>
        <Route path='/detail/:id' element={<Detail shoes={items} />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>first order</div>} />
          <Route path='two' element={<div>second order</div>} />
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </div>
  )
}

export default App
