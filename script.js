document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.js--class');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const action = event.target.action;
        const method = event.target.method;
        const formData = new FormData(event.target);
        const name = document.getElementById('exampleFormControlInput1').value;
        const message = document.getElementById('exampleFormControlTextarea1').value;
        const phone = document.getElementById('exampleFormControlInput2').value;
        const email = document.getElementById('exampleFormControlInput3').value;
        const address = document.getElementById('exampleFormControlInput4').value;

        let nameError = document.getElementById('nameError');
        const messageError = document.getElementById('messageError');
        const phoneError = document.getElementById('phoneError');
        const emailError = document.getElementById('emailError');
        const errorMessages = [];


        if (!name.match(/[a-zA-Zа-яА-ЯёЁіІїЇєЄ`' -]+/)) {
            nameError.textContent = "Ім'я обов'язково текстове поле";
            errorMessages.push("Ім'я обов'язково текстове поле");
        } else {
            nameError.textContent = '';
        }

        if (message.length < 5) {
            messageError.textContent = 'Повідомлення повинно містити принаймні 5 символів';
            errorMessages.push('Повідомлення повинно містити принаймні 5 символів');
        } else {
            messageError.textContent = '';
        }

        if (!phone.match(/^\+380\d{9}$/)) {
            phoneError.textContent = 'Номер телефону повинен починатися з +380 і складатися з 12 цифр';
            errorMessages.push('Номер телефону повинен починатися з +380 і складатися з 12 цифр');
        } else {
            phoneError.textContent = '';
        }

        if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
            emailError.textContent = 'Некоректна адреса електронної пошти';
            errorMessages.push('Некоректна адреса електронної пошти');
        } else {
            emailError.textContent = '';
        }

        if (errorMessages.length > 0) {
            document.getElementById('errorMessages').textContent = errorMessages.join(', ');
        } else {
            document.getElementById('errorMessages').textContent = ''; // Clear any previous error messages
            console.log('Name: ' + name);
            console.log('Message: ' + message);
            console.log('Phone number: ' + phone);
            console.log('Email: ' + email);
            console.log('Address: ' + address);
        }
    
    });
    // formData.forEach(function (value, name) {
    //     console.log(`${name} - ${value}`);
    //     if (name === 'tel') {
    //         const regCheckPhone = /^[0-9]+$/;
    //         if (value.match(regCheckPhone) === null) {
    //             document.querySelector(`input[name = '${name}']`).style.backgroundColor = 'orange'
    //         } else {
    //             document.querySelector(`input[name = '${name}']`).style.backgroundColor = ''
    //         }
    //     }
    // })
    // console.log({ action, method })
})









