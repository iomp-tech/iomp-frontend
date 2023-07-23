import React from "react";

const ShopPageComparison = ({
    title,
    block1Title,
    block1Items,
    block2Title,
    block2Items,
}) => {
    return (
        <section className={`shop-page-comparison`}>
            <div className="container">
                <div className="shop-page-comparison-wrapper">
                    <h2
                        className="shop-page-comparison__title"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h2>

                    <div className="shop-page-comparison-blocks">
                        <div className="shop-page-comparison-block">
                            <h3 className="shop-page-comparison-block__title">
                                {block1Title}
                            </h3>
                            <div className="shop-page-comparison-block-list">
                                {block1Items.map((item, index) => (
                                    <p
                                        className="shop-page-comparison-block-list__item"
                                        key={`shop-page-comparison-block-1-list__item-${index}`}
                                    >
                                        {item.text}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="shop-page-comparison-block main-block">
                            <h3 className="shop-page-comparison-block__title">
                                {block2Title}
                            </h3>
                            <div className="shop-page-comparison-block-list">
                                {block2Items.map((item, index) => (
                                    <p
                                        className="shop-page-comparison-block-list__item"
                                        key={`shop-page-comparison-block-2-list__item-${index}`}
                                    >
                                        {item.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageComparison;
