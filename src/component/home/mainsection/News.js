import React from "react";
import NewsItem from "./NewsItem";


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
                <NewsItem img={require('../../../img/news1.png')} lazyImg={require('../../../img/news1-small.png')} />
                <NewsItem img={ require('../../../img/news2.png')} lazyImg={require('../../../img/news2-small.png')} />
                <NewsItem img={require('../../../img/news3.png')} lazyImg={require('../../../img/news3-small.png')} />
                <NewsItem img={require('../../../img/news4.png')} lazyImg={require('../../../img/news4-small.png')}/>    
            </div>
        </section>
    )
}

export default News;