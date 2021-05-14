import React from "react";

import {Link} from 'react-router-dom';

const RenderCheckboxPolycy = ({
    size,
    input,
    type,
    id,
    meta: {touched, error},
}) => {
    return (
        <>
            <input
                {...input}
                type={type}
                className={`${size} shop-page-main2__checkbox ${
                    touched && error ? "checkbox_error" : "checkbox"
                }`}
                id={id}
            />
            <label
                className={`${size} shop-page-main2__label ${
                    touched && error ? "checkbox-label_error" : "checkbox-label"
                }`}
                htmlFor={id}
            >
                <span>
                    Я согласен с условиями обработки&nbsp;
                    <Link
                        to="/privacy"
                        className={`checkbox-label__link ${
                            touched && error ? "checkbox-label__link_error" : ""
                        }`}
                    >
                        персональных данных
                    </Link>
                </span>
            </label>
        </>
    );
};

export default RenderCheckboxPolycy;
