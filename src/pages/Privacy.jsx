import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPolicy} from "../redux/actions/policy";

const Privacy = () => {
    const dispatch = useDispatch();

    const {size} = useSelector(({visually}) => visually);
    const {items, isLoaded} = useSelector(({policy}) => policy);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!items.length) {
            dispatch(fetchPolicy());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Политика конфиденциальности - IOMP</title>
            </Helmet>
            <div className="privacy">
                <div className="container">
                    <div className="privacy-wrapper">
                        <h2 className={`title ${size} privacy__title`}>
                            Политика конфиденциальности
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
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Privacy;
