function validateForm() {
    const inputContainers = document.querySelectorAll('.input-cont');
    let isEmptyFound = false;

    inputContainers.forEach(container => {
        const input = container.querySelector('input');
        const err = container.querySelector('.err');
        const errMsg = container.querySelector('.err-msg');

        if (input.value.trim() === '') {
            isEmptyFound = true;

            input.style.borderColor = "hsl(0, 100%, 74%)";
            err.style.zIndex = '0';
            errMsg.style.zIndex = '0';

            errMsg.textContent = input.placeholder + " cannot be empty";
        } else if (input.name === 'email' && !isValidEmail(input.value.trim())) {
            isEmptyFound = true;

            input.style.borderColor = "hsl(0, 100%, 74%)";
            err.style.zIndex = '0';
            errMsg.style.zIndex = '0';

            input.style.color ="hsl(0, 100%, 74%)";
            errMsg.textContent = "Looks like this is not an email";
        } else {
            input.style.borderColor = "";
            err.style.zIndex = '-1';
            errMsg.style.zIndex = '-1';
        }
    });

    return !isEmptyFound;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}