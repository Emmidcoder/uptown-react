import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar"
import Property from "../home/mainsection/Property";


import axios from 'axios';


const options = {
    method: 'POST',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'dc0e7d7af5msh0d3af07996a02e0p182a86jsn2d27590b7e5b',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    data: {
        limit: 200,
        offset: 0,
        postal_code: '90004',
        status: [
            'for_sale',
            'ready_to_build'
        ],
        sort: {
            direction: 'desc',
            field: 'list_date'
        }
    }
};

const Properties = () => {

    const secondEffect = useRef(false)

    const [propertyDetails, setPropertyDetails] = useState([])

    useEffect(() => {
        if (secondEffect.current) return
            
        console.log('Hello');
            
        const propertiesAPI = async () => {
            try {
                const response = await axios.request(options);
                console.log(response.data.data.home_search.results);
                setPropertyDetails(response.data.data.home_search.results)
            } catch (error) {
                console.error(error);
            }
        }

        propertiesAPI()
        
        return () => {
            secondEffect.current = true
        }
        
    }, [])

    return (
        <section>
            <header>
                <NavBar />
            </header>
            <main className=" grid grid-cols-4 justify-center">
                {propertyDetails.map((property) => {
                    return <Property
                        img={property.primary_photo.href}
                        lazyImag={require('../../img/house4-small.png')}
                        price={+property.list_price}
                    />
                })}

            </main>
        </section>
    )
}

export default Properties