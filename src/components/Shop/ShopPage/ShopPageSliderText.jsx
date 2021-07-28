import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

import Slider from "react-slick";

import "../../../assets/slick/slick.css";
import "../../../assets/slick/slick-theme.css";

const ShopPageSliderText = ({to, title, tabs, btnText, size, blockIndex}) => {
    const [stateListTabsIndex, setStateListTabsIndex] = React.useState(0);
    const [stateAnimateTabs, setStateAnimateTabs] = React.useState(false);
    const [disabledArrow, setDisabledArrow] = React.useState(false);
    const [heightList, setHeightList] = React.useState(0);

    React.useEffect(() => {
        setHeightList(
            document.querySelector(
                `#shop-page-slider-text-list-block-${blockIndex}`
            ).clientHeight + 50
        );
        console.log(
            document.querySelector(
                `#shop-page-slider-text-list-block-${blockIndex}`
            )
        );
    }, []);

    React.useEffect(() => {
        setHeightList(
            document.querySelector(
                `#shop-page-slider-text-list-block-${blockIndex}`
            ).clientHeight + 50
        );
    }, [stateListTabsIndex]);

    const sliderRef = React.useRef();

    const onClickSliderTextTabsItem = (index) => {
        setStateListTabsIndex(index);
        setStateAnimateTabs(true);

        setTimeout(() => {
            setStateAnimateTabs(false);
        }, 400);

        nextSlide(index);
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 1000,

        swipeToSlide: true,
        variableWidth: true,

        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const nextSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const prev = () => {
        if (stateListTabsIndex) {
            setStateListTabsIndex(parseFloat(stateListTabsIndex - 1));
            setStateAnimateTabs(true);
            setDisabledArrow(true);

            sliderRef.current.slickPrev();

            setTimeout(() => {
                setStateAnimateTabs(false);
            }, 400);

            setTimeout(() => {
                setDisabledArrow(false);
            }, 1000);
        }
    };

    const next = () => {
        if (stateListTabsIndex !== parseFloat(tabs.length - 1)) {
            setStateListTabsIndex(parseFloat(stateListTabsIndex + 1));
            setStateAnimateTabs(true);
            setDisabledArrow(true);

            sliderRef.current.slickNext();

            setTimeout(() => {
                setStateAnimateTabs(false);
            }, 400);

            setTimeout(() => {
                setDisabledArrow(false);
            }, 1000);
        }
    };

    return (
        <section className="shop-page-slider-text">
            <div className="container">
                <div className="shop-page-slider-text-wrapper">
                    <h2
                        className={`title ${size} shop-page-slider-text__title`}
                    >
                        {title}
                    </h2>
                    <Slider ref={sliderRef} {...settings}>
                        {tabs.map((tab, index) => (
                            <div
                                key={`shop-page-slider-text-tabs-item-${index}`}
                                className="shop-page-slider-text-tabs-item"
                            >
                                <h3
                                    className={`shop-page-slider-text-tabs-item__title ${
                                        index === stateListTabsIndex
                                            ? "active"
                                            : ""
                                    } ${size}`}
                                    onClick={() =>
                                        onClickSliderTextTabsItem(index)
                                    }
                                >
                                    {tab.title}
                                </h3>
                            </div>
                        ))}
                    </Slider>
                    <div className="shop-page-slider-text-arrow">
                        <div
                            className="arrow"
                            style={{
                                pointerEvents: disabledArrow ? "none" : "auto",
                                opacity: disabledArrow ? 0.3 : 1,
                            }}
                        >
                            <div className="arrow-prev" onClick={prev}>
                                <svg
                                    width="50"
                                    height="25"
                                    viewBox="0 0 50 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M-0.000164032 12.4993C-0.000464032 12.3246 0.0687362 12.157 0.192436 12.0333L12.0603 0.184753C12.3222 -0.0678466 12.7396 -0.0605456 12.9926 0.200954C13.2394 0.456054 13.2394 0.860454 12.9926 1.11545L1.59153 12.4993L12.9926 23.8817C13.2456 24.1432 13.2383 24.5599 12.9765 24.8125C12.7209 25.0589 12.3159 25.0589 12.0603 24.8125L0.192436 12.964C0.0691362 12.8407 -6.4032e-05 12.6736 -0.000164032 12.4993Z" />
                                    <path d="M0 12.5673C0 12.2059 0.466398 11.9129 1.0417 11.9129L48.9583 11.9129C49.5336 11.913 50 12.2059 50 12.5673C50 12.9287 49.5336 13.2217 48.9583 13.2217L1.0416 13.2217C0.466399 13.2217 0 12.9287 0 12.5673Z" />
                                </svg>
                            </div>
                            <div className="arrow-next" onClick={next}>
                                <svg
                                    width="50"
                                    height="25"
                                    viewBox="0 0 50 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M50.0002 12.5007C50.0005 12.6754 49.9313 12.843 49.8076 12.9667L37.9397 24.8152C37.6778 25.0678 37.2604 25.0605 37.0074 24.799C36.7606 24.5439 36.7606 24.1395 37.0074 23.8845L48.4085 12.5007L37.0074 1.11824C36.7544 0.856768 36.7617 0.440031 37.0235 0.187449C37.2791 -0.0589638 37.6841 -0.0589638 37.9397 0.187449L49.8076 12.036C49.9309 12.1593 50.0001 12.3264 50.0002 12.5007Z" />
                                    <path d="M50 12.4328C50 12.7942 49.5336 13.0872 48.9583 13.0872L1.0417 13.0872C0.466406 13.0871 0 12.7942 0 12.4328C0 12.0714 0.466406 11.7784 1.0417 11.7784L48.9584 11.7784C49.5336 11.7784 50 12.0714 50 12.4328Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shop-page-slider-text-list-wrapper"
                        style={{height: heightList}}
                    >
                        <div
                            className={`shop-page-slider-text-list ${
                                stateAnimateTabs ? "active" : ""
                            } ${size}`}
                            id={`shop-page-slider-text-list-block-${blockIndex}`}
                        >
                            <ul
                                className={`shop-page-slider-text-list-ul ${size}`}
                            >
                                {tabs[stateListTabsIndex] &&
                                    tabs[stateListTabsIndex].items &&
                                    tabs[stateListTabsIndex].items.map(
                                        (li, index) => (
                                            <li
                                                key={`slider-text-li-${index}`}
                                                className={`shop-page-slider-text-list__li ${size}`}
                                            >
                                                <span>{li.text}</span>
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>

                        <div className="circle-wrapper shop-page-slider-text-circle-wrapper">
                            <div
                                className={`circle-bold ${size} shop-page-slider-text-circle1`}
                            ></div>
                            <div
                                className={`circle-regular ${size} shop-page-slider-text-circle2`}
                            ></div>
                        </div>
                    </div>
                    <div className="shop-page-slider-text-btn">
                        <Link
                            to={to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                        >
                            <button
                                className={`btn-bold_color shop-page-slider-text__btn ${size}`}
                            >
                                {btnText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageSliderText;
