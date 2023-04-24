import React from "react";


const News = () => {
    return (
        <section className="news">
            <div className="mt-28">
                <div className="sect-heading">
                    <div>
                        <h4 className="heading2">Our Blog</h4>
                        <h2 className="sub-heading2">Our Latest News</h2>
                    </div>


                    <button className="btn-fill self-end">See more</button>

                </div>
            </div>

            <div className="news__detail">
                <div>
                    <div><img src={require('../img/news1.png')} alt="news"/></div>
                    <p className="news__date"><span className="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 className="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div className="news__views">
                        <span className="news__views--icon">
                            <img className="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p className="inline">546</p>
                        </span>
                        <button className="news__views--btn">Read more</button>
                    </div>
                </div>

                <div>
                    <div><img src={require('../img/news2.png')} alt="news"/></div>
                    <p className="news__date"><span className="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 className="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div className="news__views">
                        <span className="news__views--icon">
                            <img className="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p className="inline">546</p>
                        </span>
                        <button className="news__views--btn">Read more</button>
                    </div>
                </div>

                <div>
                    <div><img src={require('../img/news3.png')} alt="news"/></div>
                    <p className="news__date"><span className="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 className="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div className="news__views">
                        <span className="news__views--icon">
                            <img className="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p className="inline">546</p>
                        </span>
                        <button className="news__views--btn">Read more</button>
                    </div>
                </div>

                <div>
                    <div><img src={require('../img/news4.png')} alt="news"/></div>
                    <p className="news__date"><span className="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 className="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div className="news__views">
                        <span className="news__views--icon">
                            <img className="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p className="inline">546</p>
                        </span>
                        <button className="news__views--btn">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;