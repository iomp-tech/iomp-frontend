import React from "react";
import {Link} from "react-router-dom";

const FeedbackBlock = ({image, name, course, openFunc, index, size}) => {
    return (
        <div className={`feedback-block ${size}`}>
            <div
                className={`feedback-block-cover ${size}`}
                style={{backgroundImage: `url(${image})`}}
                onClick={() => openFunc(index)}
            ></div>
            <div className="feedback-block-text">
                <h3 className={`feedback-block-text__name ${size}`}>{name}</h3>
                {course ? (
                    <p className="feedback-block-text__course">
                        Отзыв о курсе{" "}
                        <Link to={`/shop/pages/${course.url}`}>
                            {course.title}
                        </Link>
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default FeedbackBlock;
