import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchTeacher} from ".././redux/actions/teacher";

import {
    TeacherBlock,
    TeacherModal,
    TeacherBlockLoading,
    ShopSection,
    MagazineSection,
    EmailFormWrapper,
} from ".././components/";

const Teacher = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({teacher}) => teacher);
    const {size, rgb, bgColor} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    const [TeacherModalBool, setTeacherModalBool] = React.useState(false);
    const [activeTeacherItems, setActiveTeacherItems] = React.useState();

    const TeacherModalRef = React.useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(items).length) {
            dispatch(fetchTeacher());
        }

        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.teachersTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.teachersTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.teachersBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.teachersBottomHtml;
        }
    }, [Object.keys(integration).length]);

    const toggleTeacherModal = (index) => {
        setTeacherModalBool(!TeacherModalBool);
        setActiveTeacherItems(index);
    };

    if (TeacherModalBool === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }

    const handTeacherModalBool = (e) => {
        if (e.target === TeacherModalRef.current) {
            setTeacherModalBool(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Преподаватели - IOMP</title>
            </Helmet>
            <section className="teacher">
                <div className="container">
                    <div className="teacher-wrapper">
                        <h2 className={`title ${size} teacher__title`}>
                            Наши преподаватели
                        </h2>

                        <TeacherModal
                            rgb={rgb}
                            bgColor={bgColor}
                            state={TeacherModalBool}
                            onClick={toggleTeacherModal}
                            modalRef={TeacherModalRef}
                            {...items[activeTeacherItems]}
                        />

                        <div className="teacher-block-wrapper">
                            {isLoaded
                                ? Object.keys(items).map((key) => (
                                      <TeacherBlock
                                          key={`teacher-block-${items[key].id}`}
                                          size={size}
                                          onClick={() =>
                                              toggleTeacherModal(items[key].id)
                                          }
                                          {...items[key]}
                                      />
                                  ))
                                : Array(4)
                                      .fill(0)
                                      .map((_, index) => (
                                          <div
                                              className="teacher-block"
                                              key={index}
                                          >
                                              <TeacherBlockLoading />
                                          </div>
                                      ))}
                        </div>
                    </div>
                </div>
            </section>

            <ShopSection style={{marginBottom: "50px"}} />
            <MagazineSection />
            <EmailFormWrapper />
        </>
    );
};

export default Teacher;
