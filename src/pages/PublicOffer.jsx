import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchOfferta} from "../redux/actions/offerta";

const PublicOffer = () => {
    const dispatch = useDispatch();

    const {size} = useSelector(({visually}) => visually);
    const {items, isLoaded} = useSelector(({offerta}) => offerta);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!items.length) {
            dispatch(fetchOfferta());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Публичная оферта - IOMP</title>
            </Helmet>
            <div className="privacy">
                <div className="container">
                    <div className="privacy-wrapper">
                        <h2 className={`title ${size} privacy__title`}>
                            Публичная оферта
                        </h2>

                        <div className={`privacy-text ${size}`}>
                            {isLoaded &&
                                items.map((item, index) => (
                                    <div
                                        className={`privacy-text-block ${size}`}
                                        key={`privacy-text-block-${index}-policy`}
                                    >
                                        <h3
                                            className={`privacy-text-block__title ${size}`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`privacy-text-block__description ${size}`}
                                            dangerouslySetInnerHTML={{
                                                __html: item.description,
                                            }}
                                        ></p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicOffer;
