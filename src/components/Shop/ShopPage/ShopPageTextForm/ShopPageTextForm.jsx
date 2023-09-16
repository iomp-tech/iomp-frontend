import React from "react";
import Axios from "axios";

import {API_DOMEN} from "../../../../api";

import {ShopPageTextFormForm} from "../../../";

const ShopPageTextForm = ({id_awo, title, description, btnText}) => {
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
            message: "",
            idAwo: id_awo,
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
        <section className={`shop-page-text-form`}>
            <div className="container">
                <div className="shop-page-text-form-wrapper">
                    <div className="shop-page-text-form-text">
                        <h1
                            className={`shop-page-text-form-text__title`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}></h1>
                        <p
                            className={`shop-page-text-form-text__description`}
                            dangerouslySetInnerHTML={{__html: description}}></p>
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
                        <ShopPageTextFormForm
                            onSubmit={onSubmit}
                            btnText={btnText}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShopPageTextForm;
