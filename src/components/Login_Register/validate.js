const validate = values => {
	const errors = {};

	const passwordMin = 5;

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.name) {
		errors.name = 'Поле не может быть пустым';
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Не менее ${defaultMin} символов`;
	}

	if (!values.password) {
		errors.password = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password)) {
		errors.password = 'Поле не может содержать кириллицу'
	} else if (values.password.length > defaultMax) {
		errors.password = `Не более ${defaultMax} символов`;
	} else if (values.password.length < passwordMin) {
		errors.password = `Не менее ${passwordMin} символов`;
	}

	if (!values.email) {
		errors.email = 'Поле не может быть пустым';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Неверный email'
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	if (!values.password_one) {
		errors.password_one = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password_one)) {
		errors.password_one = 'Поле не может содержать кириллицу'
	} else if (values.password_one.length > defaultMax) {
		errors.password_one = `Не более ${defaultMax} символов`;
	} else if (values.password_one.length < passwordMin) {
		errors.password_one = `Не менее ${passwordMin} символов`;
	}

	if (!values.password_two) {
		errors.password_two = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password_two)) {
		errors.password_two = 'Поле не может содержать кириллицу'
	} else if (values.password_two !== values.password_one) {
		errors.password_two = 'Пароли не равны'
	} else if (values.password_two.length > defaultMax) {
		errors.password_two = `Не более ${defaultMax} символов`;
	} else if (values.password_two.length < passwordMin) {
		errors.password_two = `Не менее ${passwordMin} символов`;
	}

	return errors;
};

export default validate;