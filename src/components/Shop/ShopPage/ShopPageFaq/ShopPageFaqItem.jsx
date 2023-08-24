import React from "react";

const ShopPageFaqItem = ({title, description}) => {
    const [state, setState] = React.useState(false);
    const [height, setHeight] = React.useState(0);
    const [isInitHeight, setIsInitHeight] = React.useState(false);

    const contentRef = React.useRef();

    const toggleState = () => {
        setState(!state);
    };

    React.useEffect(() => {
        setHeight(contentRef.current.offsetHeight);
        setIsInitHeight(true);
    }, []);

    return (
        <div className="shop-page-faq-item" onClick={toggleState}>
            <div className="shop-page-faq-item-top">
                <h3 className="shop-page-faq-item-top__title">{title}</h3>

                <div
                    className={`shop-page-faq-item-top-arrow ${
                        state ? "rotate" : ""
                    }`}>
                    <svg
                        viewBox="0 0 40 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <line
                            x1="1.00355"
                            y1="1.99645"
                            x2="21.0746"
                            y2="22.0675"
                            stroke="black"
                            strokeWidth="2.83848"
                        />
                        <line
                            x1="18.8656"
                            y1="22.0672"
                            x2="38.9366"
                            y2="1.99619"
                            stroke="black"
                            strokeWidth="2.83848"
                        />
                    </svg>
                </div>
            </div>

            <div
                className="shop-page-faq-item-bottom"
                ref={contentRef}
                style={
                    isInitHeight
                        ? {
                              height: state ? `${height + 25}px` : 0,
                          }
                        : {}
                }>
                <p
                    className="shop-page-faq-item-bottom__description"
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}></p>
            </div>
        </div>
    );
};

export default ShopPageFaqItem;
