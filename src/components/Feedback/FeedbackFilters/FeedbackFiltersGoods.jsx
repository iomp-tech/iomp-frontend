import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setFeedbackFilters} from "../../.././redux/actions/feedback";

const FeedbackFiltersGoods = React.memo(() => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({feedback}) => feedback);
    const goods = useSelector(({goods}) => goods.items);

    const setFeedbackGoods = (key) => {
        if (filters.goods[key]) {
            delete filters.goods[key];
        } else {
            filters.goods[key] = key;
        }

        dispatch(setFeedbackFilters(filters));
    };

    return (
        <div className="feedback-filters-block-wrapper">
            <div className="feedback-filters-block">
                <h3 className="feedback-filters__title">Курсы</h3>

                {Object.keys(goods).map((key) => (
                    <div
                        className="checkbox-wrapper feedback-filters-checkbox"
                        key={`${goods[key].title}_${key}`}
                    >
                        <input
                            type="checkbox"
                            id={`${goods[key].title}_${key}`}
                            onChange={() =>
                                setFeedbackGoods(
                                    parseInt(key.replace(/\D+/g, ""))
                                )
                            }
                            checked={
                                key ===
                                `good-${
                                    filters.goods[
                                        parseInt(key.replace(/\D+/g, ""))
                                    ]
                                }`
                                    ? true
                                    : false
                            }
                            className="checkbox"
                        />
                        <label
                            htmlFor={`${goods[key].title}_${key}`}
                            className="checkbox-label"
                        >
                            {goods[key].title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default FeedbackFiltersGoods;
