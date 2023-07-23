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
        Axios.post(`${API_DOMEN}/goods/getsite`, {
            ...data,
            idAwo: courseAwoId,
            message: "ДЕМО УРОКИ",
        }).then(() => {
            setIsSend(true);
        });
    };

    return (
        <section className={`shop-page-demo`} id="shop-page-demo">
            <div className="container">
                <div className="shop-page-demo-wrapper">
                    <div className="shop-page-demo-text">
                        <h1
                            className={`shop-page-demo-text__title`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        ></h1>

                        <p className={`shop-page-demo-text__description`}>
                            {description}
                        </p>

                        {isSend ? (
                            <div className="shop-page-demo-text-thank">
                                <h1
                                    className={`shop-page-demo-text-thank__title`}
                                    dangerouslySetInnerHTML={{
                                        __html: thankTitle,
                                    }}
                                ></h1>

                                <p
                                    className={`shop-page-demo-text-thank__description`}
                                >
                                    {thankDescription}
                                </p>
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
