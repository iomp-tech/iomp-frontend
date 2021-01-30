import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {BtnLoaded, RenderInput} from ".././";

let TimetableSubsForm = ({
    handleSubmit,
    vk,
    vkUrl,
    telegram,
	telegramUrl,
	size
}) => {
    return (
        <form className={`timetable-page-form ${size}`} onSubmit={handleSubmit}>
            <h3 className={`timetable-page-form__title ${size}`}>Записаться</h3>
            <div className="timetable-page-form-link">
                {vk ? (
                    <a
                        href={vkUrl}
                        target="_blank"
                        className="timetable-page-form__link"
                    >
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="25" cy="25" r="24.5" stroke="#3A38DC" />
                            <path
                                d="M33.7448 26.3625C33.3406 25.8521 33.4562 25.625 33.7448 25.1688C33.75 25.1635 37.0865 20.5531 37.4302 18.9896L37.4323 18.9885C37.6031 18.4187 37.4323 18 36.6062 18H33.8729C33.1771 18 32.8562 18.3594 32.6844 18.7615C32.6844 18.7615 31.2927 22.0927 29.324 24.2521C28.6885 24.876 28.3948 25.076 28.0479 25.076C27.8771 25.076 27.6115 24.876 27.6115 24.3063V18.9885C27.6115 18.3052 27.4167 18 26.8406 18H22.5427C22.1062 18 21.8469 18.3188 21.8469 18.6156C21.8469 19.2635 22.8313 19.4125 22.9333 21.2354V25.1906C22.9333 26.0573 22.776 26.2167 22.4271 26.2167C21.4979 26.2167 19.2427 22.8719 17.9062 19.0438C17.6365 18.301 17.3729 18.001 16.6719 18.001H13.9375C13.1573 18.001 13 18.3604 13 18.7625C13 19.4729 13.9292 23.0052 17.3208 27.6719C19.5812 30.8573 22.7646 32.5833 25.6604 32.5833C27.401 32.5833 27.6135 32.2 27.6135 31.5406C27.6135 28.4969 27.4562 28.2094 28.3281 28.2094C28.7323 28.2094 29.4281 28.4094 31.0531 29.9458C32.9104 31.7677 33.2156 32.5833 34.2552 32.5833H36.9885C37.7677 32.5833 38.1625 32.2 37.9354 31.4438C37.4156 29.8531 33.9031 26.5813 33.7448 26.3625Z"
                                fill="#3A38DC"
                            />
                        </svg>
                    </a>
                ) : (
                    <></>
                )}
                {telegram ? (
                    <a
                        href={telegramUrl}
                        target="_blank"
                        className="timetable-page-form__link"
                    >
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="25" cy="25" r="24.5" stroke="#3A38DC" />
                            <path
                                d="M21.8098 27.6466L21.3962 33.0041C21.9879 33.0041 22.2442 32.77 22.5515 32.4889L25.3255 30.0471L31.0736 33.9242C32.1278 34.4653 32.8705 34.1804 33.1549 33.031L36.9279 16.7475L36.9289 16.7466C37.2633 15.3112 36.3654 14.75 35.3382 15.1021L13.1606 22.9224C11.6471 23.4635 11.67 24.2407 12.9033 24.5928L18.5733 26.2171L31.7434 18.627C32.3632 18.249 32.9267 18.4582 32.4632 18.8362L21.8098 27.6466Z"
                                fill="#3A38DC"
                            />
                        </svg>
                    </a>
                ) : (
                    <></>
                )}
            </div>
            <div className="input timetable-page-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                    size={size}
                />
            </div>
            <button
                className={`btn-bold_color timetable-page-form__btn ${size}`}
            >
                Записаться
            </button>
            <div className="checkbox-wrapper timetable-page-checkbox">
                <input
                    type="checkbox"
                    className={`checkbox ${size} timetable-page__checkbox`}
                    defaultChecked={true}
                    id="timetable-page__checkbox-1"
                />
                <label
                    className={`checkbox-label ${size} timetable-page__label`}
                    htmlFor="timetable-page__checkbox-1"
                >
                    Я согласен с условиями обработки персональных данных
                </label>
            </div>
        </form>
    );
};

TimetableSubsForm = reduxForm({
    form: "timetableForm",
    validate,
})(TimetableSubsForm);

export default TimetableSubsForm;
