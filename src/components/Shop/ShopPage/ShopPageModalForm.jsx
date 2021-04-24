import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import { RenderCheckboxPolycy, RenderInput } from "../../";

let ShopPageModalForm = ({size, handleSubmit}) => {
    return (
        <form
            className={`shop-page-modal-form ${size}`}
            onSubmit={handleSubmit}
        >
            <div className="shop-page-modal-form-middle">
                <div className={`shop-page-modal-form-block-wrapper ${size}`}>
                    <div className="input shop-page-modal-form-input-wrapper">
                        <div className="shop-page-modal-form-input">
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
                        className={`btn-bold_color shop-page-modal-form__btn ${size}`}
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
                    id="shop-page__checkbox-1"
                    size={size}
                />
            </div>
        </form>
    );
};

ShopPageModalForm = reduxForm({
    form: "shop_page_modal_form",
    validate,
})(ShopPageModalForm);

export default ShopPageModalForm;
