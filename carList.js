// import { car } from './car_details.js';

// function populateProducts() {
//     const productList = document.getElementById('productList');
//     const queryParams = new URLSearchParams(window.location.search);
//     const queryParamsObject = Object.fromEntries(queryParams.entries());

//     const category = queryParamsObject['category'];
    
//     const categoryItems = car [category];

    
//     categoryItems.forEach((item) => {
//         const productListBox = document.createElement('div');
//         const productItem = document.createElement('a');
//         productItem.className = 'product-item';
//         const productImage = document.createElement('div');
//         const cardBody = document.createElement('div')
//         const productModel = document.createElement('div');
//         const productPrice = document.createElement('div');

//         const imageData = document.createElement('img');
//         imageData.src = item.image;
//         productListBox.className = 'product-list-box';
//         cardBody.className = 'card-body';
//         productImage.className = 'product-img';
//         productModel.className = ('product-model');
//         productPrice.className = ('product-price');

//         productImage.appendChild(imageData);
//         productModel.textContent = item.model;
//         productPrice.textContent = item.price;

//         productItem.appendChild(productImage);
//         cardBody.appendChild(productModel);
//         cardBody.appendChild(productPrice);

//         productItem.appendChild(productImage);
//         productItem.appendChild(cardBody)
//         productListBox.appendChild(productItem)
//     })
// }

// populateProducts();











import { car } from './car_details.js';


function populateProducts() {
  const productList = document.getElementById('productList');

  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get('category'); 

  const categoryItems = car[category];


  categoryItems.forEach((item) => {
    const productItem = document.createElement('a');
    productItem.className = 'product-item';

    const productImage = document.createElement('div');
    productImage.className = 'product-img';

    const imageData = document.createElement('img');
    imageData.src = item.image;
    imageData.alt = item.model;
    productImage.appendChild(imageData);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const productModel = document.createElement('div');
    productModel.className = 'product-model';
    productModel.textContent = item.model;

    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';
    productPrice.textContent = item.price;

    cardBody.appendChild(productModel);
    cardBody.appendChild(productPrice);

    productItem.appendChild(productImage);
    productItem.appendChild(cardBody);

    productList.appendChild(productItem); 
  })
}

populateProducts();