import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchTeacherMain} from "../.././redux/actions/teacher";

import TeacherBlock from "./TeacherBlock";
import TeacherModal from "./TeacherModal";
import TeacherBlockLoading from "./TeacherBlockLoading";

const TeacherSection = () => {
    const dispatch = useDispatch();

    const {itemsMain, isLoaded} = useSelector(({teacher}) => teacher);
    const {size, rgb, bgColor} = useSelector(({visually}) => visually);

    const [TeacherModalBool, setTeacherModalBool] = React.useState(false);
    const [activeTeacherItems, setActiveTeacherItems] = React.useState();

    const TeacherModalRef = React.useRef();

    React.useEffect(() => {
        dispatch(fetchTeacherMain(4));
        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

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
            {Object.keys(itemsMain).length ? (
                <section className="teacher" style={{marginBottom: "50px"}}>
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
                                {...itemsMain[activeTeacherItems]}
                            />

                            <div className="teacher-block-wrapper">
                                {isLoaded
                                    ? Object.keys(itemsMain).map((key) => (
                                          <TeacherBlock
                                              key={`teacher-block-${itemsMain[key].id}`}
                                              size={size}
                                              onClick={() =>
                                                  toggleTeacherModal(
                                                      itemsMain[key].id
                                                  )
                                              }
                                              {...itemsMain[key]}
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

                            <div className="teacher-btn-wrapper">
                                <Link
                                    to="/teachers"
                                    className={`btn-bold_gray teacher__btn ${size}`}
                                >
                                    Показать еще
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default TeacherSection;
