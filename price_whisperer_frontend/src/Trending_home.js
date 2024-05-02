import React, {useEffect, useState} from "react";

function Trending_home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:4000/trending')
                .then(response => response.json())
                .then(data => setProducts(data));
        }
        catch (error) {
            console.error('Error during GET request:', error);
        }

    }, []);

  return (
    <div>
        <div className={"bg-gray-200"}>
            <h1 className={"font-custom font-bold text-center text-6xl p-4 border-black bg-gray-200"}>Trending
                                                                                                      Items</h1>
        </div>

        <div className={"bg-gray-200 flex flex-wrap justify-center px-4"}>

            {products.map(product => (
                <div key={product.id} className={"flex flex-col w-1/4 p-4 m-5 border-4 bg-white"}>
                    <img src={product.image} alt={product.name} className={"rounded-lg object-contain h-96"}/>
                    <h2 className={"text-xl font-mysans tracking-wider text-center p-4"}>{product.title}</h2>
                    <p className={"text-lg tracking-wider text-center p-4"}>{product.price}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Trending_home;