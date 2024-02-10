const products = document.querySelectorAll('.pro');

function redirectToProductDetail() {
    window.location.href = 'sproduct.html';
}

products.forEach((product, index) => {
    product.addEventListener('click', redirectToProductDetail);
});