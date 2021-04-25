import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageForm = ({size, handleSubmit}) => {
    return (
        <form className={`shop-page-form ${size}`} onSubmit={handleSubmit}>
            <div className="shop-page-form-middle">
                <div className={`shop-page-form-block-wrapper ${size}`}>
                    <div className="input shop-page-form-input-wrapper">
                        <div className="shop-page-form-input">
                            <Field
                                component={RenderInput}
                                type="email"
                                name="email"
                                label="Email"
                                size={size}
                            />
                        </div>
                    </div>
                    <button
                        className={`btn-bold_color shop-page-form__btn ${size}`}
                    >
                        Записаться
                    </button>
                </div>
            </div>
            <div className="checkbox-wrapper shop-page-checkbox">
                <Field
                    component={RenderCheckboxPolycy}
                    type="checkbox"
                    name="confirmation"
                    id={`shop-page__checkbox-${Math.floor(
                        Math.random() * 10000000
                    )}`}
                    size={size}
                />
            </div>
        </form>
    );
};

ShopPageForm = reduxForm({
    form: "shop_page_form",
    validate,
})(ShopPageForm);

export default ShopPageForm;
