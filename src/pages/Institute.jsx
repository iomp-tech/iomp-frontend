import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Lightbox} from "react-modal-image";

import {InstituteItem, PreloaderPage} from ".././components";

import {fetchInstitute} from ".././redux/actions/institute";

const Institute = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({institute}) => institute);
    const {size} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    const [itemContent, setItemContent] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const refDoc = React.useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchInstitute());
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.instituteTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.instituteTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.instituteBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.instituteBottomHtml;
        }
    }, [Object.keys(integration).length]);

    const toggleItemContent = (content) => {
        setItemContent(content);
    };

    const toggleOpen = () => {
        setOpen(!open);
    };

    const toScrollDoc = () => {
        refDoc.current.scrollIntoView();
    };

    return (
        <>
            <Helmet>
                <title>Сведения об образовательной организации - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <section className="institute">
                    <div className="container">
                        <div className="institute-wrapper">
                            <h2 className={`title ${size} institute__title`}>
                                Сведения об образовательной организации
                            </h2>

                            <div className={`institute-content ${size}`}>
                                <div className="institute-text">
                                    {items.map((arr, index) => (
                                        <InstituteItem
                                            toggleItemContent={
                                                toggleItemContent
                                            }
                                            size={size}
                                            toScrollDoc={toScrollDoc}
                                            key={`institute-items-${index}`}
                                            {...arr}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="institute-doc"
                                    onClick={toggleOpen}
                                    ref={refDoc}
                                >
                                    {itemContent.file ? (
                                        <>
                                            {itemContent.file.indexOf(
                                                ".jpg"
                                            ) !== -1 ||
                                            itemContent.file.indexOf(
                                                ".jpeg"
                                            ) !== -1 ||
                                            itemContent.file.indexOf(".png") !==
                                                -1 ? (
                                                <>
                                                    <div
                                                        className="institute-doc-img"
                                                        style={{
                                                            backgroundImage: `url(${itemContent.file})`,
                                                        }}
                                                    ></div>

                                                    {open && (
                                                        <Lightbox
                                                            medium={
                                                                itemContent.file
                                                            }
                                                            large={
                                                                itemContent.file
                                                            }
                                                            onClose={toggleOpen}
                                                            hideDownload={true}
                                                        />
                                                    )}
                                                </>
                                            ) : (
                                                <iframe
                                                    className="institute-iframe"
                                                    src={itemContent.file}
                                                    frameBorder="0"
                                                >
                                                    Ваш браузер не поддерживает
                                                    фреймы
                                                </iframe>
                                            )}
                                        </>
                                    ) : (
                                        <p
                                            className="institute-iframe-text"
                                            dangerouslySetInnerHTML={{
                                                __html: itemContent.text,
                                            }}
                                        ></p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Institute;
