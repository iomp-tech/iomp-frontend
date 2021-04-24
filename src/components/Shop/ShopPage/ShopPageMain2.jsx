import React from "react";
import axios from "axios";

import moment from "moment";
import "moment/locale/ru";

import ShopPageModal from "./ShopPageModal";
import ShopPageForm from "./ShopPageForm";

const ShopPageMain2 = ({
    subtitle,
    title,
    description,
    range,
    minDate,
    maxDate,
    date,
    size,
    id_awo,
    action,
    formId,
    formVc,
    vkUrl,
    telegramUrl,
}) => {
    const onSubmit = (formData) => {
        const newData = {
            Contact: {
                email: formData.email,
                id_newsletter: id_awo,
                id_advertising_channel_page: 0,
            },
            required_fields: {
                email: 1,
            },
            formId: formId,
            formVc: formVc,
            _aid: "",
            _vcaid: "",
        };
        axios
            .post(action, newData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                window.location.href = action;
            })
            .catch(() => {
                return false;
            });
    };

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
            <section className="shop-page-main2" id="shop-page-main2">
                <div className="container">
                    <div className="shop-page-main2-wrapper">
                        <p className={`shop-page-main2__subtitle ${size}`}>
                            {subtitle}
                        </p>
                        <h1
                            className={`shop-page-main2__title ${size}`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        ></h1>
                        <p className={`shop-page-main2__description ${size}`}>
                            {description}
                        </p>

                        <div className="circle-wrapper main-circle-wrapper">
                            <div className="circle-regular main-circle1"></div>
                            <div
                                className={`circle-bold ${size} main-circle2`}
                            ></div>
                        </div>

                        {range ? (
                            <div className="shop-page-main2-date">
                                <div className="shop-page-main2-date-left">
                                    <span
                                        className={`shop-page-main2__date-range ${size}`}
                                    >
                                        <b>Дата старта:</b>
                                    </span>
                                </div>
                                <div className="shop-page-main2-date-right">
                                    <span
                                        className={`shop-page-main2__date-range ${size}`}
                                    >
                                        <b>с:</b>{" "}
                                        {moment(minDate, "YYYY-MM-DD, HH:mm")
                                            .locale("ru")
                                            .format("DD MMMM, HH:mm")}
                                    </span>
                                    <span
                                        className={`shop-page-main2__date-range ${size}`}
                                    >
                                        <b>до:</b>{" "}
                                        {moment(maxDate, "YYYY-MM-DD, HH:mm")
                                            .locale("ru")
                                            .format("DD MMMM, HH:mm")}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className={`shop-page-main2-date ${size}`}>
                                <div className="shop-page-main2-date-left">
                                    <span
                                        className={`shop-page-main2__date ${size}`}
                                    >
                                        <b>Дата старта:</b>
                                    </span>
                                </div>
                                <div className="shop-page-main2-date-right">
                                    <span
                                        className={`shop-page-main2__date ${size}`}
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
                                className={`btn-bold_color shop-page-main2__btn ${size}`}
                            >
                                Записаться
                            </button>
                        ) : (
                            <ShopPageForm onSubmit={onSubmit} />
                        )}
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
                    onSubmit={onSubmit}
                />
            ) : null}
        </>
    );
};

export default ShopPageMain2;
