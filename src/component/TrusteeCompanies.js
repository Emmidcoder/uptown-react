import React from "react";


const TrusteeCompanies = () => {
    return (
        <section class="trustee-companies">
            <h3 class="trustee-companies__heading">TRUSDTED BY OVER 1000+ CLIENT</h3>

            <div class="trustee-companies__logo">
                <img src={require('../img/spinlet.png')} alt="company-logo" />
                <img src={require('../img/fliqpay.png')} alt="company-logo" />
                <img src={require('../img/andela.png')} alt="company-logo" />
                <img src={require('../img/cool.png')} alt="company-logo" />
                <img src={require('../img/filmhouse.png')} alt="company-logo" />
                <img src={require('../img/seller.png')} alt="company-logo" />
            </div>
        </section>
    )
}

export default TrusteeCompanies;