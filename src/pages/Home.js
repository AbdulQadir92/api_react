import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const Home = () => {

    const [data, error] = useFetch('http://127.0.0.1:8000/products');

    return (
        <div id="home" className="w-50 mx-auto mt-5">
            <h2 className="text-center">Products</h2>
            <ul className="list-group list-group-flush">
                {data && data.map(product => (
                    <li className="list-group-item" key={product.id}>
                        <Link className="list-link" to={`product_details/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home