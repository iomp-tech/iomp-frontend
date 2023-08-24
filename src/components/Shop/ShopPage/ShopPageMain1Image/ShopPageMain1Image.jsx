import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

const ShopPageMain1Image = ({
    to,
    subtitle,
    title,
    description,
    btnText,
    image,
    size,
}) => {
    return (
        <section className={`shop-page-main1-image`} id="shop-page-main1-image">
            <div className="container">
                <div className="shop-page-main1-image-wrapper">
                    <div className="shop-page-main1-image-text">
                        <p
                            className={`shop-page-main1-image-text__subtitle ${size}`}>
                            {subtitle}
                        </p>
                        <h1
                            className={`shop-page-main1-image-text__title ${size}`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}></h1>
                        <p
                            className={`shop-page-main1-image-text__description ${size}`}
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}></p>
                        {/* 
                        <div className="shop-page-main1-image-form">
                            {isSend ? (
                                <div className="shop-page-form-thank">
                                    <h3 className="shop-page-form-thank__title">
                                        Спасибо за заявку!
                                    </h3>

                                    <p className="shop-page-form-thank__description">
                                        С вами скоро свяжется наш менеджер
                                    </p>
                                </div>
                            ) : (
                                <ShopPageMain1ImageForm
                                    onSubmit={onSubmit}
                                    btnText={btnText}
                                />
                            )}
                        </div> */}

                        {/* <form
                            action={CART_DOMEN}
                            method="post"
                            encType="application/x-www-form-urlencoded"
                            acceptCharset="UTF-8"
                            style={{width: "auto"}}
                        >
                            <input
                                type="hidden"
                                value="1"
                                name={`Goods[${id_awo}]`}
                            />

                            <input
                                name="CartAccount[name]"
                                type="hidden"
                                value=""
                            />
                            <input
                                name="CartAccount[email]"
                                type="hidden"
                                value=""
                            />

                            <button
                                type="submit"
                                className={`btn-bold_color shop-page-main1-image-text__btn ${size}`}
                            >
                                {btnText}
                            </button>
                        </form> */}
                        <Link
                            to={to}
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={1000}>
                            <button
                                className={`btn-bold_color shop-page-main1-image-text__btn ${size}`}>
                                {btnText}
                            </button>
                        </Link>
                        <div className="circle-wrapper main-circle-wrapper">
                            <div className="circle-regular main-circle1"></div>
                            <div
                                className={`circle-bold ${size} main-circle2`}></div>
                        </div>
                    </div>
                    <div className="shop-page-main1-image-cover">
                        <img
                            src={image}
                            alt=""
                            className="shop-page-main1-image-cover__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageMain1Image;
