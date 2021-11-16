import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import { FooterRenderInputButton, FooterRenderCheckbox, RenderInput } from "../";

let FooterForm = React.memo(
    ({
        size,
        id_awo,
        action,
        formId,
        formVc,
        invalid,
        submitting,
        pristine,
        initialize,
    }) => {
        React.useEffect(() => {
            initialize({
                required_fields: {email: 1},
                Contact: {
                    id_newsletter: id_awo,
                    id_advertising_channel_page: 0,
                },
                formId,
                formVc,
                _aid: "",
                _vcaid: "",
            });
        }, []);
		
        return (
            <form
                action={action}
                className={`footer-email-form`}
                encType="application/x-www-form-urlencoded"
                acceptCharset="UTF-8"
                method="POST"
            >
                <h4 className={`footer-email-form__title ${size}`}>
                    Подпишитесь на рассылку Института
                </h4>
                <>
                    <div className="footer-email-form-input">
                        <Field
                            component={RenderInput}
                            type="hidden"
                            name="required_fields[email]"
                        />
                        <Field
                            component={FooterRenderInputButton}
                            invalid={invalid}
                            submitting={submitting}
                            pristine={pristine}
                            type="email"
                            name="Contact[email]"
                            label="Email"
                            size={size}
                        />
                        <div style={{display: "none"}}>
                            <div
                                id="formTypeSpecificVars-1"
                                style={{display: "none"}}
                            >
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="Contact[id_newsletter]"
                                />
                            </div>
                            <Field
                                component={RenderInput}
                                type="hidden"
                                name="Contact[id_advertising_channel_page]"
                            />
                            <Field
                                component={RenderInput}
                                type="hidden"
                                name="formId"
                            />
                            <Field
                                component={RenderInput}
                                type="hidden"
                                name="formVc"
                            />
                            <Field
                                component={RenderInput}
                                type="hidden"
                                name="_aid"
                            />
                            <Field
                                component={RenderInput}
                                type="hidden"
                                name="_vcaid"
                            />
                        </div>
                    </div>

                    <div className="checkbox-wrapper footer-email-form-checkbox">
                        <Field
                            component={FooterRenderCheckbox}
                            size={size}
                            type="checkbox"
                            name="confirmation"
                            id="footer-email-form__checkbox"
                        />
                    </div>
                </>
            </form>
        );
    }
);

FooterForm = reduxForm({
    form: "footer_form",
    validate,
})(FooterForm);

export default FooterForm;
