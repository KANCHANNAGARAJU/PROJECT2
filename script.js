document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const prices = document.querySelectorAll('.price');

    toggleButton.addEventListener('click', function () {
        prices.forEach(price => {
            if (price.textContent.includes('/month')) {
                price.textContent = price.textContent.replace('/month', '/year');
                price.textContent = price.textContent.replace('29', '290');
                price.textContent = price.textContent.replace('59', '590');
                price.textContent = price.textContent.replace('99', '990');
            } else {
                price.textContent = price.textContent.replace('/year', '/month');
                price.textContent = price.textContent.replace('290', '29');
                price.textContent = price.textContent.replace('590', '59');
                price.textContent = price.textContent.replace('990', '99');
            }
        });
    });
});
