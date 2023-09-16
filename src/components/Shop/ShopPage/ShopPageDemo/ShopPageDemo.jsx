import React from "react";
import Axios from "axios";

import {API_DOMEN} from "../../../../api";

import {ShopPageDemoForm} from "../../../";

const ShopPageDemo = ({
    title,
    description,
    btnText,
    image,
    courseAwoId,
    thankTitle,
    thankDescription,
}) => {
    const [isSend, setIsSend] = React.useState(false);

    const onSubmit = (data) => {
        const utm_partner = parseInt(localStorage.getItem("utm_partner"));
        const utm_source = localStorage.getItem("utm_source");
        const utm_medium = localStorage.getItem("utm_medium");
        const utm_campaign = localStorage.getItem("utm_campaign");
        const utm_content = localStorage.getItem("utm_content");
        const utm_term = localStorage.getItem("utm_term");

        Axios.post(`${API_DOMEN}/goods/getsite`, {
            ...data,
            idAwo: courseAwoId,
            message: "ДЕМО УРОКИ",
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
        <section className={`shop-page-demo`} id="shop-page-demo">
            <div className="container">
                <div className="shop-page-demo-wrapper">
                    <div className="shop-page-demo-text">
                        <h2
                            className={`shop-page-demo-text__title`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}></h2>

                        <p
                            className={`shop-page-demo-text__description`}
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}></p>

                        {isSend ? (
                            <div className="shop-page-demo-text-thank">
                                <h1
                                    className={`shop-page-demo-text-thank__title`}
                                    dangerouslySetInnerHTML={{
                                        __html: thankTitle,
                                    }}></h1>

                                <p
                                    className={`shop-page-demo-text-thank__description`}
                                    dangerouslySetInnerHTML={{
                                        __html: thankDescription,
                                    }}></p>
                            </div>
                        ) : (
                            <ShopPageDemoForm
                                onSubmit={onSubmit}
                                btnText={btnText}
                            />
                        )}
                    </div>

                    <div className="shop-page-demo-cover">
                        <img
                            src={image}
                            alt=""
                            className="shop-page-demo-cover__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageDemo;
