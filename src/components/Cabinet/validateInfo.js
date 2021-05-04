export const validateInfo = (values) => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.first_name) {
		errors.first_name = 'Поле не может быть пустым';
	} else if (values.first_name.length > defaultMax) {
		errors.first_name = `Не более ${defaultMax} символов`;
	} else if (values.first_name.length < defaultMin) {
		errors.first_name = `Не менее ${defaultMin} символов`;
	}

	if (!values.middle_name) {
		errors.middle_name = 'Поле не может быть пустым';
	} else if (values.middle_name.length > defaultMax) {
		errors.middle_name = `Не более ${defaultMax} символов`;
	} else if (values.middle_name.length < defaultMin) {
		errors.middle_name = `Не менее ${defaultMin} символов`;
	}

	if (!values.last_name) {
		errors.last_name = 'Поле не может быть пустым';
	} else if (values.last_name.length > defaultMax) {
		errors.last_name = `Не более ${defaultMax} символов`;
	} else if (values.last_name.length < defaultMin) {
		errors.last_name = `Не менее ${defaultMin} символов`;
	}

	if (!values.date_of_birth) {
		errors.date_of_birth = 'Поле не может быть пустым';
	}

	if (!values.phone) {
		errors.phone = 'Поле не может быть пустым';
	}

	if (!values.skype) {
		errors.skype = 'Поле не может быть пустым';
	} else if (values.skype.length > defaultMax) {
		errors.skype = `Не более ${defaultMax} символов`;
	} else if (values.skype.length < defaultMin) {
		errors.skype = `Не менее ${defaultMin} символов`;
	}

	if (!values.vk) {
		errors.vk = 'Поле не может быть пустым';
	} else if (values.vk.length > defaultMax) {
		errors.vk = `Не более ${defaultMax} символов`;
	} else if (values.vk.length < defaultMin) {
		errors.vk = `Не менее ${defaultMin} символов`;
	}

	if (!values.facebook) {
		errors.facebook = 'Поле не может быть пустым';
	} else if (values.facebook.length > defaultMax) {
		errors.facebook = `Не более ${defaultMax} символов`;
	} else if (values.facebook.length < defaultMin) {
		errors.facebook = `Не менее ${defaultMin} символов`;
	}

	return errors;
};