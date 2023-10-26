import React from "react";
import Slider from "react-slick";
import './Article.css'
const CategorySlider = () => {

    const articleStyles1 = {
        '--hsl0': '49, 100%, 54%',
        '--hsl1': '33, 96%, 50%',
        '--idx': 0,
    };
    const articleStyles2 = {
        '--hsl0': '82, 81%, 52%',
        '--hsl1': '104, 56%, 51%',
        '--idx': 1,
    };
    const articleStyles3 = {
        '--hsl0': '169, 50%, 44%',
        '--hsl1': '191, 99%, 27%',
        '--idx': 2,
    };
    const articleStyles4 = {
        '--hsl0': '332, 94%, 67%',
        '--hsl1': '338, 101%, 59%',
        '--idx': 3,
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div>
            
            <Slider {...settings}>
                <div className="fontmyview">
                    <article data-icon="🍊" style={articleStyles1}>
                        <h3>option</h3>
                        <h4>gingerbread</h4>
                        <p>Cake muffin donut chocolate cake jelly sesame wafer tart pie muffin.</p>
                    </article>

                </div>
                <div className="fontmyview">

                    <article data-icon="🍐" style={articleStyles2}>
                        <h3>option</h3>
                        <h4>brownie</h4>
                        <p>Cake cookie lemon muffin plum. Orange topping macaroon chocolate.</p>
                    </article>

                </div>
                <div className="fontmyview">

                    <article data-icon="🍇" style={articleStyles3}>
                        <h3>option</h3>
                        <h4>ice cream</h4>
                        <p>Cake muffin donut chocolate cake jelly sesame wafer tart pie muffin.</p>
                    </article>

                </div>
                <div className="fontmyview">

                    <article data-icon="🍓" style={articleStyles4}>
                        <h3>option</h3>
                        <h4>lava cake</h4>
                        <p>Cake cookie lemon muffin plum. Orange topping macaroon chocolate.</p>
                    </article>
                </div>
            </Slider>
        </div>
    );
};

export default CategorySlider;
