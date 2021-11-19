import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import {useDispatch, useSelector} from "react-redux";

import {LoginForm, PreloaderPage} from ".././components/";
import {sendLogin} from ".././redux/actions/login";

const Login = () => {
    const dispatch = useDispatch();

    const {message} = useSelector(({login}) => login);
    const {isLogin, isLoaded} = useSelector(({user}) => user);
    const {size} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.loginTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.loginTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.loginBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.loginBottomHtml;
        }
    }, [Object.keys(integration).length]);

    const onSubmit = (formData) => {
        dispatch(sendLogin(formData));
    };

    const redirect = () => {
        window.location.href = localStorage.getItem("link-personal-auth");
    };

    return (
        <>
            <Helmet>
                <title>Войти - IOMP</title>
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
                                            Войти
                                        </h2>

                                        {message && (
                                            <p
                                                className={`reglog-form__error ${size}`}
                                            >
                                                {message}
                                            </p>
                                        )}

                                        <LoginForm onSubmit={onSubmit} />

                                        <Link
                                            to="/restoreemail"
                                            className={`reglog__link_gray ${size}`}
                                        >
                                            Забыли пароль?
                                        </Link>
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

export default Login;
