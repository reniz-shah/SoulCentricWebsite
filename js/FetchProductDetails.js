document.addEventListener('DOMContentLoaded', function() {
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log("🚀 ~ document.addEventListener ~ productData:", productData)
    if (productData) {
        document.querySelector('.product-image').src = productData.image;
        document.querySelector('.product-title').textContent = productData.name;
        // document.querySelector('.product-meta-title').textContent = productData.description;
        document.querySelector('.product-description-text').textContent = productData.description;
        
        const variantsText = document.querySelector('.product-variants-text');
        if (productData.variants && productData.variants.length > 0) {
            variantsText.textContent = productData.variants.join(', ');
        } else {
            document.querySelector('.product-variants').style.display = 'none';
        }
        
        // Clear the product data from localStorage
        // localStorage.removeItem('selectedProduct');
    } else{
        window.location.href = 'products.html';
    }
});