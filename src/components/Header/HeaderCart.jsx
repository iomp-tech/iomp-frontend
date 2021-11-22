import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderCart = React.memo(({headerMobail}) => {
    const cartItems = useSelector(({cart}) => cart.cart);

    const {push} = useSelector(({cart}) => cart);
    const {color} = useSelector(({visually}) => visually);

    return (
        <>
            <Link
                to="/cart"
                className={
                    push
                        ? `success-add-cart success-add-cart_active`
                        : "success-add-cart"
                }
            >
                <p className="success-add-cart__title">Перейти в корзину</p>
            </Link>
            <Link
                to="/cart"
                className={headerMobail ? "header-cart-mobile" : "header-cart"}
            >
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 39 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill={color}
                        d="M35.7632 22.6641L38.6147 8.75781H10.5132L9.53662 4.13281L1.06787 0L0.333496 1.46094L8.06787 5.19531L11.9741 23.8516H34.5522C34.5522 23.8516 36.7788 25.25 35.9194 27.0156C35.5366 27.5625 34.9429 28.2344 33.8804 28.2344H11.4116V29.8438H33.8882C35.4351 29.8438 36.7397 29.0312 37.4741 27.7344C38.9116 25.0469 35.7632 22.6641 35.7632 22.6641ZM13.3647 22.2188L10.8413 10.375H36.6616L34.2163 22.2188H13.3647Z"
                    />
                    <path
                        fill={color}
                        d="M15.5784 32.9766C13.8674 32.9766 12.4846 34.3516 12.4846 36.0547C12.4846 37.7578 13.8674 39.1328 15.5784 39.1328C17.2893 39.1328 18.6721 37.7578 18.6721 36.0547C18.6721 34.3516 17.2893 32.9766 15.5784 32.9766ZM15.5784 37.5156C14.7659 37.5156 14.1096 36.8672 14.1096 36.0547C14.1096 35.2422 14.7581 34.5937 15.5784 34.5937C16.3987 34.5937 17.0471 35.2422 17.0471 36.0547C17.0471 36.8672 16.3909 37.5156 15.5784 37.5156Z"
                    />
                    <path
                        fill={color}
                        d="M32.1956 32.9766C30.4846 32.9766 29.1018 34.3516 29.1018 36.0547C29.1018 37.7578 30.4846 39.1406 32.1956 39.1406C33.9065 39.1406 35.3753 37.7656 35.2893 36.0625C35.2893 34.3594 33.9065 32.9766 32.1956 32.9766ZM33.6643 36.0625C33.6643 36.875 33.0159 37.5234 32.1956 37.5234C31.3752 37.5234 30.7268 36.875 30.7268 36.0625C30.7268 35.25 31.3752 34.6016 32.1956 34.6016C33.0159 34.6016 33.7424 35.25 33.6643 36.0625Z"
                    />
                </svg>
                <span className="header-cart__number">
                    {Object.keys(cartItems).length}
                </span>
            </Link>
        </>
    );
});

export default HeaderCart;
