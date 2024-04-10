function addToWishlist(id){
    debugger
    var productImg = document.getElementById("productImage").src;
    var size = document.getElementById(id).querySelector('.size').textContent.split(":")[1].trim();
    var price = document.getElementById(id).querySelector('.price').textContent.split(":")[1].trim();


    var storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
   
    var wishlist = storedWishlist || [];


    var product = {
        image:productImg,
        size:size,
        price:price,
    }

    

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    console.log("product added to wishlist");
}





function addToCart(id){
    var productImg = document.getElementById(id).querySelector('img').src;
    var size = document.getElementById(id).querySelector('.size').textContent.split(":")[1].trim();
    var price = document.getElementById(id).querySelector('.price').textContent.split(":")[1].trim();


    var product = {
        image:productImg,
        size:size,
        price:price,
    }

    var cartItems = [];

    cartItems.push(product);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log("product added to CART");
}


