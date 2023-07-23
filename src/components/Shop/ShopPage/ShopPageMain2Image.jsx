import React from "react";

import moment from "moment";
import "moment/locale/ru";

import ShopPageModal from "./ShopPageModal";
import ShopPageAwoForm from "./ShopPageAwoForm";

const ShopPageMain2Image = ({
    subtitle,
    title,
    description,
    range,
    minDate,
    maxDate,
    date,
    id_awo,
    action,
    formId,
    formVc,
    vkUrl,
    telegramUrl,
    image,
}) => {
    const [stateModalShopPage, setStateModalShopPage] = React.useState(false);

    React.useEffect(() => {
        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

    const ShopPageModalRef = React.useRef();

    const toggleModal = () => {
        setStateModalShopPage(!stateModalShopPage);
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
            <section
                className={`shop-page-main2-image`}
                id="shop-page-main2-image"
            >
                <div className="container">
                    <div className="shop-page-main2-image-wrapper">
                        <div className="shop-page-main2-image-text">
                            <p
                                className={`shop-page-main2-image-text__subtitle`}
                            >
                                {subtitle}
                            </p>
                            <h1
                                className={`shop-page-main2-image-text__title`}
                                dangerouslySetInnerHTML={{
                                    __html: title,
                                }}
                            ></h1>
                            <p
                                className={`shop-page-main2-image-text__description`}
                            >
                                {description}
                            </p>

                            <div className="circle-wrapper main-circle-wrapper">
                                <div className="circle-regular main-circle1"></div>
                                <div
                                    className={`circle-bold main-circle2`}
                                ></div>
                            </div>

                            {range ? (
                                <div className="shop-page-main2-image-text-date">
                                    <div className="shop-page-main2-image-text-date-left">
                                        <span
                                            className={`shop-page-main2-image-text__date-range`}
                                        >
                                            <b>Дата старта:</b>
                                        </span>
                                    </div>
                                    <div className="shop-page-main2-image-text-date-right">
                                        <span
                                            className={`shop-page-main2-image-text__date-range`}
                                        >
                                            <b>с:</b>{" "}
                                            {moment(
                                                minDate,
                                                "YYYY-MM-DD, HH:mm"
                                            )
                                                .locale("ru")
                                                .format("DD MMMM, HH:mm")}
                                        </span>
                                        <span
                                            className={`shop-page-main2-image-text__date-range`}
                                        >
                                            <b>до:</b>{" "}
                                            {moment(
                                                maxDate,
                                                "YYYY-MM-DD, HH:mm"
                                            )
                                                .locale("ru")
                                                .format("DD MMMM, HH:mm")}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className={`shop-page-main2-image-text-date`}
                                >
                                    <div className="shop-page-main2-image-text-date-left">
                                        <span
                                            className={`shop-page-main2-image-text__date`}
                                        >
                                            <b>Дата старта:</b>
                                        </span>
                                    </div>
                                    <div className="shop-page-main2-image-text-date-right">
                                        <span
                                            className={`shop-page-main2-image-text__date`}
                                        >
                                            {moment(date, "YYYY-MM-DD, HH:mm")
                                                .locale("ru")
                                                .format("DD MMMM, HH:mm")}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {vkUrl || telegramUrl ? (
                                <button
                                    onClick={toggleModal}
                                    className={`btn-bold_color shop-page-main2-image-text__btn`}
                                >
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
                        </div>
                        <div className="shop-page-main2-image-cover">
                            <img
                                src={image}
                                alt=""
                                className="shop-page-main2-image-cover__image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {vkUrl || telegramUrl ? (
                <ShopPageModal
                    close={toggleModal}
                    state={stateModalShopPage}
                    ShopPageModalRef={ShopPageModalRef}
                    emailUrl={action}
                    vkUrl={vkUrl}
                    telegramUrl={telegramUrl}
                    id_awo={id_awo}
                    action={action}
                    formId={formId}
                    formVc={formVc}
                />
            ) : null}
        </>
    );
};

export default ShopPageMain2Image;
