import React from "react";
import {Field, reduxForm} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import { RenderInput } from "../../../";

import validate from "./validate";

const ShopPageFixedFormForm = ({handleSubmit, btnText}) => {
    return (
        <form className="shop-page-form" onSubmit={handleSubmit}>
            <div className="shop-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваше имя"}
                    type="text"
                    name="name"
                />
            </div>

            <div className="shop-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваша почта"}
                    type="text"
                    name="email"
                />
            </div>

            <div className="shop-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваш телефон"}
                    type="text"
                    name="phone"
                    {...createTextMask({
                        pattern: "+7 999 999 99-99",
                        guide: false,
                        stripMask: false,
                    })}
                />
            </div>

            <button className="btn-bold_color shop-page-form__link">
                {btnText}
            </button>
        </form>
    );
};

export default reduxForm({
    form: "shop-page-fixed-form",
    validate,
})(ShopPageFixedFormForm);
