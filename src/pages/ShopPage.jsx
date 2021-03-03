import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

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

import {fetchByUrlGoods} from "../redux/actions/goods";

const ShopPage = (props) => {
    const dispatch = useDispatch();

    const {byUrlItem, isLoaded} = useSelector(({goods}) => goods);
    const {size} = useSelector(({visually}) => visually);
    const url = props.match.params.url;

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchByUrlGoods(url));
    }, [url]);

    return (
        <>
            {isLoaded ? (
                Object.keys(byUrlItem).length ? (
                    <>
                        <Helmet>
                            <title>{byUrlItem.title} - IOMP</title>
                        </Helmet>

                        {byUrlItem.page.map((block) => (
                            <>
                                {block.type === "main1" ? (
                                    <ShopPageMain1 size={size} {...block} />
                                ) : null}
                                {block.type === "main2" ? (
                                    <ShopPageMain2 size={size} {...block} />
                                ) : null}
                                {block.type === "section-squares" ? (
                                    <ShopPageSectionSquares
                                        size={size}
                                        {...block}
                                    />
                                ) : null}
                                {block.type === "slider-text" ? (
                                    <ShopPageSliderText
                                        size={size}
                                        {...block}
                                    />
                                ) : null}
                                {block.type === "composition-product" ? (
                                    <ShopPageCompositionProduct
                                        size={size}
                                        {...block}
                                    />
                                ) : null}
                                {block.type === "teachers" ? (
                                    <ShopPageTeachers size={size} {...block} />
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
                            </>
                        ))}
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

export default ShopPage;