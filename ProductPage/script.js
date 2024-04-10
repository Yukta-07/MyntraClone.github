var products = [
  {
    id : '1',
    brand: "H&M",
    price: "$39",
    description:"zip Front Skirt",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/26254016/2023/12/5/be3025c5-cfe3-4af6-ad4e-ae5e7eec596d1701760094259Zip-frontrib-knitskirt1.jpg",
    frontsrc:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26254016/2023/12/5/be3025c5-cfe3-4af6-ad4e-ae5e7eec596d1701760094259Zip-frontrib-knitskirt1.jpg",
    front2src:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26254016/2023/12/5/addcc3a5-de85-4587-b0d5-85cf5298347b1701760094249Zip-frontrib-knitskirt2.jpg",
    backsrc:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26254016/2023/12/5/2de53329-d2c7-4935-a825-1b964bfda3081701760094237Zip-frontrib-knitskirt3.jpg",
    back2src:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26254016/2023/12/5/2e19c61a-c36d-47b8-9bfd-e20aecd873661701760094244Zip-frontrib-knitskirt4.jpg",
    closesrc:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26254016/2023/12/5/fd0ff744-9e8d-42e1-8eb5-a0b7f630563a1701760094254Zip-frontrib-knitskirt5.jpg",
  },
  {
    id : '2',
    brand: "H&M",
    price: "$10",
    src: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26921788/2024/1/14/93d8b495-2b42-4132-ba0d-4d8c274668661705242020775HMBandeauBodyconDresses1.jpg",
  },
  {
    id : '3',
    brand: "H&M",
    price: "$12",
    src: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27539750/2024/2/13/20caa4db-585c-44cb-9fd9-b5b40a2db1db1707806129247Tie-detailT-shirtdress1.jpg",
  },
  {
    brand: "StyleCast",
    price: "$42",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/28333688/2024/3/28/9e8ca0b3-2cae-4075-b570-d33f289767591711631764853StyleCastxRevolteEthnicMotifsPrintedShoulderStrapsTie-UpsMax1.jpg",
  },
  {
    brand: "StyleCast",
    price: "$14",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/28292098/2024/3/15/597873f1-3b11-410c-9d01-4aea926c1a081710499865800StyleCastFloralPrintFitFlareDress1.jpg",
  },
  {
    brand: "H&M",
    price: "$18",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/28047780/2024/3/5/6632ef25-72ea-47eb-ac6c-c0046a73d05e1709646366440StyleCastPrintFitFlareDress1.jpg",
  },
  {
    brand: "H&M",
    price: "$22",
    src: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23837354/2023/7/1/63f00d50-a918-4600-a842-d829801078a61688214275955HMWomenSatinWrapDresses1.jpg",
  },
  {
    brand: "Zara",
    price: "$30",
    src: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27406226/2024/2/6/13e11b00-da15-41d8-8081-b5138b2a68b31707201563298Ribbedbodycondress1.jpg",
  },
  {
    brand: "H&M",
    price: "$19",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/28176486/2024/3/11/db19b531-449f-4328-94db-66061c7f92711710141174778Ribbeddress1.jpg",
  },
  {
    brand: "H&M",
    price: "$16",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/23837350/2023/7/1/49b74d4c-8520-4118-a48d-ac45b09e79d71688214273202HMWomenLace-TrimmedSatinSlipDresses1.jpg",
  },
  {
    brand: "Boohoo",
    price: "$12",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/27578534/2024/2/14/e5268dee-7ccc-49e8-9733-b931b285e8981707896660585HMRibbedBodyconDress1.jpg",
  },
  {
    brand: "Boohoo",
    price: "$12",
    src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/27578534/2024/2/14/e5268dee-7ccc-49e8-9733-b931b285e8981707896660585HMRibbedBodyconDress1.jpg",
  },
];

// Function to create product cards
function createProductCard(product) {
  var card = document.createElement("div");
  card.className = "card";
  card.style.width = "23rem";
  card.style.transition = "transform 0.3s";

  card.onmouseover = function () {
    card.style.transform = "scale(1.1)";
  };
  card.onmouseleave = function () {
    card.style.transform = "scale(1)";
  };

  card.onclick = function() {
    var id = product.id; 
    displayProduct(id);
};

function displayProduct(id) {
    var product = products.find(p=> p.id === id);
        if (product){
            var product_title = document.getElementById('product_title');
            product_title.innerText = product.brand; 
            var price = document.querySelector("#price");
            price.innerText = product.price;
            var pname = document.querySelector(".p-name");
            pname.innerText = product.description;
            var frontimg= document.getElementById('frontimg').src = product.frontsrc;
            var front2img= document.getElementById('front2img').src = product.front2src;
            var backimg= document.getElementById('backimg').src = product.backsrc;
            var back2img= document.getElementById('back2img').src = product.back2src;
            var closeimg= document.getElementById('closeimg').src = product.closesrc;
           

        }
    }
  var id = document.createElement("id");
  id = product.id;

  var img = document.createElement("img");
  img.src = product.src;
  img.className = "card-img-top";
  card.appendChild(img);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var brand = document.createElement("h5");
  brand.className = "card-title";
  brand.textContent = product.brand;
  cardBody.appendChild(brand);

  var price = document.createElement("p");
  price.className = "card-text";
  price.textContent = "Price: " + product.price;
  cardBody.appendChild(price);

  card.appendChild(cardBody);

  return card;
}

// Function to render products
function renderProducts() {
  var container = document.getElementById("product-container");

  for (let i = 0; i < products.length; i += products.length) {
    row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    var productsInRow = products.slice(i, i + products.length);
    productsInRow.forEach(function (product) {
      var productCard = createProductCard(product);
      var col = document.createElement("div");
      col.className = "col-lg-3";
      col.style.marginBottom = "3rem"; // Assuming 3 columns per row for Bootstrap (change according to your grid system)
      col.appendChild(productCard);
      row.appendChild(col);
    });
  }
}
// Call renderProducts function to display products
renderProducts();
