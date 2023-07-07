import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar"
import Property from "../home/mainsection/Property";


import axios from 'axios';
import LoadingSpinner from "../LoadingSpinner";

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
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        if (secondEffect.current === true) return

        const data = JSON.parse(localStorage.getItem('propertyDetails'))
        if (data) {
            setLoaded(true)
            console.log(data);
            setPropertyDetails(data)
            return
        } 
        
        const propertiesAPI = async () => {
            try {
                const response = await axios.request(options);
                setPropertyDetails(response.data.data.home_search.results)
                setLoaded(true)
                console.log("Hello");

                localStorage.setItem("propertyDetails", JSON.stringify(response.data.data.home_search.results))
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
            
            <main className="pt-32 cos-container">
                <h4 className="heading2">Listed Apartment</h4>

                {!loaded && <LoadingSpinner />}
                
                <div className="pt-8 grid grid-cols-4 gap-7">
                    {loaded &&propertyDetails.map((property) => {
                        return <Property
                            key={property?.property_id}
                            img={property.primary_photo.href}
                            lazyImag={require('../../img/house4-small.png')}
                            street={property.location.address.street_name}
                            city={property.location.address.city}
                            sqft={property.description.sqft}
                            beds={property.description.beds}
                            baths={property.description.baths}
                            price={+property.list_price}
                        />
                    })}
                </div>

            </main>
        </section>
    )
}

export default Properties