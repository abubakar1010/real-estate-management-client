import { useEffect, useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";


const Card = () => {

    const [data, setData] =  useState([]);

    useEffect( () => {

        fetch('estate.json')
        .then( response => response.json())
        .then( response => setData(response))
    },[])

    console.log(data);
    
    return (
        <div className=" my-24">
            <div className=" text-center">
                <h1 className=" py-6 text-xl xl:text-4xl font-bold  px-3">Skyline Serenity Where Luxury Living Reaches New Heights</h1>
                <p className=" text-lg font-medium  tracking-wider leading-relaxed text-black xl:px-64 px-4">Explore our carefully curated collection of residential properties, each offering a blend of luxury, comfort, and natural beauty. Immerse yourself in panoramic views and peaceful landscapes.</p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 my-16 place-content-center">
                {
                    data.map( element => <DisplayCard key={element.id} element={element} />)
                }
            </div>
        </div>
    );
};

export default Card;