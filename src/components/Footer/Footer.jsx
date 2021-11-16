import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import FooterForm from "./FooterForm";
import FooterMenu from "./FooterMenu";

import {
    fetchFooterMenu,
    fetchFooterContact,
    fetchFooterSocial,
    fetchFooterLegal,
} from "../.././redux/actions/footer";

import {fetchEmailForm} from "../../redux/actions/emailForm";

import {DOMEN} from "../../api";

const Footer = () => {
    const dispatch = useDispatch();

    const {menu, contact, social, legal, isLoaded} = useSelector(
        ({footer}) => footer
    );

    const {form} = useSelector(({emailForm}) => emailForm);
    const isLoadedForm = useSelector(({emailForm}) => emailForm.isLoaded);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        if (!menu.length) {
            dispatch(fetchFooterMenu());
        }
        if (!contact.length) {
            dispatch(fetchFooterContact());
        }
        if (!social.length) {
            dispatch(fetchFooterSocial());
        }
        if (!legal.length) {
            dispatch(fetchFooterLegal());
        }
    }, []);

    React.useEffect(() => {
        if (!Object.keys(form).length) {
            dispatch(fetchEmailForm());
        }
    }, []);

    return (
        <>
            {isLoaded && isLoadedForm ? (
                <footer className="footer">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer-media">
                                <div className={`footer-top ${size}`}>
                                    <Link to="/" className="footer-logo__link">
                                        <img
                                            src={`${DOMEN}/public/storage/all/logo-white.svg`}
                                            alt="IOMP"
                                            className="footer-logo__img"
                                        />
                                    </Link>

                                    <FooterMenu footerMenu={menu} size={size} />
                                </div>
                                <div className="footer-middle">
                                    <div className="footer-middle-left">
                                        <div className="footer-social">
                                            {social &&
                                                social.map((arr, index) => (
                                                    <a
                                                        key={`footer-social-${index}`}
                                                        href={arr.href}
                                                        className="footer-social__link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img
                                                            src={arr.icon}
                                                            alt={arr.title}
                                                            className="footer-social__img"
                                                        />
                                                    </a>
                                                ))}
                                        </div>

                                        <div className={`footer-contact`}>
                                            <p
                                                className={`footer__adres ${size}`}
                                            >
                                                {contact.adres}
                                            </p>
                                            {contact.phones &&
                                                contact.phones.map(
                                                    (phone, index) => (
                                                        <a
                                                            key={`footer-phone-${index}`}
                                                            href={`tel:${phone.phone}`}
                                                            className={`footer__link ${size} footer-middle__link`}
                                                        >
                                                            {phone.phone}
                                                        </a>
                                                    )
                                                )}

                                            <a
                                                href={`mailto:${contact.email}`}
                                                className={`footer__link ${size} footer-middle__link`}
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="footer-middle-right">
                                        <FooterForm {...form} size={size} />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                <div className={`footer-bottom-left ${size}`}>
                                    {legal.length &&
                                        legal.map((item, index) => (
                                            <span key={`footer-legal-${index}`}>
                                                {item.string} <br />
                                            </span>
                                        ))}
                                </div>
                                <div className="footer-bottom-right">
                                    <p className={`footer__comp ${size}`}>
                                        © IOMP {new Date().getFullYear()}
                                    </p>
                                </div>
                            </div>
                            <div className="footer-bottom-bottom">
                                <div className="footer-bottom-bottom-link">
                                    <Link
                                        to="/privacy"
                                        className={`footer-bottom-bottom__link ${size}`}
                                    >
                                        Политика конфиденциальности
                                    </Link>
                                    <Link
                                        to="/public-offer"
                                        className={`footer-bottom-bottom__link ${size}`}
                                    >
                                        Публичная оферта
                                    </Link>
                                </div>

                                {/* Hi, we are Nagibin's studio */}
                                <div className="nagibinstudio">
                                    <a href="https://nagibinstudio.ru">
                                        <img
                                            src="https://api.nagibinstudio.ru:5000/all/nagibin-develompent.svg"
                                            alt=""
                                            className="nagibinstudio__img"
                                            style={{
                                                width: "300px",
                                                userSelect: "none",
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            ) : null}
        </>
    );
};

export default Footer;
