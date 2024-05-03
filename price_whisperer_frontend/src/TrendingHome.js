import React, {useEffect, useState} from "react";

function TrendingHome() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/trending');
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

export default TrendingHome;