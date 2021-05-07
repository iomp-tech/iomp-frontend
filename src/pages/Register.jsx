import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {RegisterForm, PreloaderPage} from ".././components/";
import {sendRegister} from ".././redux/actions/register";

import { INDEX_MAGAZIN_AWO } from "../api";

const Register = () => {
    const dispatch = useDispatch();

    const {message} = useSelector(({register}) => register);
    const {isLoaded, isLogin} = useSelector(({user}) => user);
    const {size} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const redirect = () => {
        window.location.href = `https://${INDEX_MAGAZIN_AWO}.ru/personal/`;
	};
	
    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.registerTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.registerTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.registerBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.registerBottomHtml;
        }
    }, [Object.keys(integration).length]);

    const onSubmit = (formData) => {
        dispatch(sendRegister(formData));
    };

    return (
        <>
            <Helmet>
                <title>Регистрация - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <>
                    {!isLogin ? (
                        <section className="reglog">
                            <div className="container">
                                <div className="reglog-wrapper">
                                    <div
                                        className={`circle-bold ${size} reglog-circle`}
                                    ></div>
                                    <div className="reglog-form">
                                        <h2 className={`reglog__title ${size}`}>
                                            Зарегистрироваться
                                        </h2>

                                        <Link
                                            to="/login"
                                            className={`reglog__link ${size}`}
                                        >
                                            Войти
                                        </Link>

                                        {message && (
                                            <p
                                                className={`reglog-form__error ${size}`}
                                            >
                                                {message}
                                            </p>
                                        )}
                                        <RegisterForm
                                            onSubmit={onSubmit}
                                            size={size}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        redirect()
                    )}
                </>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Register;
