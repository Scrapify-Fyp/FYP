var MainImg = document.getElementById("mainImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function() {
    MainImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function() {
    MainImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function() {
    MainImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function() {
    MainImg.src = SmallImg[3].src;

}

const products = document.querySelectorAll('.pro');
function redirectToProductDetail() {
    window.location.href = 'sproduct.html';
}

products.forEach((product, index) => {
    product.addEventListener('click', redirectToProductDetail);
});

// ZOOM IMAGE: //
const mainImgContainer = document.getElementById('mainImgContainer');
const mainImg = document.getElementById('mainImg');
const magnifier = document.getElementById('magnifier');

mainImgContainer.addEventListener('mousemove', function(event) {
    const rect = mainImg.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    magnifier.style.left = `${event.clientX - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${event.clientY - magnifier.offsetHeight / 2}px`;

    const scale = 3; // Adjust zoom level as needed
    const transformOriginX = (offsetX / rect.width) * 100 + '%';
    const transformOriginY = (offsetY / rect.height) * 100 + '%';
    mainImg.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    mainImg.style.transform = `scale(${scale})`;

    magnifier.style.display = 'block';
});

mainImgContainer.addEventListener('mouseleave', function() {
    magnifier.style.display = 'none';
    mainImg.style.transform = 'scale(1)';
});
