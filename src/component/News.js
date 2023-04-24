import React from "react";


const News = () => {
    return (
        <section>
            <div class="mt-28">
                <div class="sect-heading">
                    <div>
                        <h4 class="heading2">Our Blog</h4>
                        <h2 class="sub-heading2">Our Latest News</h2>
                    </div>


                    <button class="btn-fill self-end">See more</button>

                </div>
            </div>

            <div class="news">
                <div>
                    <div><img src={require('../img/news1.png')} alt="news"/></div>
                    <p class="news__date"><span class="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 class="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div class="news__views">
                        <span class="news__views--icon">
                            <img class="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p class="inline">546</p>
                        </span>
                        <button class="news__views--btn">Read more</button>
                    </div>
                </div>

                <div>
                    <div><img src={require('../img/news2.png')} alt="news"/></div>
                    <p class="news__date"><span class="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 class="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div class="news__views">
                        <span class="news__views--icon">
                            <img class="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p class="inline">546</p>
                        </span>
                        <button class="news__views--btn">Read more</button>
                    </div>
                </div>

                <div>
                    <div><img src={require('../img/news3.png')} alt="news"/></div>
                    <p class="news__date"><span class="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 class="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div class="news__views">
                        <span class="news__views--icon">
                            <img class="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p class="inline">546</p>
                        </span>
                        <button class="news__views--btn">Read more</button>
                    </div>
                </div>

                <div>
                    <div><img src={require('../img/news4.png')} alt="news"/></div>
                    <p class="news__date"><span class="dot">&nbsp;</span> 31 Jan, 2023
                    </p>
                    <h5 class="news__headline">Asuu: Higher Instition strikes continues</h5>

                    <div class="news__views">
                        <span class="news__views--icon">
                            <img class="inline" src={require('../img/icon-eye.svg')} alt="eye-icon"/>
                                <p class="inline">546</p>
                        </span>
                        <button class="news__views--btn">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;