import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {validateInfo as validate} from "./validateInfo";

import CabinetInputRender from "./CabinetInputRender";
import CabinetSelectRender from "./CabinetSelectRender";

let CabinetEditInfoForm = React.memo(
    ({
        handleSubmit,
        initialize,
        first_name,
        middle_name,
        last_name,
        // date_of_birth,
        // sex,
        // timezone,
        // phone,
        // skype,
        // vk,
        // facebook,
        invalid,
        submitting,
        pristine,
        size,
    }) => {
        const selector = formValueSelector("cabinetEditInfoForm");

        const {
            firstNameValue,
            middleNameValue,
            lastNameValue,
            // dateOfBirth,
            // sexValue,
            // timezoneValue,
            // phoneValue,
            // skypeValue,
            // vkValue,
            // facebookValue,
        } = useSelector((state) => {
            const {
                first_name,
                middle_name,
                last_name,
                // date_of_birth,
                // sex,
                // timezone,
                // phone,
                // skype,
                // vk,
                // facebook,
            } = selector(
                state,
                "first_name",
                "middle_name",
                "last_name"
                // "date_of_birth",
                // "sex",
                // "timezone",
                // "phone",
                // "skype",
                // "vk",
                // "facebook"
            );
            return {
                firstNameValue: first_name,
                middleNameValue: middle_name,
                lastNameValue: last_name,
                // dateOfBirth: date_of_birth,
                // sexValue: sex,
                // timezoneValue: timezone,
                // phoneValue: phone,
                // skypeValue: skype,
                // vkValue: vk,
                // facebookValue: facebook,
            };
        });

        React.useEffect(() => {
            initialize({
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                // date_of_birth: date_of_birth,
                // sex: sex,
                // timezone: timezone,
                // phone: phone,
                // skype: skype,
                // vk: vk,
                // facebook: facebook,
            });
        }, [
            first_name,
            middle_name,
            last_name,
            // date_of_birth,
            // sex,
            // timezone,
            // phone,
            // skype,
            // vk,
            // facebook,
        ]);

        const timezoneList = [
            "UTC+2 - Калининградская область",
            "UTC+3 - Москва",
            "UTC+4 - Удмуртская Республика",
            "UTC+4 - Астраханская область",
            "UTC+4 - Самарская область",
            "UTC+4 - Саратовская область",
            "UTC+4 - Ульяновская область",
            "UTC+5 - Республика Башкортостан",
            "UTC+5 - Пермский край",
            "UTC+5 - Курганская область",
            "UTC+5 - Оренбургская область",
            "UTC+5 - Свердловская область",
            "UTC+5 - Тюменская область",
            "UTC+5 - Челябинская область",
            "UTC+5 - Ханты-Мансийский автономный округ",
            "UTC+5 - Югра",
            "UTC+5 - Ямало-Ненецкий автономный округ",
            "UTC+6 - Омская область",
            "UTC+7 - Республика Алтай",
            "UTC+7 - Республика Тыва",
            "UTC+7 - Республика Хакасия",
            "UTC+7 - Алтайский край",
            "UTC+7 - Красноярский край",
            "UTC+7 - Кемеровская область",
            "UTC+7 - Новосибирская область",
            "UTC+7 - Томская область",
            "UTC+8 - Республика Бурятия",
            "UTC+8 - Иркутская область",
            "UTC+9 - Республика Саха (Якутия) (западные и центральные районы)",
            "UTC+9 - Забайкальский край",
            "UTC+9 - Амурская область",
            "UTC+10 - Республика Саха (Якутия) (ряд районов)",
            "UTC+10 - Приморский край",
            "UTC+10 - Хабаровский край",
            "UTC+10 - Еврейская автономная область",
            "UTC+11 - Республика Саха (Якутия) (северо-восточные районы)",
            "UTC+11 - Магаданская область",
            "UTC+11 - Сахалинская область",
            "UTC+12 - Камчатский край",
            "UTC+12 - Чукотский автономный округ",
        ];

        const phoneMask = createTextMask({
            pattern: "+7 (999) 999 99-99",
        });

        return (
            <form onSubmit={handleSubmit} className="cabinet-block">
                <h3 className={`cabinet-block__title ${size}`}>
                    Редактировать данные
                </h3>
                <div className={`cabinet-block-setting ${size}`}>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="middle_name"
                            label="Фамилия"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="first_name"
                            label="Имя"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="name"
                            name="last_name"
                            label="Отчество"
                            size={size}
                        />
                    </div>
                    {/* <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="date"
                            name="date_of_birth"
                            label="Дата рождения"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-radio">
                        <Field
                            component={CabinetSelectRender}
                            name="sex"
                            choise={["Не указано", "Мужской", "Женский"]}
                            label="Пол"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-select">
                        <Field
                            component={CabinetSelectRender}
                            name="timezone"
                            choise={timezoneList}
                            label="Часовой пояс"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="phone"
                            name="phone"
                            label="+7 (999) 999 99-99"
                            size={size}
                            {...phoneMask}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="skype"
                            name="skype"
                            label="Skype"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="vk"
                            name="vk"
                            label="Вконтакте"
                            size={size}
                        />
                    </div>
                    <div className="cabinet-input">
                        <Field
                            component={CabinetInputRender}
                            type="facebook"
                            name="facebook"
                            label="Facebook"
                            size={size}
                        />
                    </div> */}
                </div>
                {/* ||
                            dateOfBirth !== date_of_birth ||
                            sexValue !== sex ||
                            timezoneValue !== timezone ||
                            phoneValue !== phone ||
                            skypeValue !== skype ||
                            vkValue !== vk ||
                            facebookValue !== facebook */}
                <button
                    type="submit"
                    className={`btn-bold_color cabinet-block__btn ${size} ${
                        (firstNameValue !== first_name ||
                            middleNameValue !== middle_name ||
                            lastNameValue !== last_name) &&
                        !invalid
                            ? ""
                            : "btn-bold_color_disabled"
                    }`}
                    disabled={invalid || submitting || pristine}
                >
                    Обновить
                </button>
            </form>
        );
    }
);

CabinetEditInfoForm = reduxForm({
    form: "cabinetEditInfoForm",
    validate,
})(CabinetEditInfoForm);

export default CabinetEditInfoForm;
