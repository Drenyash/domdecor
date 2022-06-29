import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.form');

    if (form) {
        checkFillingForm(form);
        initMainForm(form);
    }
});

let checkFillingForm = (form) => {
    const elements = form.querySelectorAll("[required]");

    for (let i = 0; i < elements.length; i++) {
        setListeners(elements[i]);
    }

    function setListeners(item) {
        item.oninvalid = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!e.target.validity.valid) {
                e.target.parentNode.classList.add("input--error");
            }
        };
        item.oninput = (e) => {
            e.target.parentNode.classList.remove("input--error");
            e.target.parentNode.classList.add("input--ok");
        };
    }
};

let initMainForm = (form) => {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formContent = new FormData();

        formContent.append('USER_NAME', form.elements.USER_NAME.value);
        formContent.append('USER_SECOND_NAME', form.elements.USER_SECOND_NAME.value)
        formContent.append('USER_PHONE', form.elements.USER_PHONE.value);
        formContent.append('USER_EMAIL', form.elements.USER_EMAIL.value);
        formContent.append('USER_QUANTITY', form.elements.USER_QUANTITY.value);

        axios.post(form.action, formContent)
            .then((response) => {
                console.log(response);
                form.querySelector('.form__message--ok').classList.add('form__message--visible');

                setTimeout(function () {
                    form.querySelector('.form__message--ok').classList.remove('form__message--visible');
                    form.querySelector('.is-close').click();
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                form.querySelector('.form__message--error').classList.add('form__message--visible');
                setTimeout(function () {
                    form.querySelector('.form__message--error').classList.remove('form__message--visible');
                }, 5000);
            })
            .then(() => {
                // always executed
            });
    });
};