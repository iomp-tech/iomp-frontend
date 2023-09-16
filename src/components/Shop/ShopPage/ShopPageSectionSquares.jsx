import React from "react";

import {ServicesBlock} from "../../";

const ShopPageSectionSquares = ({title, squares, size, type}) => {
    return (
        <section className="services shop-page-services">
            <div className="container">
                <div className="services-wrapper">
                    {type === "blackWhite" ||
                    type === "null" ||
                    type === null ? (
                        <>
                            <div
                                className={`circle-bold ${size} services-circle1`}></div>
                            <div
                                className={`circle-bold ${size} services-circle2`}></div>
                        </>
                    ) : null}

                    <h2
                        className={`title ${size} services__title`}
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}>
                    </h2>

                    <div className="services-block-wrapper">
                        {squares.map((obj, index) => (
                            <ServicesBlock
                                key={`${obj.title}_${index}`}
                                size={size}
                                index={++index}
                                {...obj}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageSectionSquares;
