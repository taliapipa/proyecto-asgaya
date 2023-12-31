import { useState, useEffect } from 'react';
import Nav from './Componentes/Core/Nav/Nav';
import { Routes, Route } from "react-router-dom"
import ProductDetail from './Componentes/Pages/ProductDetail';
import ProductList from './Componentes/Pages/ProductList';
import Account from './Componentes/Pages/Account';
import "../src/Componentes/styles/App.css"
import Button from './Componentes/Shared/Button/button';
import hearticon from "./Assets/ic_round-favorite-bordericon.png"
import Register from './Componentes/Pages/Register';
import Profile from './Componentes/Pages/Profile';
import RequireAuth from './Componentes/AuthRoute/AuthRoute';
import Footer from './Componentes/Core/Footer/Footer';
import Home from './Componentes/Pages/Home';
import Apadrina from './Componentes/Pages/Apadrina';
import Favoritos from './Componentes/Pages/Favoritos';
import About from './Componentes/Pages/About';
export function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://649eb507245f077f3e9cc9ff.mockapi.io/api/v1/users')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  let mapeoProducts;

  if (products && products.length > 0) {
    mapeoProducts = products.map((product, i) => {
      return (
        <li key={i} className='li-product'>
          <img src={product.image} className='img-product'/>
          <div className='description'>
            <p className='product-name'>{product.name}</p>
            <p className='product-price'>{product.price}</p>
          </div>
          <div className='button-fav'>     
              <Button text="Añadir"/>
              <img src={hearticon} alt='fav' className='hearticon'/>
            </div>
        </li>
      );
    });
  }


  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home mapeoProducts={mapeoProducts}/>}/>
        <Route path="/list" element={<ProductList mapeoProducts={mapeoProducts}/>}/>
        <Route path="/detail/:id" element={<ProductDetail />}/>
        <Route path="/login" element={<Account  />}/>
        <Route path="/register" element={<Register />}/>
        <Route path='/about' element={<About />}/>
        <Route 
            path="/profile"
            element={
              <RequireAuth>
                {' '}
                <Profile />{' '}
              </RequireAuth>
            }
          />
        <Route
            path="/apadrina"
            element={
              <RequireAuth>
                {' '}
                <Apadrina />{' '}
              </RequireAuth>
            }
        />
        <Route
            path="/favoritos"
            element={
              <RequireAuth>
                {' '}
                <Favoritos />{' '}
              </RequireAuth>
            }
        />
        <Route
          path="*"
          element={
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg"
              alt="not found"
            />
          }
        />
      </Routes>


      <Footer/>
    </>

  );
}
