import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import queryString from "query-string";
import {Helmet} from "react-helmet";

import {
    TimetableFilters,
    TimetableBlock,
    TimetableLoading,
    ShopSection,
    MagazineSection,
    EmailFormWrapper,
    NoSearch,
    BtnLoaded,
} from ".././components/";

import {fetchCategories} from ".././redux/actions/categories";
import {fetchTeacher} from ".././redux/actions/teacher";

import {
    fetchTimetable,
    fetchLimitTimetable,
    fetchTimetableType,
    plusTimetableLimit,
} from ".././redux/actions/timetable";

const Timetable = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const categories = useSelector(({categories}) => categories.items);
    const {
        items,
        isLoaded,
        isLoadedLimit,
        timetableType,
        filters,
        limit,
        itemsLength,
    } = useSelector(({timetable}) => timetable);
    const teachers = useSelector(({teacher}) => teacher.items);
    const {size, color} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    const cat = props.match.params.cat;
    const queryGet = props.location.search;

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (cat) {
            filters.cat = cat;
        } else if (filters.cat !== "") {
            filters.cat = filters.cat;
        } else {
            filters.cat = "";
        }

        const parseQuery = queryString.parse(queryGet, {
            arrayFormat: "comma",
        });

        if (parseQuery.type !== undefined) {
            if (typeof parseQuery.type === "object") {
                parseQuery.type.map((arr) => (filters.type[arr] = arr));
            } else {
                filters.type[parseQuery.type] = parseQuery.type;
            }
        }

        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(timetableType).length) {
            dispatch(fetchTimetableType());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    React.useEffect(() => {
        const typeArr = [];

        Object.keys(filters.type).map((arr) => {
            typeArr.push(filters.type[arr]);
        });

        const query = queryString.stringify(
            {
                type: typeArr,
            },
            {arrayFormat: "comma", skipNull: true, skipEmptyString: true}
        );

        history.push(
            `/timetables${filters.cat !== "" ? `/${filters.cat}` : ""}/?${query}`
        );

        if (!Object.keys(items).length) {
            dispatch(fetchTimetable(limit, filters.cat, query));
        } else {
            dispatch(fetchLimitTimetable(limit, filters.cat, query));
        }
    }, [filters.cat, Object.keys(filters.type).length, limit]);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.timetableTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.timetableTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.timetableBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.timetableBottomHtml;
        }
    }, [Object.keys(integration).length]);

    const onClickPlusLimit = () => {
        dispatch(plusTimetableLimit(8));
    };

    return (
        <>
            <Helmet>
                <title>Расписание - IOMP</title>
            </Helmet>
            <section className="timetable">
                <div className="container">
                    <div className="timetable-wrapper">
                        <h2 className={`title ${size} timetable__title`}>
                            Расписание
                        </h2>

                        <TimetableFilters categories={categories} />

                        <div className="timetable-block-wrapper">
                            {isLoaded ? (
                                Object.keys(items).length ? (
                                    Object.keys(items).map((key) => (
                                        <TimetableBlock
                                            categories={categories}
                                            timetableType={timetableType}
                                            auths={teachers}
                                            size={size}
                                            color={color}
                                            isLoadedLimit={isLoadedLimit}
                                            ClassTimetablePage="timetable-block-container-page"
                                            {...items[key]}
                                            key={`timetable-block-${items[key].id}`}
                                        />
                                    ))
                                ) : (
                                    <NoSearch />
                                )
                            ) : (
                                <TimetableLoading />
                            )}
                        </div>

                        {Object.keys(items).length && isLoaded ? (
                            <>
                                {limit < itemsLength ? (
                                    <div className="timetable-bottom">
                                        <button
                                            onClick={onClickPlusLimit}
                                            className="btn-bold_gray_icon rotate timetable__btn"
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

            <ShopSection />
            <MagazineSection />
            <EmailFormWrapper />
        </>
    );
};

export default Timetable;
