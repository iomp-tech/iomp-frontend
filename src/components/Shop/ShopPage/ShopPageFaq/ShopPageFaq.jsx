import React from "react";

import { ShopPageFaqItem } from "../../../";

const ShopPageFaq = ({title, items}) => {
    return (
        <section className={`shop-page-faq`}>
            <div className="container">
                <div className="shop-page-faq-wrapper">
                    <h2
                        className="shop-page-faq__title"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h2>
                    <div className="shop-page-faq-items">
                        {items.map((item, index) => (
                            <ShopPageFaqItem
                                {...item}
                                key={`shop-page-faq-item-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageFaq;
