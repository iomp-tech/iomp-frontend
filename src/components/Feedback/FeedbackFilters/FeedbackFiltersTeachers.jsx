import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setFeedbackFilters} from "../../.././redux/actions/feedback";

const FeedbackFiltersTeachers = React.memo(() => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({feedback}) => feedback);
    const teachers = useSelector(({teacher}) => teacher.items);

    const setFeedbackAuth = (key) => {
        if (filters.auth[key]) {
            delete filters.auth[key];
        } else {
            filters.auth[key] = key;
        }

        dispatch(setFeedbackFilters(filters));
    };

    return (
        <div className="feedback-filters-block-wrapper">
            <div className="feedback-filters-block">
                <h3 className="feedback-filters__title">Преподаватели</h3>

                {Object.keys(teachers).map((key) => (
                    <div
                        className="checkbox-wrapper feedback-filters-checkbox"
                        key={`${teachers[key].name}_${teachers[key].id}`}
                    >
                        <input
                            type="checkbox"
                            id={`${teachers[key].name}_${teachers[key].id}`}
                            onChange={() => setFeedbackAuth(teachers[key].id)}
                            checked={
                                teachers[key].id ===
                                filters.auth[teachers[key].id]
                                    ? true
                                    : false
                            }
                            className="checkbox"
                        />
                        <label
                            htmlFor={`${teachers[key].name}_${teachers[key].id}`}
                            className="checkbox-label"
                        >
                            {teachers[key].name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default FeedbackFiltersTeachers;
