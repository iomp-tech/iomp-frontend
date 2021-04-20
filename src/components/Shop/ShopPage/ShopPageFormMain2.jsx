import React from "react";

import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageFormMain2 = (props, { size, handleSubmit }) => {
	console.log(props);
    return (
        <form
            className={`shop-page-main2-form ${size}`}
            onSubmit={handleSubmit}
		>
            <div className="shop-page-main2-form-middle">
                <div className={`shop-page-main2-form-block-wrapper ${size}`}>
                    <div className="input shop-page-main2-form-input-wrapper">
                        <div className="shop-page-main2-form-input">
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
                        className={`btn-bold_color shop-page-main2-form__btn ${size}`}
                    >
                        Записаться
                    </button>
                </div>
            </div>
            <div className="checkbox-wrapper shop-page-main2-checkbox">
                <Field
                    component={RenderCheckboxPolycy}
                    type="checkbox"
                    name="confirmation"
                    id="shop-page-main2__checkbox-1"
                    size={size}
                />
            </div>
        </form>
    );
};

ShopPageFormMain2 = reduxForm({
    form: "shop_page_main2",
    validate,
})(ShopPageFormMain2);


export default ShopPageFormMain2;
