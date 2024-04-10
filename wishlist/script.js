function displayWishlist(){
  

    var wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

    var wishlistContainer = document.getElementById('wishlist-container');

    wishlistContainer.innerHTML = "";
    wishlistItems.forEach(function(item) {
        var wishlistItemElement = document.createElement("div");
        wishlistItemElement.classList.add("wishlist-item");

        // Create elements to display the product image, name, size, and price
        var imageElement = document.createElement("img");
        imageElement.src = item.image;

        var nameElement = document.createElement("p");
        nameElement.textContent = item.name;

        var sizeElement = document.createElement("p");
        sizeElement.textContent = "Size: " + item.size;

        var priceElement = document.createElement("p");
        priceElement.textContent = "Price: " + item.price;

        // Append elements to the wishlist item container
        wishlistItemElement.appendChild(imageElement);
        wishlistItemElement.appendChild(nameElement);
        wishlistItemElement.appendChild(sizeElement);
        wishlistItemElement.appendChild(priceElement);

        // Append wishlist item container to the wishlist container in the DOM
        wishlistContainer.appendChild(wishlistItemElement);
    });
}
window.addEventListener("load", function() {
    displayWishlist();
});
