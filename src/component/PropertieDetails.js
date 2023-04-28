import React from "react";
import iconLocation from "../img/icon-location.svg";
import iconHouse from "../img/icon-house.svg";
import iconTag from "../img/icon-tag.svg";

const PropertiesDetails = () => {
    return (
        <div className="properties-detail">            
            <h4 className="properties-detail__heading">Check available properties</h4>

            <div className="properties-detail__items">
                
                <div>
                    <span><img src={iconLocation} alt=""/></span>
                    <div>
                        <form className="flex" action="">
                            <label className="font-semibold" htmlFor="location">Location</label>
                            <select name="location" id="location"></select>
                        </form>
                        <p>Lekki, Lagos</p>
                    </div>
                </div>
                <div>
                    <span><img src={iconHouse} alt=""/></span>
                    <div>
                        <form className="flex" action="">
                            <label className="font-semibold" htmlFor="house">Property type</label>
                            <select name="house" id="house"></select>
                        </form>
                        <p>Duplex</p>
                    </div>
                </div>
                <div>
                    <span><img src={iconTag} alt=""/></span>
                    <div>
                        <form className="flex" action="">
                            <label className="font-semibold" htmlFor="amount">Maximum price</label>
                            <select name="amount" id="amount"></select>
                        </form>
                        <p>#5,000,000</p>
                    </div>
                </div>

                <button className="properties-detail__btn--search">Search</button>
            </div>
        </div>
    )
}

export default PropertiesDetails;