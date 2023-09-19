document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#myButton');
    const message = document.querySelector('#message');

    button.addEventListener('click', function () {
        message.textContent = '¡Hiciste clic en el botón!';
    });
});
