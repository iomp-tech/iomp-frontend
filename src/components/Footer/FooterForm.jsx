import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

let FooterForm = React.memo(({handleSubmit, stateForm}) => {
    return (
        <form className="footer-email-form" onSubmit={handleSubmit}>
            <h4 className="footer-email-form__title">
                Подпишитесь на рассылку IOMP
            </h4>
            {stateForm ? (
                <p className="footer-email-form__title">
                    Спасибо, вы успешно подписаны
                </p>
            ) : (
                <>
                    <div className="footer-email-form-input">
                        <button
                            type="submit"
                            className="footer-email-form__btn"
                        >
                            <svg
                                width="26"
                                height="8"
                                viewBox="0 0 26 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="footer-email-form-input__svg"
                            >
                                <path
                                    d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5L25 4.5V3.5L0 3.5L0 4.5Z"
                                    fill="white"
                                />
                            </svg>
                        </button>

                        <Field
                            type="email"
                            name="email"
                            className="footer-email-form-input__field"
                            placeholder="Email"
                            component="input"
                        />
                    </div>
                    <div className="checkbox-wrapper footer-email-form-checkbox">
                        <Field
                            component="input"
                            name="confirmation"
                            type="checkbox"
                            className="checkbox_white footer-email-form__checkbox"
                            id="footer-email-form__checkbox"
                        />
                        <label
                            className="checkbox-label_white footer-email-form__label"
                            htmlFor="footer-email-form__checkbox"
                        >
                            Я согласен с условиями обработки персональных данных
                        </label>
                    </div>
                </>
            )}
        </form>
    );
});

FooterForm = reduxForm({
    form: "emailFormSmall",
    validate,
})(FooterForm);

export default FooterForm;
