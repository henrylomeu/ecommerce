import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import { useSelector,useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
        <>
            <div className='col-md-6' >
                <Skeleton height={400} style={{lineHeight:2}}/>
                <div className='col-md-6'>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div>
            </div>
        </>
    )
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
            <h4 className='text-uppercase text-black-50'>
                {product.category}
            </h4>
            <h1 className='dispay-5'>{product.title}</h1>
            <p className='lead fw-bolder'>
                Nota {product.rating && product.rating.rate}/5
            </p>
            <h3 className='display-6 fw-bold my-4'>
                R$ {product.price}
            </h3>
            <p className='lead'>{product.description}</p>
            <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>
                Adicionar ao carrinho
            </button>
            <NavLink to='/cart'className='btn btn-dark ms-2 px-4 py-2'>
                Ir para o carrinho
            </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
