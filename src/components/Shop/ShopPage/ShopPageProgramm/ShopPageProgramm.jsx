import React from "react";

import {ShopPageProgrammItem} from "../../../";

const ShopPageProgramm = ({title, description, items}) => {
    return (
        <section className={`shop-page-programm`} id="shop-page-programm">
            <div className="container">
                <div className="shop-page-programm-wrapper">
                    <h2
                        className="shop-page-programm__title"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}></h2>

                    <p
                        className="shop-page-programm__description"
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}></p>

                    <div className="shop-page-programm-items-wrapper">
                        {items.map((item, index) => (
                            <ShopPageProgrammItem
                                {...item}
                                key={`shop-page-programm-item-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageProgramm;
