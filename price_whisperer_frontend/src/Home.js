import ImageCarousel from "./ImageCarousel";
import Trending_home from "./Trending_home";
import React, { useState, useEffect } from 'react';

function Home () {

    return (
        <div>
            <div className="relative p-4 bg-gray-200">
                <ImageCarousel/>
                <div
                    className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-4 w-3/4">
                    <h1 className="text-7xl font-bold font-custom tracking-wider text-center">Welcome to
                                                                                              PriceWhisperer</h1>&nbsp;
                    <p className={"text-transparent"}>hello</p>
                    <p className="text-2xl text-center font-custom tracking-wider">Your one stop shop for all your price
                                                                                   comparison needs</p>&nbsp;
                    <p className={"text-transparent"}>hello</p>
                </div>
            </div>
            <Trending_home/>

        </div>
    )
}

export default Home;