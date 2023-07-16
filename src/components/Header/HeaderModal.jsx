import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

import {fetchFooterMenu} from "../.././redux/actions/footer";

import {DOMEN} from "../../api";

const HeaderModal = React.memo(({isLogin}) => {
    const dispatch = useDispatch();

    const {menu, isLoaded} = useSelector(({footer}) => footer);

    const [visibleHeaderModal, setVisibleHeaderModal] = React.useState(false);
    const HeaderRef = React.useRef();

    const toggleVisibleHeaderModal = () => {
        setVisibleHeaderModal(!visibleHeaderModal);
    };

    if (visibleHeaderModal === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }

    const handHeaderModal = (e) => {
        if (e.target <= HeaderRef.current) {
            setVisibleHeaderModal(false);
        }
    };

    React.useEffect(() => {
        if (!menu.length) {
            dispatch(fetchFooterMenu());
        }

        document.body.addEventListener("click", handHeaderModal);
    }, []);

    return (
        <>
            {isLoaded ? (
                <>
                    <div
                        className={
                            visibleHeaderModal
                                ? "header-modal-wrapper header-modal-wrapper_active"
                                : "header-modal-wrapper"
                        }
                    >
                        <div
                            className={
                                visibleHeaderModal
                                    ? "header-modal-content header-modal-content_active"
                                    : "header-modal-content"
                            }
                            ref={HeaderRef}
                        >
                            <div
                                className="header-modal-close"
                                onClick={toggleVisibleHeaderModal}
                            >
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 39 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="2.70711"
                                        y1="1.29289"
                                        x2="38.0624"
                                        y2="36.6482"
                                        stroke="black"
                                        strokeWidth="2"
                                    />
                                    <line
                                        x1="1.29289"
                                        y1="36.6482"
                                        x2="36.6482"
                                        y2="1.2929"
                                        stroke="black"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>

                            <Link
                                to="/"
                                className="header-modal-logo__link"
                                onClick={toggleVisibleHeaderModal}
                            >
                                <img
                                    src={`${DOMEN}/public/storage/all/logo.svg`}
                                    alt="MasterVision"
                                    className="header-modal-logo__img"
                                />
                            </Link>

                            <nav className="header-modal-nav">
                                <NavLink
                                    onClick={toggleVisibleHeaderModal}
                                    to="/shop"
                                    className="header-modal__link"
                                    activeClassName="header-modal__link_active"
                                >
                                    Магазин курсов
                                </NavLink>
                                <NavLink
                                    onClick={toggleVisibleHeaderModal}
                                    to="/timetables"
                                    className="header-modal__link"
                                    activeClassName="header-modal__link_active"
                                >
                                    Расписание
                                </NavLink>
                                <NavLink
                                    onClick={toggleVisibleHeaderModal}
                                    to="/teachers"
                                    className="header-modal__link"
                                    activeClassName="header-modal__link_active"
                                >
                                    Преподаватели
                                </NavLink>
                                <NavLink
                                    onClick={toggleVisibleHeaderModal}
                                    to="/magazine"
                                    className="header-modal__link"
                                    activeClassName="header-modal__link_active"
                                >
                                    Журнал
                                </NavLink>

                                <NavLink
                                    onClick={toggleVisibleHeaderModal}
                                    to="/feedback"
                                    className="header-modal__link"
                                    activeClassName="header-modal__link_active"
                                >
                                    Отзывы
                                </NavLink>
                                {isLogin ? (
                                    <>
                                        <NavLink
                                            onClick={toggleVisibleHeaderModal}
                                            to="/library"
                                            className="header-modal__link"
                                            activeClassName="header-modal__link_active"
                                        >
                                            Мои курсы
                                        </NavLink>
                                        <NavLink
                                            onClick={toggleVisibleHeaderModal}
                                            to="/cabinet"
                                            className="header-modal__link"
                                            activeClassName="header-modal__link_active"
                                        >
                                            Настройки
                                        </NavLink>
                                        <NavLink
                                            onClick={toggleVisibleHeaderModal}
                                            to="/logout"
                                            className="header-modal__link"
                                            activeClassName="header-modal__link_active"
                                        >
                                            Выйти
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink
                                            onClick={toggleVisibleHeaderModal}
                                            to="/login"
                                            className="header-modal__link"
                                            activeClassName="header-modal__link_active"
                                        >
                                            Войти
                                        </NavLink>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                    <div
                        className="header-menu-burger"
                        onClick={toggleVisibleHeaderModal}
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 512 320"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M501.333 0H10.667C4.779 0 0 4.779 0 10.667C0 16.555 4.779 21.334 10.667 21.334H501.334C507.222 21.334 512.001 16.555 512.001 10.667C512.001 4.779 507.221 0 501.333 0Z" />
                            <path d="M501.333 149.333H10.667C4.779 149.333 0 154.112 0 160C0 165.888 4.779 170.667 10.667 170.667H501.334C507.222 170.667 512.001 165.888 512.001 160C512.001 154.112 507.221 149.333 501.333 149.333Z" />
                            <path d="M501.333 298.667H10.667C4.779 298.667 0 303.445 0 309.333C0 315.221 4.779 320 10.667 320H501.334C507.222 320 512.001 315.221 512.001 309.333C512 303.445 507.221 298.667 501.333 298.667Z" />
                        </svg>
                    </div>
                </>
            ) : null}
        </>
    );
});

export default HeaderModal;
