import React, { useState, useEffect } from 'react';

function ImageCarousel() {
    const images = ['https://price-whisperer-storage.s3.eu-north-1.amazonaws.com/offer_1.jpg',
        'https://price-whisperer-storage.s3.eu-north-1.amazonaws.com/offer_2.jpeg',
        'https://price-whisperer-storage.s3.eu-north-1.amazonaws.com/offer_4.jpg']; // replace with your image URLs
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 5000); // change images every 5 seconds

        return () => clearInterval(timer); // clear interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <div>
            <img src={images[currentImageIndex]} alt="carousel" className={"transition-opacity duration-5000 ease-in-out"}/>
        </div>
    );
}

export default ImageCarousel;