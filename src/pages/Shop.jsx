import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";
import {Helmet} from "react-helmet";

import {fetchCategories} from ".././redux/actions/categories";
import {
    fetchGoods,
    fetchLimitGoods,
    fetchGoodsTime,
    fetchGoodsType,
    fetchGoodsMinMaxPrice,
    setGoodsFilters,
    plusGoodsLimit,
} from ".././redux/actions/goods";
import {fetchTeacher} from ".././redux/actions/teacher";

import {addGoodsCart, statusGoodsPush} from ".././redux/actions/cart";

import {
    ShopFilters,
    ShopSearch,
    ShopBlock,
    ShopBlockLoading,
    NoSearch,
    BtnLoaded,
} from ".././components/";

import {DOMEN} from ".././api";

const Shop = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [stateFilters, setStateFilters] = React.useState(false);

    const categories = useSelector(({categories}) => categories.items);
    const {
        isLoaded,
        isLoadedLimit,
        items,
        filters,
        types,
        times,
        minPrice,
        maxPrice,
        limit,
        itemsLength,
    } = useSelector(({goods}) => goods);
    const teachers = useSelector(({teacher}) => teacher.items);
    const {integration} = useSelector(({integration_page}) => integration_page);
    const {push} = useSelector(({cart}) => cart);
    const {size} = useSelector(({visually}) => visually);

    const queryGet = props.location.search;

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.shopTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.shopTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.shopBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.shopBottomHtml;
        }
    }, [Object.keys(integration).length]);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const parseQuery = queryString.parse(queryGet, {
            arrayFormat: "comma",
        });

        if (parseQuery.q !== undefined) {
            filters.search = parseQuery.q;
        }

        if (parseQuery.type !== undefined) {
            filters.type = parseQuery.type;
        }

        if (parseQuery.type !== undefined) {
            filters.type = parseQuery.type;
        }

        if (parseQuery.auth !== undefined) {
            if (typeof parseQuery.auth === "object") {
                parseQuery.auth.map(
                    (arr) => (filters.auth[parseInt(arr)] = parseInt(arr))
                );
            } else {
                filters.auth[parseInt(parseQuery.auth)] = parseInt(
                    parseQuery.auth
                );
            }
        }

        if (parseQuery.category !== undefined) {
            if (typeof parseQuery.category === "object") {
                parseQuery.category.map((arr) => (filters.category[arr] = arr));
            } else {
                filters.categories[parseQuery.category] = parseQuery.category;
            }
        }

        if (parseQuery.time !== undefined) {
            if (typeof parseQuery.time === "object") {
                parseQuery.time.map((arr) => (filters.time[arr] = arr));
            } else {
                filters.time[parseQuery.time] = parseQuery.time;
            }
        }

        if (parseQuery.min !== undefined || parseQuery.max !== undefined) {
            filters.price.min = parseQuery.min;
            filters.price.max = parseQuery.max;
        }

        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(types).length) {
            dispatch(fetchGoodsType());
        }

        if (!Object.keys(times).length) {
            dispatch(fetchGoodsTime());
        }

        if (minPrice === "" && maxPrice === "") {
            dispatch(fetchGoodsMinMaxPrice());
        }
    }, []);

    const toggleSuccessAddCart = React.useCallback(() => {
        dispatch(statusGoodsPush(!push));
    }, [dispatch]);

    const setAddGoods = React.useCallback(
        (item) => {
            dispatch(addGoodsCart(item));
        },
        [dispatch]
    );

    React.useEffect(() => {
        let authArr = [];
        let categoriesArr = [];
        let timeArr = [];

        Object.keys(filters.auth).map((arr) => {
            authArr.push(filters.auth[arr]);
        });

        Object.keys(filters.categories).map((arr) => {
            categoriesArr.push(filters.categories[arr]);
        });

        Object.keys(filters.time).map((arr) => {
            timeArr.push(filters.time[arr]);
        });

        const query = queryString.stringify(
            {
                q: filters.search,
                auth: authArr,
                category: categoriesArr,
                time: timeArr,
                min: filters.price.min,
                max: filters.price.max,
            },
            {arrayFormat: "comma", skipNull: true, skipEmptyString: true}
        );

        history.push(`/shop/?${query}`);

        if (!Object.keys(items).length) {
            dispatch(fetchGoods(limit, query));
        } else {
            dispatch(fetchLimitGoods(limit, query));
        }
    }, [
        Object.keys(filters.categories).length,
        filters.price.min,
        filters.price.max,
        Object.keys(filters.auth).length,
        Object.keys(filters.time).length,
        filters.search,
        limit,
    ]);

    const setStateFiltersClick = () => {
        setStateFilters(!stateFilters);
    };

    const clearFilters = () => {
        filters.categories = {};
        filters.price.min = null;
        filters.price.max = null;
        filters.auth = {};
        filters.time = {};

        dispatch(setGoodsFilters(filters));
    };

    const onClickPlusLimit = () => {
        dispatch(plusGoodsLimit(10));
    };

    return (
        <>
            <Helmet>
                <title>Магазин курсов - IOMP</title>
            </Helmet>
            <section className="shop">
                <div className="container">
                    <div className="shop-wrapper">
                        <h2 className={`title ${size} shop__title`}>
                            Магазин курсов
                        </h2>
                        <div className="shop-block-top">
                            <ShopSearch />

                            <div className="shop-filters-btn">
                                {Object.keys(filters.categories).length ||
                                filters.price.min !== null ||
                                filters.price.max !== null ||
                                Object.keys(filters.auth).length ||
                                Object.keys(filters.time).length ? (
                                    <button
                                        className="shop-filters-clear__btn btn-clear-regular_color_icon"
                                        onClick={clearFilters}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="shop-filters-clear__svg"
                                        >
                                            <line
                                                x1="2.70711"
                                                y1="1.29289"
                                                x2="38.0624"
                                                y2="36.6482"
                                                strokeWidth="2"
                                            />
                                            <line
                                                x1="1.29289"
                                                y1="36.6482"
                                                x2="36.6482"
                                                y2="1.2929"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        Сбросить
                                    </button>
                                ) : (
                                    <></>
                                )}

                                <button
                                    className={`shop-filters__btn ${
                                        stateFilters ||
                                        Object.keys(filters.categories)
                                            .length ||
                                        filters.price.min !== null ||
                                        filters.price.max !== null ||
                                        Object.keys(filters.auth).length !==
                                            0 ||
                                        Object.keys(filters.time).length
                                            ? "btn-bold_color_icon white border"
                                            : "btn-regular_color_icon"
                                    }`}
                                    onClick={
                                        isLoaded ? setStateFiltersClick : null
                                    }
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.2857 0H0.714298C0.319795 0 0 0.319795 0 0.714298V4.2857C4.18526e-05 4.4881 0.0859651 4.681 0.236425 4.81643L7.14285 11.0321V19.2857C7.14268 19.6802 7.46231 20.0001 7.85681 20.0003C7.96776 20.0003 8.07721 19.9746 8.17644 19.925L12.4621 17.7821C12.7043 17.6611 12.8573 17.4136 12.8571 17.1428V11.0321L19.7636 4.81786C19.9144 4.68213 20.0004 4.48865 20 4.2857V0.714298C20 0.319795 19.6802 0 19.2857 0ZM18.5714 3.96783L11.665 10.1821C11.5141 10.3178 11.4282 10.5113 11.4286 10.7143V16.7014L8.5714 18.1299V10.7143C8.57136 10.5119 8.48544 10.319 8.33498 10.1836L1.42855 3.96783V1.42855H18.5714V3.96783Z"
                                            stroke="none"
                                        />
                                    </svg>
                                    Фильтры
                                </button>
                            </div>
                        </div>

                        {stateFilters ? <ShopFilters /> : null}

                        <div className="shop-catalog">
                            {isLoaded ? (
                                Object.keys(items).length ? (
                                    Object.keys(items).map((key) => (
                                        <ShopBlock
                                            key={`shop-block-${items[key].id}`}
                                            types={types}
                                            categories={categories}
                                            auths={teachers}
                                            size={size}
                                            onClickAddGoods={setAddGoods}
                                            onClickPush={toggleSuccessAddCart}
                                            idAwo={items[key].id_awo}
                                            isLoadedLimit={isLoadedLimit}
                                            DOMEN={DOMEN}
                                            {...items[key]}
                                        />
                                    ))
                                ) : (
                                    <NoSearch
                                        style={{
                                            marginTop: "100px",
                                        }}
                                    />
                                )
                            ) : (
                                Array(3)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div className="shop-block" key={index}>
                                            <ShopBlockLoading />
                                        </div>
                                    ))
                            )}
                        </div>

                        {Object.keys(items).length && isLoaded ? (
                            <>
                                {limit < itemsLength ? (
                                    <div className="shop-bottom">
                                        <button
                                            onClick={onClickPlusLimit}
                                            className="btn-bold_gray_icon rotate shop-loaded__btn"
                                        >
                                            {isLoadedLimit ? (
                                                <>
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 444 478"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M392.533 0C383.107 0 375.466 7.641 375.466 17.067V79.411C287.6 -5.656 147.411 -3.386 62.3444 84.479C22.2544 125.888 -0.110589 181.297 0.00041121 238.933C0.00041121 248.359 7.64141 256 17.0674 256C26.4934 256 34.1334 248.359 34.1334 238.933C34.1544 135.251 118.221 51.216 221.904 51.237C274.561 51.247 324.792 73.372 360.346 112.213L284.741 137.42C275.787 140.399 270.942 150.072 273.921 159.026C276.9 167.98 286.573 172.825 295.527 169.846L397.927 135.713C404.917 133.385 409.624 126.833 409.601 119.466V17.066C409.6 7.641 401.959 0 392.533 0Z"
                                                            fill="black"
                                                        />
                                                        <path
                                                            d="M426.666 221.867C417.24 221.867 409.599 229.508 409.599 238.934C409.578 342.616 325.511 426.651 221.828 426.63C169.171 426.62 118.94 404.495 83.3864 365.654L158.991 340.447C167.945 337.468 172.79 327.795 169.811 318.841C166.832 309.887 157.159 305.042 148.205 308.021L45.8054 342.154C38.8154 344.482 34.1084 351.034 34.1314 358.401V460.801C34.1314 470.227 41.7724 477.868 51.1984 477.868C60.6244 477.868 68.2654 470.227 68.2654 460.801V398.456C156.131 483.523 296.321 481.254 381.387 393.388C421.477 351.979 443.842 296.57 443.731 238.934C443.733 229.508 436.092 221.867 426.666 221.867Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                    Загрузить еще
                                                </>
                                            ) : (
                                                <BtnLoaded color="gray" />
                                            )}
                                        </button>
                                    </div>
                                ) : null}
                            </>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
