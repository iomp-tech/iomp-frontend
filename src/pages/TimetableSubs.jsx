import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    ShopPageMain1,
    ShopPageMain2,
    ShopPageSectionSquares,
    ShopPageSliderText,
    ShopPageCompositionProduct,
    ShopPageTeachers,
    ShopPageFeedbackPhotos,
    PreloaderPage,
    ShopPageFeedbackVideos,
    ShopPageGoods,
} from "../components/";

import {Er404} from "./";

import {fetchByUrlTimetable} from "../redux/actions/timetable";

const TimetableSubs = (props) => {
    const dispatch = useDispatch();

    const {byUrlItem, isLoaded} = useSelector(({timetable}) => timetable);
    const {size, type} = useSelector(({visually}) => visually);
    const url = props.match.params.url;

    const [to, setTo] = React.useState("");

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchByUrlTimetable(url));

        if (Object.keys(byUrlItem).length) {
            for (let i = 0; i < byUrlItem.page.length; i++) {
                if (byUrlItem.page[i].type === "composition-product") {
					setTo("shop-page-composition-product");
					
					break;
                } else if (byUrlItem.page[i].type === "main2") {
                    setTo("shop-page-main2");
                } else if (byUrlItem.page[i].type === "main1") {
                    setTo("shop-page-main1");
                }
            }
        }
    }, [url, Object.keys(byUrlItem).length]);

    React.useEffect(() => {
        if (Object.keys(byUrlItem).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                byUrlItem.timetablePageTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                byUrlItem.timetablePageTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                byUrlItem.timetablePageBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                byUrlItem.timetablePageBottomHtml;
        }
    }, [
        byUrlItem.timetablePageTopJs,
        byUrlItem.timetablePageTopHtml,
        byUrlItem.timetablePageBottomJs,
        byUrlItem.timetablePageBottomHtml,
    ]);

    return (
        <>
            {isLoaded ? (
                byUrlItem && Object.keys(byUrlItem).length ? (
                    <>
                        <Helmet>
                            <title>{byUrlItem.title} - IOMP</title>
                        </Helmet>

                        {byUrlItem.page.length ? (
                            byUrlItem.page.map((block, index) => (
                                <div key={`shop-page-block-${index}`}>
                                    {block.type === "main1" ? (
                                        <ShopPageMain1
                                            size={size}
                                            to={to}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "main2" ? (
                                        <ShopPageMain2
                                            size={size}
                                            {...block}
                                            action={byUrlItem.action}
                                            range={byUrlItem.range}
                                            minDate={byUrlItem.minDate}
                                            maxDate={byUrlItem.maxDate}
                                            date={byUrlItem.date}
                                            vkUrl={byUrlItem.vkUrl}
                                            telegramUrl={byUrlItem.telegramUrl}
                                        />
                                    ) : null}
                                    {block.type === "section-squares" ? (
                                        <ShopPageSectionSquares
                                            size={size}
                                            type={type}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "slider-text" ? (
                                        <ShopPageSliderText
                                            size={size}
                                            to={to}
                                            blockIndex={index}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "composition-product" ? (
                                        <ShopPageCompositionProduct
                                            size={size}
                                            {...block}
                                            action={byUrlItem.action}
                                            vkUrl={byUrlItem.vkUrl}
                                            blockIndex={index}
                                            telegramUrl={byUrlItem.telegramUrl}
                                        />
                                    ) : null}
                                    {block.type === "teachers" ? (
                                        <ShopPageTeachers
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "feedback-photos" ? (
                                        <ShopPageFeedbackPhotos
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "feedback-videos" ? (
                                        <ShopPageFeedbackVideos
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "goods" ? (
                                        <ShopPageGoods size={size} {...block} />
                                    ) : null}
                                </div>
                            ))
                        ) : (
                            <ShopPageMain2 size={size} {...byUrlItem} />
                        )}
                    </>
                ) : (
                    <Er404 />
                )
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default TimetableSubs;
