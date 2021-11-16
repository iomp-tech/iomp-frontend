import React from "react";

import ShopPageModalForm from "./ShopPageModalForm";

const ShopPageModal = ({
    state,
    ShopPageModalRef,
    close,
    vkUrl,
    telegramUrl,
    id_awo,
    action,
    formId,
    formVc,
}) => {
    return (
        <div
            className={`shop-page-modal-wrapper ${
                state ? "shop-page-modal-wrapper_active" : ""
            }`}
            ref={ShopPageModalRef}
        >
            <div
                className={`shop-page-modal-content ${
                    state ? "shop-page-modal-content_active" : ""
                }`}
            >
                <span className="shop-page-modal-close" onClick={close}>
                    <svg
                        width="30"
                        height="30"
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
                <div className="shop-page-modal-text">
                    <h4 className="shop-page-modal__title">
                        Записаться через:
                    </h4>
                    <div className="shop-page-modal-btn">
                        <ShopPageModalForm
                            id_awo={id_awo}
                            action={action}
                            formId={formId}
                            formVc={formVc}
                        />
                        {telegramUrl ? (
                            <a
                                href={telegramUrl}
                                className="btn-bold_color_icon shop-page-modal__btn"
                                style={{backgroundColor: "#1D95C4"}}
                            >
                                <svg
                                    width="25"
                                    height="20"
                                    viewBox="0 0 25 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.8098 12.6466L9.39625 18.0041C9.98793 18.0041 10.2442 17.77 10.5515 17.4889L13.3255 15.0471L19.0736 18.9242C20.1278 19.4653 20.8705 19.1804 21.1549 18.031L24.9279 1.74751L24.9289 1.74655C25.2633 0.311244 24.3654 -0.250022 23.3382 0.102089L1.16063 7.9224C-0.352948 8.46352 -0.330031 9.24066 0.903332 9.59277L6.57326 11.2171L19.7434 3.62703C20.3632 3.24902 20.9267 3.45817 20.4632 3.83619L9.8098 12.6466Z"
                                        fill="white"
                                    />
                                </svg>
                                Через телеграм
                            </a>
                        ) : null}
                        {vkUrl ? (
                            <a
                                href={vkUrl}
                                className="btn-bold_color_icon shop-page-modal__btn"
                                style={{backgroundColor: "#4D77A1"}}
                            >
                                <svg
                                    width="25"
                                    height="15"
                                    viewBox="0 0 25 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.7448 8.3625C20.3406 7.85208 20.4563 7.625 20.7448 7.16875C20.75 7.16354 24.0865 2.55313 24.4302 0.989583L24.4323 0.988542C24.6031 0.41875 24.4323 0 23.6062 0H20.8729C20.1771 0 19.8562 0.359375 19.6844 0.761458C19.6844 0.761458 18.2927 4.09271 16.324 6.25208C15.6885 6.87604 15.3948 7.07604 15.0479 7.07604C14.8771 7.07604 14.6115 6.87604 14.6115 6.30625V0.988542C14.6115 0.305208 14.4167 0 13.8406 0H9.54271C9.10625 0 8.84687 0.31875 8.84687 0.615625C8.84687 1.26354 9.83125 1.4125 9.93333 3.23542V7.19063C9.93333 8.05729 9.77604 8.21667 9.42708 8.21667C8.49792 8.21667 6.24271 4.87188 4.90625 1.04375C4.63646 0.301042 4.37292 0.00104159 3.67187 0.00104159H0.9375C0.157292 0.00104159 0 0.360417 0 0.7625C0 1.47292 0.929166 5.00521 4.32083 9.67188C6.58125 12.8573 9.76458 14.5833 12.6604 14.5833C14.401 14.5833 14.6135 14.2 14.6135 13.5406C14.6135 10.4969 14.4562 10.2094 15.3281 10.2094C15.7323 10.2094 16.4281 10.4094 18.0531 11.9458C19.9104 13.7677 20.2156 14.5833 21.2552 14.5833H23.9885C24.7677 14.5833 25.1625 14.2 24.9354 13.4438C24.4156 11.8531 20.9031 8.58125 20.7448 8.3625V8.3625Z"
                                        fill="white"
                                    />
                                </svg>
                                Через вконтакте
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPageModal;
