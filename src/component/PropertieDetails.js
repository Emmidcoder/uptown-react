import React from "react";
import iconLocation from "../img/icon-location.svg";
import iconHouse from "../img/icon-house.svg";
import iconTag from "../img/icon-tag.svg";

const PropertiesDetails = () => {
    return (
        <div class="properties-detail">            
            <h4 class="properties-detail__heading">Check available properties</h4>

            <div class="properties-detail__items">
                
                <div>
                    <span><img src={iconLocation} alt=""/></span>
                    <div>
                        <form class="flex" action="">
                            <label class="font-semibold" for="location">Location</label>
                            <select name="location" id="location"></select>
                        </form>
                        <p>Lekki, Lagos</p>
                    </div>
                </div>
                <div>
                    <span><img src={iconHouse} alt=""/></span>
                    <div>
                        <form class="flex" action="">
                            <label class="font-semibold" for="house">Property type</label>
                            <select name="house" id="house"></select>
                        </form>
                        <p>Duplex</p>
                    </div>
                </div>
                <div>
                    <span><img src={iconTag} alt=""/></span>
                    <div>
                        <form class="flex" action="">
                            <label class="font-semibold" for="amount">Maximum price</label>
                            <select name="amount" id="amount"></select>
                        </form>
                        <p>#5,000,000</p>
                    </div>
                </div>

                <button class="properties-detail__btn--search">Search</button>
            </div>
        </div>
    )
}

export default PropertiesDetails;