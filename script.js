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

        const nameError = document.getElementById('nameError');
        const messageError = document.getElementById('messageError');
        const phoneError = document.getElementById('phoneError');
        const emailError = document.getElementById('emailError');
        const errorMessages = [];

        if (!name) {
            nameError.textContent = 'Name is required';
            errorMessages.push('Name is required');
        } else {
            nameError.textContent = '';
        }

        if (message.length < 5) {
            messageError.textContent = 'Message must be at least 5 characters long';
            errorMessages.push('Message must be at least 5 characters long');
        } else {
            messageError.textContent = '';
        }

        if (!phone.match(/^\+380\d{9}$/)) {
            phoneError.textContent = 'Phone number must start with +380 and consist of 12 digits';
            errorMessages.push('Phone number must start with +380 and consist of 12 digits');
        } else {
            phoneError.textContent = '';
        }

        if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
            emailError.textContent = 'Invalid email address';
            errorMessages.push('Invalid email address');
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
    console.log({ action, method })
})









