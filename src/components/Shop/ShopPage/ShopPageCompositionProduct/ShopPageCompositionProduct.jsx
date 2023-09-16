import React from "react";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";
import Axios from "axios";

import {CART_DOMEN, API_DOMEN} from "../../../../api";

import "../../../../assets/slick/slick.css";
import "../../../../assets/slick/slick-theme.css";

import {addGoodsCart, statusGoodsPush} from "../../../../redux/actions/cart";
import {fetchAllGoods} from "../../../../redux/actions/goods";

import {
    ShopPageModal,
    ShopPageAwoForm,
    ShopPageCompositionProductForm,
    ShopPageCompositionProductStockForm,
} from "../../../";

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

    const [isSend, setIsSend] = React.useState(false);
    const [isSendStock, setIsSendStock] = React.useState(false);

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

    // const setUpdateGoods = (id) => {
    //     const obj = {
    //         id: id,
    //     };

    //     dispatch(addGoodsCart(obj));
    //     dispatch(statusGoodsPush(!push));
    // };

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

    const onSubmit = (data, message, idAwo) => {
        const utm_partner = parseInt(localStorage.getItem("utm_partner"));
        const utm_source = localStorage.getItem("utm_source");
        const utm_medium = localStorage.getItem("utm_medium");
        const utm_campaign = localStorage.getItem("utm_campaign");
        const utm_content = localStorage.getItem("utm_content");
        const utm_term = localStorage.getItem("utm_term");

        Axios.post(`${API_DOMEN}/goods/getsite`, {
            ...data,
            message,
            idAwo,
            utm_partner,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_content,
            utm_term,
        }).then(() => {
            setIsSend(true);
        });
    };

    const onSubmitStock = (data, message, idAwo) => {
        const utm_partner = parseInt(localStorage.getItem("utm_partner"));
        const utm_source = localStorage.getItem("utm_source");
        const utm_medium = localStorage.getItem("utm_medium");
        const utm_campaign = localStorage.getItem("utm_campaign");
        const utm_content = localStorage.getItem("utm_content");
        const utm_term = localStorage.getItem("utm_term");

        Axios.post(`${API_DOMEN}/goods/getsite`, {
            ...data,
            message,
            idAwo,
            utm_partner,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_content,
            utm_term,
        }).then(() => {
            setIsSend(true);
        });
    };

    return (
        <>
            <section
                className="shop-page-composition-product"
                id="shop-page-composition-product">
                <div className="container">
                    <div className="shop-page-composition-product-wrapper">
                        <h2
                            className={`title ${size} shop-page-composition-product__title`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}></h2>

                        <div className="shop-page-composition-product-modules-items-wrapper">
                            {modules.map((module, index) => (
                                <div
                                    key={`shop-page-composition-product-modules-item-${index}`}
                                    className="shop-page-composition-product-modules-item">
                                    <h3
                                        className={`shop-page-composition-product-modules-item__title ${
                                            index === stateModulesIndex
                                                ? "active"
                                                : ""
                                        } ${size}`}
                                        onClick={() =>
                                            onClickSliderTextModulesItem(index)
                                        }>
                                        {module.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        <div
                            className={`shop-page-composition-product-modules-description ${size}`}>
                            <p
                                className={`shop-page-composition-product-modules__description ${size}`}
                                dangerouslySetInnerHTML={{
                                    __html: modules[stateModulesIndex]
                                        .description,
                                }}></p>
                        </div>

                        <div
                            className="shop-page-composition-product-list-wrapper"
                            style={{height: heightList}}>
                            <div
                                className={`shop-page-composition-product-list ${
                                    stateAnimateModules ? "active" : ""
                                } ${size}`}
                                id={`shop-page-composition-product-list-block-${blockIndex}`}>
                                {modules[stateModulesIndex].items &&
                                    modules[stateModulesIndex].items.map(
                                        (item, index) => (
                                            <div
                                                key={`composition-product-list-item-${index}`}
                                                className={`shop-page-composition-product-list-item ${size}`}>
                                                <h4
                                                    className={`shop-page-composition-product-list-item__title ${size}`}>
                                                    {item.title}
                                                </h4>
                                                <p
                                                    className={`shop-page-composition-product-list-item__description ${size}`}
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.description,
                                                    }}></p>
                                            </div>
                                        )
                                    )}
                            </div>
                        </div>

                        {parseInt(formBoolean) ? (
                            <>
                                {vkUrl || telegramUrl ? (
                                    <button
                                        onClick={toggleModal}
                                        className={`btn-bold_color shop-page-composition-product__btn ${size}`}>
                                        Записаться
                                    </button>
                                ) : (
                                    <ShopPageAwoForm
                                        id_awo={id_awo}
                                        action={action}
                                        formId={formId}
                                        formVc={formVc}
                                    />
                                )}
                            </>
                        ) : parseInt(
                              modules[stateModulesIndex].stockBoolean
                          ) ? (
                            <div
                                id="shop-page-composition-product"
                                className={`shop-page-composition-product-block ${size}`}>
                                <div className="shop-page-composition-product-block-text">
                                    <h3
                                        className="shop-page-composition-product-block-text__title"
                                        dangerouslySetInnerHTML={{
                                            __html: modules[stateModulesIndex]
                                                .titleStock,
                                        }}></h3>

                                    <p
                                        className="shop-page-composition-product-block-text__description"
                                        dangerouslySetInnerHTML={{
                                            __html: modules[stateModulesIndex]
                                                .descriptionStock,
                                        }}></p>

                                    <h3
                                        className="shop-page-composition-product-block-text__price"
                                        dangerouslySetInnerHTML={{
                                            __html: modules[stateModulesIndex]
                                                .price,
                                        }}></h3>
                                </div>

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
                                    <ShopPageCompositionProductForm
                                        btnText={
                                            modules[stateModulesIndex]
                                                .btnTextStock
                                        }
                                        onSubmit={(data) =>
                                            onSubmit(
                                                data,
                                                `${modules[stateModulesIndex].titleStock}`,
                                                modules[stateModulesIndex]
                                                    .goodModuleStockId
                                            )
                                        }
                                    />
                                )}
                            </div>
                        ) : (
                            <div
                                id="shop-page-composition-product"
                                className={`shop-page-composition-product-block ${size}`}>
                                <div className="shop-page-composition-product-block-text">
                                    <h3
                                        className="shop-page-composition-product-block-text__title"
                                        dangerouslySetInnerHTML={{
                                            __html: modules[stateModulesIndex]
                                                .titleForm,
                                        }}></h3>

                                    <p
                                        className="shop-page-composition-product-block-text__description"
                                        dangerouslySetInnerHTML={{
                                            __html: modules[stateModulesIndex]
                                                .descriptionForm,
                                        }}></p>

                                    <h3
                                        className="shop-page-composition-product-block-text__price"
                                        dangerouslySetInnerHTML={{
                                            __html: modules[stateModulesIndex]
                                                .price,
                                        }}></h3>
                                </div>
                                {/* <div
                                        className={`shop-page-composition-product-block-price-wrapper ${size}`}>
                                        <h4
                                            className={`shop-page-composition-product-block__title ${size}`}>
                                            Стоимость:
                                        </h4>
                                        <div className="shop-page-composition-product-block-price">
                                            <div className="shop-page-composition-product-block-price-top">
                                                <h3
                                                    className={`shop-page-composition-product-block__price ${size}`}>
                                                    <NumberFormat
                                                        value={
                                                            modules[
                                                                stateModulesIndex
                                                            ].price
                                                        }
                                                        displayType={"text"}
                                                        thousandSeparator={" "}
                                                    />
                                                    ₽
                                                </h3>
                                            </div>
                                        </div>
                                    </div> */}

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
                                    <ShopPageCompositionProductForm
                                        btnText={
                                            modules[stateModulesIndex].btnText
                                        }
                                        onSubmit={(data) =>
                                            onSubmit(
                                                data,
                                                `${modules[stateModulesIndex].title}`,
                                                modules[stateModulesIndex]
                                                    .goodModuleId
                                            )
                                        }
                                    />
                                )}

                                {/* {parseInt(
                                    modules[stateModulesIndex].stockBoolean
                                ) ? (
                                    <div
                                        className={`shop-page-composition-product-block-right ${size}`}>
                                        <div className="shop-page-composition-product-block-right-top">
                                            <h4
                                                className={`shop-page-composition-product-block__title_color ${size}`}>
                                                {
                                                    modules[stateModulesIndex]
                                                        .titleStock
                                                }
                                            </h4>
                                            <p
                                                className={`shop-page-composition-product-block__subtitle ${size}`}
                                                dangerouslySetInnerHTML={{
                                                    __html: modules[
                                                        stateModulesIndex
                                                    ].descriptionStock,
                                                }}></p>
                                        </div>
                                        <div className="shop-page-composition-product-block-right-bottom">
                                            {isSendStock ? (
                                                <div className="shop-page-form-thank">
                                                    <h3 className="shop-page-form-thank__title">
                                                        Спасибо за заявку!
                                                    </h3>

                                                    <p className="shop-page-form-thank__description">
                                                        С вами скоро свяжется
                                                        наш менеджер
                                                    </p>
                                                </div>
                                            ) : (
                                                <ShopPageCompositionProductStockForm
                                                    btnText={
                                                        modules[
                                                            stateModulesIndex
                                                        ].btnTextStock
                                                    }
                                                    onSubmit={(data) =>
                                                        onSubmitStock(
                                                            data,
                                                            `${modules[stateModulesIndex].titleStock} - ${modules[stateModulesIndex].descriptionStock}`,
                                                            modules[
                                                                stateModulesIndex
                                                            ].goodModuleStockId
                                                        )
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                ) : null} */}
                            </div>
                        )}
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
