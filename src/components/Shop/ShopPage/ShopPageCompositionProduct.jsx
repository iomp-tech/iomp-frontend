import React from "react";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";

import Slider from "react-slick";

import "../../../assets/slick/slick.css";
import "../../../assets/slick/slick-theme.css";

import {addGoodsCart, statusGoodsPush} from "../../../redux/actions/cart";
import {fetchAllGoods} from "../../../redux/actions/goods";

import ShopPageModal from "./ShopPageModal";
import ShopPageForm from "./ShopPageForm";

const ShopPageCompositionProduct = ({
    title,
    modules,
    formBoolean,
    id_awo,
    action,
    formId,
    formVc,
    size,
    vkUrl,
    telegramUrl,
    blockIndex,
}) => {
    const dispatch = useDispatch();

    const {itemsAll} = useSelector(({goods}) => goods);
    const {push} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        if (!Object.keys(itemsAll).length) {
            dispatch(fetchAllGoods());
        }

        setHeightList(
            document.querySelector(
                `#shop-page-composition-product-list-block-${blockIndex}`
            ).clientHeight + 50
        );
    }, []);

    const [stateModulesIndex, setStateModulesIndex] = React.useState(0);
    const [stateAnimateModules, setStateAnimateModules] = React.useState(false);
    const [disabledArrow, setDisabledArrow] = React.useState(false);
    const [heightList, setHeightList] = React.useState(0);

    React.useEffect(() => {
        setHeightList(
            document.querySelector(
                `#shop-page-composition-product-list-block-${blockIndex}`
            ).clientHeight + 50
        );
    }, [stateModulesIndex]);

    const sliderRef = React.useRef();

    const onClickSliderTextModulesItem = (index) => {
        setStateModulesIndex(index);
        setStateAnimateModules(true);

        setTimeout(() => {
            setStateAnimateModules(false);
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
    };

    const nextSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const prev = () => {
        if (stateModulesIndex) {
            setStateModulesIndex(parseFloat(stateModulesIndex - 1));
            setStateAnimateModules(true);
            setDisabledArrow(true);

            sliderRef.current.slickPrev();

            setTimeout(() => {
                setStateAnimateModules(false);
            }, 400);

            setTimeout(() => {
                setDisabledArrow(false);
            }, 1000);
        }
    };

    const next = () => {
        if (stateModulesIndex !== parseFloat(modules.length - 1)) {
            setStateModulesIndex(parseFloat(stateModulesIndex + 1));
            setStateAnimateModules(true);
            setDisabledArrow(true);

            sliderRef.current.slickNext();

            setTimeout(() => {
                setStateAnimateModules(false);
            }, 400);

            setTimeout(() => {
                setDisabledArrow(false);
            }, 1000);
        }
    };

    const setUpdateGoods = (id) => {
        const obj = {
            id: id,
        };

        dispatch(addGoodsCart(obj));
        dispatch(statusGoodsPush(!push));
    };

    const [stateModalShopPage, setStateModalShopPage] = React.useState(false);

    React.useEffect(() => {
        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

    const ShopPageModalRef = React.useRef();

    const toggleModal = () => {
        if (vkUrl || telegramUrl) {
            setStateModalShopPage(!stateModalShopPage);
        } else {
            window.location.href = action;
        }
    };

    if (stateModalShopPage === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }

    const handTeacherModalBool = (e) => {
        if (e.target === ShopPageModalRef.current) {
            setStateModalShopPage(false);
        }
    };

    return (
        <>
            <section className="shop-page-composition-product">
                <div className="container">
                    <div className="shop-page-composition-product-wrapper">
                        <h2
                            className={`title ${size} shop-page-composition-product__title`}
                        >
                            {title}
                        </h2>
                        <Slider ref={sliderRef} {...settings}>
                            {modules.map((module, index) => (
                                <div
                                    key={`shop-page-composition-product-modules-item-${index}`}
                                    className="shop-page-composition-product-modules-item"
                                >
                                    <h3
                                        className={`shop-page-composition-product-modules-item__title ${
                                            index === stateModulesIndex
                                                ? "active"
                                                : ""
                                        } ${size}`}
                                        onClick={() =>
                                            onClickSliderTextModulesItem(index)
                                        }
                                    >
                                        {module.title}
                                    </h3>
                                </div>
                            ))}
                        </Slider>
                        <div className="shop-page-composition-product-arrow">
                            <div
                                className="arrow"
                                style={{
                                    pointerEvents: disabledArrow
                                        ? "none"
                                        : "auto",
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
                            className={`shop-page-composition-product-modules-description ${size}`}
                        >
                            <p
                                className={`shop-page-composition-product-modules__description ${size}`}
                            >
                                {modules[stateModulesIndex].description}
                            </p>
                        </div>
                        <div
                            className="shop-page-composition-product-list-wrapper"
                            style={{height: heightList}}
                        >
                            <div
                                className={`shop-page-composition-product-list ${
                                    stateAnimateModules ? "active" : ""
                                } ${size}`}
                                id={`shop-page-composition-product-list-block-${blockIndex}`}
                            >
                                {modules[stateModulesIndex].items &&
                                    modules[stateModulesIndex].items.map(
                                        (item, index) => (
                                            <div
                                                key={`composition-product-list-item-${index}`}
                                                className={`shop-page-composition-product-list-item ${size}`}
                                            >
                                                <h4
                                                    className={`shop-page-composition-product-list-item__title ${size}`}
                                                >
                                                    {item.title}
                                                </h4>
                                                <p
                                                    className={`shop-page-composition-product-list-item__description ${size}`}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                        )
                                    )}
                            </div>
                            <div className="circle-wrapper shop-page-composition-product-circle-wrapper">
                                <div
                                    className={`circle-bold ${size} shop-page-composition-product-circle1`}
                                ></div>
                                <div
                                    className={`circle-regular ${size} shop-page-composition-product-circle2`}
                                ></div>
                            </div>
                        </div>
                        {parseInt(formBoolean) ? (
                            <>
                                {vkUrl || telegramUrl ? (
                                    <button
                                        onClick={toggleModal}
                                        className={`btn-bold_color shop-page-composition-product__btn ${size}`}
                                    >
                                        Записаться
                                    </button>
                                ) : (
                                    <ShopPageForm
                                        id_awo={id_awo}
                                        action={action}
                                        formId={formId}
                                        formVc={formVc}
                                    />
                                )}
                            </>
                        ) : Object.keys(itemsAll).length ? (
                            <div
                                id="shop-page-composition-product"
                                className={`shop-page-composition-product-block-wrapper ${size}`}
                            >
                                <div
                                    className={`shop-page-composition-product-block-left ${size}`}
                                >
                                    <div
                                        className={`shop-page-composition-product-block-left-price-wrapper ${size}`}
                                    >
                                        <h4
                                            className={`shop-page-composition-product-block__title ${size}`}
                                        >
                                            Стоимость:
                                        </h4>
                                        <div className="shop-page-composition-product-block-price">
                                            <div className="shop-page-composition-product-block-price-top">
                                                {itemsAll[
                                                    modules[stateModulesIndex]
                                                        .goodModule
                                                ] &&
                                                itemsAll[
                                                    modules[stateModulesIndex]
                                                        .goodModule
                                                ].sale ? (
                                                    <>
                                                        <p
                                                            className={`shop-page-composition-product-block__subprice ${size}`}
                                                        >
                                                            <NumberFormat
                                                                value={
                                                                    itemsAll[
                                                                        modules[
                                                                            stateModulesIndex
                                                                        ]
                                                                            .goodModule
                                                                    ].priceOld
                                                                }
                                                                displayType={
                                                                    "text"
                                                                }
                                                                thousandSeparator={
                                                                    " "
                                                                }
                                                            />
                                                            ₽
                                                        </p>
                                                        <h3
                                                            className={`shop-page-composition-product-block__price ${size}`}
                                                        >
                                                            <NumberFormat
                                                                value={
                                                                    itemsAll[
                                                                        modules[
                                                                            stateModulesIndex
                                                                        ]
                                                                            .goodModule
                                                                    ].price
                                                                }
                                                                displayType={
                                                                    "text"
                                                                }
                                                                thousandSeparator={
                                                                    " "
                                                                }
                                                            />
                                                            ₽
                                                        </h3>
                                                    </>
                                                ) : (
                                                    <h3
                                                        className={`shop-page-composition-product-block__price ${size}`}
                                                    >
                                                        <NumberFormat
                                                            value={
                                                                itemsAll[
                                                                    modules[
                                                                        stateModulesIndex
                                                                    ].goodModule
                                                                ] &&
                                                                itemsAll[
                                                                    modules[
                                                                        stateModulesIndex
                                                                    ].goodModule
                                                                ].price
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                " "
                                                            }
                                                        />
                                                        ₽
                                                    </h3>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className={`btn-bold_color shop-page-composition-product-block__btn ${size}`}
                                        onClick={() =>
                                            setUpdateGoods(
                                                itemsAll[
                                                    modules[stateModulesIndex]
                                                        .goodModule
                                                ].id
                                            )
                                        }
                                    >
                                        Добавить в корзину
                                    </button>
                                </div>
                                {parseInt(
                                    modules[stateModulesIndex].stockBoolean
                                ) ? (
                                    <div
                                        className={`shop-page-composition-product-block-right ${size}`}
                                    >
                                        <div className="shop-page-composition-product-block-right-top">
                                            <h4
                                                className={`shop-page-composition-product-block__title_color ${size}`}
                                            >
                                                {
                                                    modules[stateModulesIndex]
                                                        .titleStock
                                                }
                                            </h4>
                                            <p
                                                className={`shop-page-composition-product-block__subtitle ${size}`}
                                            >
                                                {
                                                    modules[stateModulesIndex]
                                                        .descriptionStock
                                                }
                                            </p>
                                        </div>
                                        <div className="shop-page-composition-product-block-right-bottom">
                                            <button
                                                type="submit"
                                                className={`btn-bold_color shop-page-composition-product-block__btn ${size}`}
                                                onClick={() =>
                                                    setUpdateGoods(
                                                        modules[
                                                            stateModulesIndex
                                                        ].goodModuleStock
                                                    )
                                                }
                                            >
                                                {
                                                    modules[stateModulesIndex]
                                                        .btnTextStock
                                                }
                                            </button>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

            <ShopPageModal
                close={toggleModal}
                state={stateModalShopPage}
                ShopPageModalRef={ShopPageModalRef}
                emailUrl={action}
                vkUrl={vkUrl}
                telegramUrl={telegramUrl}
            />
        </>
    );
};

export default ShopPageCompositionProduct;
