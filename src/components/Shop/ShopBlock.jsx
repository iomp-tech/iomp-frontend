import React from "react";
import NumberFormat from "react-number-format";

import {CART_DOMEN} from "../../api";

const ShopBlock = React.memo(
    ({
        thumb,
        category,
        type,
        title,
        time,
        sale,
        expensive,
        priceOld,
        price,
        expensiveText,
        id,
        id_awo,
        href,
        auth,
        onClickAddGoods,
        onClickPush,
        categories,
        types,
        auths,
        page,
        url,
        isLoadedLimit = true,
        size,
        DOMEN,
    }) => {
        const authArr = [];

        Object.keys(auth).map((key) => {
            if (auths[parseInt(auth[key])]) {
                authArr.push(auths[parseInt(auth[key])].name);
            }
        });

        const setUpdateGoods = () => {
            const obj = {
                id,
            };

            onClickAddGoods(obj);
            onClickPush();
        };

        return (
            <div
                className="shop-block"
                style={{opacity: isLoadedLimit ? "" : "0.3"}}
            >
                <div className={`shop-block-left ${size}`}>
                    <a href={href} className={`shop-block-thumb ${size}`}>
                        <div
                            className="shop-block__img"
                            style={{
                                backgroundImage: `url(${
                                    thumb !== "default"
                                        ? thumb
                                        : `${DOMEN}/public/storage/all/default_avatar.svg`
                                })`,

                                transform: `${
                                    thumb !== "default"
                                        ? "none"
                                        : "rotate(90deg)"
                                }`,
                            }}
                        ></div>
                        {sale ? (
                            <span className="shop-block__sale">-{sale}%</span>
                        ) : null}
                    </a>
                    <div className={`shop-block-text ${size}`}>
                        <div className="shop-block-type-wrapper">
                            {Object.keys(categories).length
                                ? categories[category] && (
                                      <a
                                          href={`/shop/?category=${category}`}
                                          className={`shop-block__type_color ${size}`}
                                      >
                                          {categories[category].title}
                                      </a>
                                  )
                                : null}

                            {Object.keys(types).length ? (
                                types[type] ? (
                                    <span
                                        className={`shop-block__type_gray ${size}`}
                                    >
                                        {types[type].title}
                                    </span>
                                ) : null
                            ) : null}

                            {Object.keys(auths).length
                                ? auth.map((key) =>
                                      auths[key] ? (
                                          <a
                                              href={`/shop/?auth=${key}`}
                                              className={`shop-block__type_gray ${size}`}
                                              key={`${auths[key].name}_${key}`}
                                          >
                                              {auths[key].name}
                                          </a>
                                      ) : null
                                  )
                                : null}
                        </div>
                        <a href={href}>
                            <h3
                                href={href}
                                className={`shop-block__title ${size}`}
                            >
                                {title}
                            </h3>
                        </a>
                        {/* <span className={`shop-block__time ${size}`}>
                            {time}
                        </span> */}
                    </div>
                </div>

                <div className={`shop-block-right ${size}`}>
                    <a href={href} className={`shop-block-price ${size}`}>
                        {expensive ? (
                            <>
                                <span
                                    className={`shop-block__subprice ${size}`}
                                    style={{textDecoration: "none"}}
                                >
                                    Цена:
                                </span>
                                <h3 className={`shop-block__price ${size}`}>
                                    {expensiveText}
                                </h3>
                            </>
                        ) : (
                            <>
                                {sale ? (
                                    <>
                                        <span
                                            className={`shop-block__subprice ${size}`}
                                        >
                                            <NumberFormat
                                                value={priceOld}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
                                            ₽
                                        </span>
                                        <h3
                                            className={`shop-block__price ${size}`}
                                        >
                                            <NumberFormat
                                                value={price}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
                                            ₽
                                        </h3>
                                    </>
                                ) : (
                                    <>
                                        <span
                                            className={`shop-block__subprice ${size}`}
                                            style={{textDecoration: "none"}}
                                        >
                                            Цена:
                                        </span>
                                        <h3
                                            className={`shop-block__price ${size}`}
                                        >
                                            <NumberFormat
                                                value={price}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                            />
                                            ₽
                                        </h3>
                                    </>
                                )}
                            </>
                        )}
                    </a>
                    <a
                        href={href}
                        target="_blank"
                        className={`btn-bold_color shop-block__btn ${size}`}
                    >
                        Подробнее
                    </a>
                    {/* {expensive ? (
                        <a
                            href={href}
                            target="_blank"
                            className={`btn-bold_color shop-block__btn ${size}`}
                        >
                            Подробнее
                        </a>
                    ) : (
                        // <div className="shop-block-btn">
                        //     <button
                        //         className={`btn-bold_color shop-block__btn ${size}`}
                        //         onClick={setUpdateGoods}
                        //     >
                        //         Добавить в корзину
                        //     </button>
                        //     {page ? (
                        //         <Link
                        //             className="shop-block__link"
                        //             to={`/shop/pages/${url}`}
                        //         >
                        //             Подробнее
                        //         </Link>
                        //     ) : null}
                        // </div>
                        <form
                            action={CART_DOMEN}
                            method="post"
                            encType="application/x-www-form-urlencoded"
                            acceptCharset="UTF-8"
                            className="shop-block-btn"
                        >
                            <input
                                type="hidden"
                                value="1"
                                name={`Goods[${id_awo}]`}
                            />

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
                                className={`btn-bold_color shop-block__btn ${size}`}
                            >
                                Оформить заказ
                            </button>
                        </form>
                    )} */}
                </div>
            </div>
        );
    }
);

export default ShopBlock;
