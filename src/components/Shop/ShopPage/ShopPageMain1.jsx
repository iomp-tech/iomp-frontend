import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

const ShopPageMain1 = ({ to, subtitle, title, description, btnText, size }) => {
    return (
        <section className={`shop-page-main1`} id="shop-page-main1">
            <div className="container">
                <div className="shop-page-main1-wrapper">
                    <p className={`shop-page-main1__subtitle ${size}`}>
                        {subtitle}
                    </p>
                    <h1
                        className={`shop-page-main1__title ${size}`}
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <p className={`shop-page-main1__description ${size}`}>
                        {description}
                    </p>

                    <Link
                        to={to}
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={1000}
                    >
                        <button
                            className={`btn-bold_color shop-page-main1__btn ${size}`}
                        >
                            {btnText}
                        </button>
                    </Link>

                    <div className="circle-wrapper main-circle-wrapper">
                        <div className="circle-regular main-circle1"></div>
                        <div
                            className={`circle-bold ${size} main-circle2`}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageMain1;
