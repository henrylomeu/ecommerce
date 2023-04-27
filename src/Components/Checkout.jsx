import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
  const cart = useSelector((state) => state.handleCart);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    dispatch({ type: 'CLEARCART' });
    setShowModal(false);
  };
  

  return (
    <div className="container py-5">
      <h1 className="mb-5">Checkout</h1>
      <div className="row mt-5">
        <div className="col-6">
          <h3>Resumo do pedido</h3>
          {cart.map((product) => (
            <div className="card mb-3" key={product.id}>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Quantidade: {product.qty}</p>
                <p className="card-text">Preço: R$ {(product.price * product.qty).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h4 className="mt-4">Total: R$ {totalPrice.toFixed(2)}</h4>
        </div>
        <div className="col-6">
          <h3>Informações do cliente</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome completo
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Finalizar
            </button>
          </form>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compra realizada com sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seu pedido foi realizado com sucesso!</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Checkout;