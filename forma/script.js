const form = document.querySelector('.form');
const inputName = form.querySelector('#name-input');
const inputNameError = form.querySelector('#name-error');
const Surname = form.querySelector('#surname');
const inputSurnameNameError = form.querySelector('#surname-error');
const inputSurnameNameTwo = form.querySelector('#surname2-input');
const inputSurnameNameTwoError = form.querySelector('#surname2-error');
const inputPhone = form.querySelector('#phone-input')
const inputPhoneError = form.querySelector('#phone-error');

const inputDate = form.querySelector('#date-input');
const inputDateError = form.querySelector('#date-error');

function startValidation(){
    let submitForm = true
    inputName.addEventListener('input', () => {
        const nameText = inputName.value;
        const namePattern = /^[а-яА-ЯёЁ]+$/
        if (namePattern.test(nameText)) {
            inputNameError.textContent = "";
            submitForm = true
        } else {
            inputNameError.textContent = "Имя должно состоять из кирилицы";
            submitForm = false
        }
    });

    Surname.addEventListener('input', () => {
        const surnameText = Surname.value;
        const surnamePattern = /^[а-яА-ЯёЁ]+$/;
        if (surnamePattern.test(surnameText)) {
            inputSurnameNameError.textContent = '';
            submitForm = true
        } else {
            inputSurnameNameError.textContent = "Имя должно состоять из кирилицы";
            submitForm = false
        }
    });

    inputSurnameNameTwo.addEventListener('input', () => {
        const surnameTwoText = inputSurnameNameTwo.value;
        const surnameTwoPattern = /^[а-яА-ЯёЁ]+$/
        if (surnameTwoPattern.test(surnameTwoText)) {
            inputSurnameNameTwoError.textContent = "";
            submitForm = true
        } else {
            inputSurnameNameTwoError.textContent = "Отчество должно состоять из кирилицы";
            submitForm = false
        }
    });

    inputPhone.addEventListener('input', () => {
        const phoneText = inputPhone.value;
        const phonePattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
        if (phonePattern.test(phoneText)) {
            inputPhoneError.textContent = '';
            submitForm = true
        } else {
            inputPhoneError.textContent = 'Неправильный телефон';
            submitForm = false
        }
    });

    inputDate.addEventListener('input', () => {
        const dateText = inputDate.value;
        // const datePattern = /^(?:(?:31-(?:(?:0?[13578])|(1[02]))-(19|20)?\d\d)|(?:(?:29|30)-(?:(?:0?[13-9])|(?:1[0-2]))-(?:19|20)?\d\d)|(?:29-0?2-(?:19|20)(?:(?:[02468][048])|(?:[13579][26])))|(?:(?:(?:0?[1-9])|(?:1\d)|(?:2[0-8]))-(?:(?:0?[1-9])|(?:1[0-2]))-(?:19|20)?\d\d))$/
        if (datePattern.test(dateText)) {
            inputDateError.textContent = '';
            submitForm = true
        } else {
            inputDateError.textContent = 'Неправильная дата';
            submitForm = false
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (submitForm) {
            alert('Форма отправленна')
        }
    })
}

startValidation();