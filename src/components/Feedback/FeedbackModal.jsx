import React from "react";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";

const FeedbackModal = ({name, course, description, videoUrl, closeFunc}) => {
    const [stateModalAnimation, setStateModalAnimation] = React.useState(false);

    const ModalRef = React.useRef();

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const handlerModal = (e) => {
        if (e.target <= ModalRef.current) {
            onClickClose();
        }
    };

    const onClickClose = () => {
        setStateModalAnimation(true);

        setTimeout(() => {
            document.body.style.overflow = "visible";
            setStateModalAnimation(false);

            closeFunc();
        }, 190);
    };

    return (
        <div
            className={`feedback-modal ${stateModalAnimation ? "close" : ""}`}
            ref={ModalRef}
            onClick={(e) => handlerModal(e)}
        >
            <div
                className={`feedback-modal-content ${
                    stateModalAnimation ? "close" : ""
                }`}
            >
                <div className="feedback-modal-content-text">
                    <h3 className="feedback-modal-content-text__name">
                        {name}
                    </h3>
                    {course ? (
                        <p className="feedback-modal-content-text__course">
                            Отзыв о курсе{" "}
                            <Link to={`/shop/pages/${course.url}`}>
                                {course.title}
                            </Link>
                        </p>
                    ) : null}
                    <p className="feedback-modal-content-text__description">
                        {description}
                    </p>
                </div>
                <div className="feedback-modal-content-video">
                    <div className="feedback-modal-content-video-wrapper">
                        <ReactPlayer
                            url={videoUrl}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>

            <span className="feedback-modal-close" onClick={onClickClose}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 39 38"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="2.70711"
                        y1="1.29289"
                        x2="38.0624"
                        y2="36.6482"
                        strokeWidth="2"
                    />
                    <line
                        x1="1.29289"
                        y1="36.6482"
                        x2="36.6482"
                        y2="1.2929"
                        strokeWidth="2"
                    />
                </svg>
            </span>
        </div>
    );
};

export default FeedbackModal;
