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
        <div className={"bg-gray-300 p-4"}>
            <div>
                <h1 className={"font-custom text-center text-7xl p-4"}>{title}</h1>
            </div>

            <div className={"bg-gray-300 flex flex-wrap justify-center px-4"}>
            {products_from_store.map(product => (
                <div key={product.id} className={"flex w-1/4 p-4 m-2 border-4 items-center bg-white hover:text-yellow-600 transition-opacity ease-in hover:shadow-2xl"}>
                    <div className={"flex w-60 items-center justify-center"}>
                        <img src={product.image} alt={product.name} className={"rounded-lg object-contain h-60"}/>
                    </div>

                    <div className={""}>
                        <h2 className={"text-lg font-mysans px-4 py-2"}>{product.title}</h2>
                        <div className={"flex items-center"}>

                            <p className={"text-lg tracking-wider text-black py-1 pl-4"}
                               style={{color: product.rating > 4 ? 'green' : (product.rating > 2 ? 'gold' : 'red')}}>{product.rating} / 5</p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24"
                                 className={"fill-black"}>
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                            </svg>

                        </div>

                        <p className={"text-md tracking-wider text-black py-1 px-4"}>{product.no_ratings} ratings</p>
                        <p className={"text-md tracking-wider text-black py-1 px-4"}
                           style={{color: product.availability === "In Stock" ? 'green' : (product.availability === "Out of Stock" ? 'red' : 'gold')}}>
                            {product.availability}</p>
                        <p className={"text-md text-green-600 tracking-wider py-1 px-4"}>{product.price}</p>
                    </div>

                </div>
            ))}
            </div>

        </div>
    );
}

export default ProductsListing;