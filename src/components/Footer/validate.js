const validate = values => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.Contact || (values.Contact && !values.Contact.email)) {
		errors.Contact = { email: 'Поле не может быть пустым' };
	} else if ((values.Contact && !values.Contact.email) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.Contact = { email: 'Неверный email' }
	} else if (values.Contact && values.Contact.email.length > defaultMax) {
		errors.Contact = { email: `Не более ${defaultMax} символов` };
	} else if (values.Contact && values.Contact.email.length < defaultMin) {
		errors.Contact = { email: `Не менее ${defaultMin} символов` };
	}

	if (!values.confirmation) {
		errors.confirmation = 'Поставьте галочку';
	}

	return errors;
};

export default validate;