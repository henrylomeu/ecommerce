import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action/index';

const Cart = () => {
  const cart = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [addedProduct, setAddedProduct] = useState(null);
  const [numProducts, setNumProducts] = useState(0);
  useEffect(() => {
    const totalProducts = cart.reduce((acc, curr) => acc + curr.qty, 0);
    setNumProducts(totalProducts);
  }, [cart]);

  const handleAddProduct = (product) => {
    dispatch(addCart(product));
    setAddedProduct(product);
  };

  const handleRemoveProduct = (product) => {
    dispatch(delCart(product));
    setNumProducts(numProducts - product.qty);
  };

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className="container py-5">
      <h1 className="mb-5">Carrinho</h1>
      {cart.length === 0 ? (
        <p>Nenhum produto no carrinho</p>
      ) : (
        <>
          <div>
            {cart.map((product) => (
              <div className="col-12 mb-4" key={product.id}>
                <div className="card position-relative col-12 col-sm-6 col-md-4 col-lg-6 mb-4 mx-auto">

                  <div className="row">
                  <div className="col-6 d-flex align-items-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{maxWidth:'150px',maxHeight:'150px'}}
                      />
                    </div>
                    <div className="col-6">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">R$ {product.price}</p>
                        <div className="position-absolute top-0 end-0 bg-dark text-white p-2">
                          {product.qty}
                        </div>
                        <div className="d-flex justify-content-end align-items-end">
                        <button
                            className="btn btn-outline-dark"
                            onClick={() => handleRemoveProduct(product)}
                        >
                            Remover
                        </button>
                        <button
                            className="btn btn-dark ms-2"
                            onClick={() => handleAddProduct(product)}
                        >
                            Adicionar
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-end mt-5">Total: R$ {totalPrice.toFixed(2)}</h3>
          <div className="text-end">
            <NavLink to="/checkout" className="btn btn-dark mt-3">
              Finalizar compra
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;