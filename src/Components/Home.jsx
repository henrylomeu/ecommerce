import React from 'react';
import Products from './Products';
import fundo from '../assets/fundo2.jpg';

const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-dark border-0">
        <img src={fundo} className="card-img" alt="Background" height='550px'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container bg-white rounded p-3">
            <h5 className="card-title display-3 fw-bolder mb-0" >CHEGADAS DA NOVA TEMPORADA</h5>
            <p className="card-text lead fs-2">
              CONFIRA TODAS AS TENDÊNCIAS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
