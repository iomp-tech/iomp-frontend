import React from "react";
import {useDispatch, useSelector} from "react-redux";

import EmailForm from "./EmailForm";

import {fetchEmailForm} from "../../redux/actions/emailForm";

const EmailFormWrapper = React.memo(() => {
    const dispatch = useDispatch();
    const {form, isLoaded} = useSelector(({emailForm}) => emailForm);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        if (!Object.keys(form).length) {
            dispatch(fetchEmailForm());
        }
    }, []);

    return <>{isLoaded ? <EmailForm size={size} {...form} /> : null}</>;
});

export default EmailFormWrapper;
