const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Поле не может быть пустым";
	} else if (values.name.length > 250) {
		errors.name = `Не более ${250} символов`;
	} else if (values.name.length < 2) {
		errors.name = `Не менее ${2} символов`;
	}

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Ваша почта неверена";
	} else if (values.email.length > 250) {
		errors.email = `Не более ${250} символов`;
	} else if (values.email.length < 2) {
		errors.email = `Не менее ${2} символов`;
	}

	if (!values.phone) {
		errors.phone = "Поле не может быть пустым";
	}

	return errors;
};

export default validate;