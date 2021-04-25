import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchCategories} from "../../../redux/actions/categories";
import {fetchAllGoods, fetchGoodsType} from "../../../redux/actions/goods";
import {addGoodsCart, statusGoodsPush} from "../../../redux/actions/cart";
import {fetchTeacher} from "../../../redux/actions/teacher";

import ShopBlock from "../ShopBlock";
import ShopBlockLoading from "../ShopBlockLoading";

const ShopPageGoods = ({title, goods, size}) => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);
    const {isLoaded, types, itemsAll} = useSelector(({goods}) => goods);
    const teachers = useSelector(({teacher}) => teacher.items);

    const {push} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(types).length) {
            dispatch(fetchGoodsType());
        }

        if (!Object.keys(itemsAll).length) {
            dispatch(fetchAllGoods());
        }
    }, []);

    const toggleSuccessAddCart = React.useCallback(() => {
        dispatch(statusGoodsPush(!push));
    }, [dispatch]);

    const setAddGoods = React.useCallback(
        (item) => {
            dispatch(addGoodsCart(item));
        },
        [dispatch]
    );

    return (
        <>
            {Object.keys(itemsAll).length ? (
                <section className="shop" style={{marginBottom: "50px"}}>
                    <div className="container">
                        <div className="shop-wrapper">
                            <h2 className={`title ${size} shop__title`}>
                                {title}
                            </h2>

                            <div className="shop-block-wrapper">
                                {isLoaded
                                    ? goods.map(
                                          (key) =>
                                              itemsAll[key] && (
                                                  <ShopBlock
                                                      key={`shop-page-block-${itemsAll[key].id}`}
                                                      onClickAddGoods={
                                                          setAddGoods
                                                      }
                                                      onClickPush={
                                                          toggleSuccessAddCart
                                                      }
                                                      types={types}
                                                      size={size}
                                                      categories={categories}
                                                      auths={teachers}
                                                      idAwo={
                                                          itemsAll[key].id_awo
                                                      }
                                                      {...itemsAll[key]}
                                                  />
                                              )
                                      )
                                    : Array(3)
                                          .fill(0)
                                          .map((_, index) => (
                                              <div
                                                  className="shop-block"
                                                  key={index}
                                              >
                                                  <ShopBlockLoading />
                                              </div>
                                          ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default ShopPageGoods;
