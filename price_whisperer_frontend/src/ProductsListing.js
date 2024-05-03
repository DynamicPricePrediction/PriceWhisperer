import React, {useEffect, useState} from "react";
import {useLocation, useParams} from 'react-router-dom';

function ProductsListing () {
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');

    const [products_from_store, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/fetchStoreProducts/${id}`);
                if (!response.ok) { // if HTTP-status is 404, 500 or such
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error during GET request:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={"bg-gray-200 p-4"}>
            <div>
                <h1>{id}</h1>
                <h1>{title}</h1>
                {/*<h1>Hello</h1>*/}
            </div>
            {products_from_store.map(product => (
                <div key={product.id} className={"flex w-3/4 ml-auto mr-4 p-4 m-5 border-4 items-center bg-white hover:text-yellow-600"}>
                    <div className={"flex"}>
                        <img src={product.image} alt={product.name} className={"rounded-lg object-contain w-60"}/>
                    </div>

                    <div className={""}>
                        <h2 className={"text-2xl font-mysans px-4"}>{product.title}</h2>
                        <p className={"text-lg tracking-wider text-black px-4"}>{product.rating}</p>
                        <p className={"text-lg tracking-wider text-black px-4"}>{product.no_ratings} ratings</p>
                        <p className={"text-lg tracking-wider text-black px-4"}>{product.availability}</p>
                        <p className={"text-lg text-green-600 tracking-wider px-4"}>{product.price}</p>
                    </div>

                </div>
            ))}

        </div>
    );
}

export default ProductsListing;