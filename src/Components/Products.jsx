import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if(componentMounted){
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted= false
            }
        }
        getProducts()
    }, [])
    
    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        setSelectedCategory(cat);
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };
    const ShowProducts = () => {
    return(
        <>
        <div className="container">
    <div className="row row-cols-1 row-cols-md-3 mb-5 pb-5">
        <div className="col mb-2">
            <button
                className={`btn w-100 ${
                    selectedCategory === null ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => {
                    setFilter(data);
                    setSelectedCategory(null);
                }}
            >
                Todos
            </button>
        </div>
        <div className="col mb-2">
            <button
                className={`btn w-100 ${
                    selectedCategory === "men's clothing" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => filterProduct("men's clothing")}
            >
                Masculino
            </button>
        </div>
        <div className="col mb-2">
            <button
                className={`btn w-100 ${
                    selectedCategory === "women's clothing" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => filterProduct("women's clothing")}
            >
                Feminino
            </button>
        </div>
        <div className="col mb-2">
            <button
                className={`btn w-100 ${
                    selectedCategory === "jewelery" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => filterProduct("jewelery")}
            >
                Jóias
            </button>
        </div>
        <div className="col mb-2">
            <button
                className={`btn w-100 ${
                    selectedCategory === "electronics" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => filterProduct("electronics")}
            >
                Eletrônicos
            </button>
        </div>
    </div>
</div>
        {filter.map((product)=>{
            return(
                <>
                <div className="col-md-3 mb-4">
                    <div className='card h-100 text-center p-4' key={product.id}>
                        <img src={product.image} className='card-img-top' alt={product.title} height='250px'/>
                        <div className='card-body'>
                            <h5 className='card-title mb-0'>{product.title.substring(0,12)}...</h5>
                                <p className='card-text fw-bold'>
                                    R${product.price}
                                </p>
                                <NavLink to={`${product.id}`} className='btn btn-outline-dark'>
                                    Comprar
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
                    )
                })}
            </>
        )
    }
  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>
                        Últimos produtos
                    </h1>
                    <hr/>
                </div>
            </div>
            <div className='row justfy-content-center'>
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Products