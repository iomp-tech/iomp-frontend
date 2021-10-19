import React from "react";
import {useSelector} from "react-redux";

import {FeedbackFiltersGoods, FeedbackFiltersTeachers} from "../../";

const FeedbackFilters = () => {
    return (
        <div className="feedback-filters">
            <FeedbackFiltersGoods />

            <FeedbackFiltersTeachers />
        </div>
    );
};

export default FeedbackFilters;
