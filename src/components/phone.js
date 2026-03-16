const phoneParts = ['+7', '964', '760', '27', '29'];
const realPhone = phoneParts.join('');

const links = document.querySelectorAll('.phone-link');

for (let link of links) {
    link.addEventListener('click', function () {
        link.href = 'tel:' + realPhone;
    });
    link.addEventListener('copy', function (e) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', realPhone);
    });
}

