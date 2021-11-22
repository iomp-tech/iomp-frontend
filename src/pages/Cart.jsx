import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import NumberFormat from "react-number-format";

import {
    ShopSection,
    MagazineSection,
    EmailFormWrapper,
    CartBlock,
    PreloaderPage,
} from ".././components/";

import {
    removeCartItem,
    fetchCartGoods,
    statusGoodsPush,
} from "../redux/actions/cart";

import {fetchCategories} from ".././redux/actions/categories";
import {fetchGoodsType} from ".././redux/actions/goods";
import {fetchTeacher} from ".././redux/actions/teacher";

import {CART_DOMEN, API_DOMEN} from ".././api";

const Cart = () => {
    const dispatch = useDispatch();

    const cartItemsId = useSelector(({cart}) => cart.cart);
    const {push, items, isLoaded} = useSelector(({cart}) => cart);
    const {size, color, type} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    const categories = useSelector(({categories}) => categories.items);
    const {types} = useSelector(({goods}) => goods);
    const teachers = useSelector(({teacher}) => teacher.items);

    let totalPrice = 0;

    React.useEffect(() => {
		window.scrollTo(0, 0);
		
		if (push) {
            dispatch(statusGoodsPush(false));
        }

        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(types).length) {
            dispatch(fetchGoodsType());
        }
    }, []);

    React.useEffect(() => {
        dispatch(
            fetchCartGoods(`id=${Object.keys(cartItemsId).map((key) => key)}`)
        );
    }, [Object.keys(cartItemsId).length]);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.cartTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.cartTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.cartBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.cartBottomHtml;
        }
    }, [Object.keys(integration).length]);

    const clickRemoveCartItem = React.useCallback(
        (id) => {
            dispatch(removeCartItem(id));
        },
        [dispatch]
    );

    return (
        <>
            <Helmet>
                <title>Корзина - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <section className="cart">
                    <div className="container">
                        <div className="cart-wrapper">
                            {Object.keys(cartItemsId).length ? (
                                <>
                                    <div className="cart-block-top">
                                        <h2
                                            className={`title ${size} cart__title`}
                                        >
                                            Корзина
                                        </h2>
                                        <span
                                            className={`cart__number ${size}`}
                                        >
                                            {Object.keys(cartItemsId).length}
                                        </span>
                                    </div>

                                    <div className="cart-block-wrapper">
                                        {Object.keys(items).map((key) => (
                                            <CartBlock
                                                size={size}
                                                teachers={teachers}
                                                categories={categories}
                                                types={types}
                                                color={color}
                                                RemoveCartItem={
                                                    clickRemoveCartItem
                                                }
                                                API_DOMEN={API_DOMEN}
                                                {...items[key]}
                                                key={`cart-${items[key].id}`}
                                            />
                                        ))}
                                    </div>
                                    <form
                                        action={CART_DOMEN}
                                        method="post"
                                        encType="application/x-www-form-urlencoded"
                                        acceptCharset="UTF-8"
                                    >
                                        <div className="cart-block-bottom">
                                            <h3
                                                className={`cart__total ${size}`}
                                            >
                                                <span>Итого:</span>{" "}
                                                {Object.keys(items).map(
                                                    (key) => {
                                                        totalPrice +=
                                                            items[key].price;
                                                    }
                                                )}
                                                {
                                                    <NumberFormat
                                                        value={totalPrice}
                                                        displayType={"text"}
                                                        thousandSeparator={" "}
                                                    />
                                                }
                                                ₽
                                            </h3>

                                            {Object.keys(items).length
                                                ? Object.keys(items).map(
                                                      (key) => (
                                                          <input
                                                              type="hidden"
                                                              value="1"
                                                              name={`Goods[${items[key].id_awo}]`}
                                                              key={`${items[key].id_awo}_${items[key].title}`}
                                                          />
                                                      )
                                                  )
                                                : null}

                                            <input
                                                name="CartAccount[name]"
                                                type="hidden"
                                                value=""
                                            />
                                            <input
                                                name="CartAccount[email]"
                                                type="hidden"
                                                value=""
                                            />

                                            <button
                                                type="submit"
                                                className={`btn-bold_color cart__btn ${size}`}
                                            >
                                                Оформить заказ
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <div className="cart-null">
                                        {type === "blackWhite" ||
                                        type === "null" ||
                                        type === null ? (
                                            <div
                                                className={`circle-bold cart-null-bg ${size}`}
                                            ></div>
                                        ) : null}

                                        <h2
                                            className={`cart-null__title ${size}`}
                                        >
                                            Ваша корзина пуста
                                        </h2>

                                        <Link
                                            to="/shop"
                                            className={`btn-bold_color cart-null__btn ${size}`}
                                        >
                                            Перейти в магазин курсов
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <PreloaderPage />
            )}

            <ShopSection />
            <MagazineSection />
            <EmailFormWrapper />
        </>
    );
};

export default Cart;
