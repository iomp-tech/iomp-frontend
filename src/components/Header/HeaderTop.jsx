import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import HeaderTopVisually from "./HeaderTopVisually";

const HeaderTop = () => {
    const [stateVisually, setStateVisually] = React.useState(false);
    const refVisually = React.useRef();

    const {color} = useSelector(({visually}) => visually);

    const handVisually = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(refVisually.current)) {
            setStateVisually(false);
        }
    };

    const toggleVisually = () => {
        setStateVisually(!stateVisually);
    };

    React.useEffect(() => {
        document.body.addEventListener("click", handVisually);
    }, []);

    return (
        <>
            <div className="header-wrapper-top">
                <div
                    className="header-wrapper-top-button"
                    onClick={toggleVisually}
                >
                    <svg
                        width="22"
                        height="16"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.99997 4.09082C8.49542 4.09082 7.27271 5.31353 7.27271 6.81809C7.27271 8.32265 8.49542 9.54536 9.99997 9.54536C11.5046 9.54536 12.7273 8.32265 12.7273 6.81809C12.7273 5.31353 11.5045 4.09082 9.99997 4.09082Z"
                            fill="#3A38DC"
                        />
                        <path
                            d="M10 0C5.45454 0 1.57274 2.82724 0 6.81817C1.57274 10.8091 5.45454 13.6363 10 13.6363C14.55 13.6363 18.4273 10.8091 20 6.81817C18.4273 2.82724 14.55 0 10 0ZM10 11.3636C7.49091 11.3636 5.45454 9.32722 5.45454 6.81813C5.45454 4.30904 7.49091 2.27271 10 2.27271C12.5091 2.27271 14.5455 4.30908 14.5455 6.81817C14.5455 9.32726 12.5091 11.3636 10 11.3636Z"
                            fill="#3A38DC"
                        />
                    </svg>
                    <span className="header-wrapper-top-button__title">
                        Версия для слабовидящих
                    </span>
                </div>
                <div className="header-wrapper-top-nav">
                    <NavLink
                        style={{color: color}}
                        to="/institute"
                        className="header__link"
                        activeClassName="header__link_active"
                    >
                        Сведения об образовательной организации
                    </NavLink>

                    <NavLink
                        style={{color: color}}
                        to="/feedback"
                        className="header__link"
                        activeClassName="header__link_active"
                    >
                        Отзывы
                    </NavLink>
                </div>
            </div>

            <HeaderTopVisually
                stateVisually={stateVisually}
                refVisually={refVisually}
            />
        </>
    );
};

export default HeaderTop;
