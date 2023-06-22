const productList = document.getElementById('product-list');
    const cartItems = [];
    const cartContainer = document.getElementById('cart-container');

    function redirectTo(url) {
      window.location.href = url;
    }

    function addToCart(productName, price) {
      const item = { productName, price };
      cartItems.push(item);
      updateCartUI();
    }

    function removeFromCart(index) {
      cartItems.splice(index, 1);
      updateCartUI();
    }

    function updateCartUI() {
      const cartList = document.getElementById('cart-items');
      cartList.innerHTML = '';

      let totalPrice = 0;
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${item.productName}</span>
          <span>$${item.price.toFixed(2)}</span>
          <button onclick="removeFromCart(${i})">Remove</button>
        `;
        cartList.appendChild(listItem);
        totalPrice += item.price;
      }

      const cartTotal = document.getElementById('cart-total');
      cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    function toggleCart() {
      cartContainer.classList.toggle('is-open');
    }

    function checkout() {
      // Implement your checkout logic here
      alert('Checkout functionality not implemented in this example.');
    }
    // Function to add a new product to the list
    function addProduct(event) {
    event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productImage = document.getElementById('product-image').files[0];

  if (productName && productImage) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';

      const productImg = document.createElement('img');
      productImg.src = event.target.result;
      productImg.alt = productName;
      productDiv.appendChild(productImg);

      const productNameElement = document.createElement('h2');
      productNameElement.textContent = productName;
      productDiv.appendChild(productNameElement);

      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', function() {
        addToCart(productName, 0); // Set the price to 0 or modify as needed
      });
      productDiv.appendChild(addToCartButton);

      // Insert the new product after the existing products
      const existingProducts = productList.querySelectorAll('.product');
      if (existingProducts.length === 0) {
        productList.appendChild(productDiv);
      } else {
        productList.insertBefore(productDiv, existingProducts[0]);
      }
    };
    reader.readAsDataURL(productImage);
  }
}

// Function to show the product details on hover
function showProductDetails() {
  const productDetails = this.querySelector('.product-details');
  productDetails.style.display = 'block';
}

// Function to hide the product details when not hovering
function hideProductDetails() {
  const productDetails = this.querySelector('.product-details');
  productDetails.style.display = 'none';
}

// Add event listeners to each product for hover behavior
const products = document.getElementsByClassName('product');
Array.from(products).forEach(product => {
  product.addEventListener('mouseenter', showProductDetails);
  product.addEventListener('mouseleave', hideProductDetails);
}); 
