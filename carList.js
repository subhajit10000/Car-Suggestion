import { car } from './car_details.js';


function populateProducts() {
  const productList = document.getElementById('productList');

  const queryParams = new URLSearchParams(window.location.search);
  const queryParamsObject = Object.fromEntries(queryParams.entries());  
  const category = queryParamsObject['category'];

    let categoryItems = [];

    if(category) {
        categoryItems = car[category];
    } else {
        categoryItems = Object.values(car).flat();
    }
    

  categoryItems.forEach((item) => {
    const productItem = document.createElement('a');
    productItem.href = `product.html?product-id=${item.id}`;
    productItem.className = 'product-item';

    const productImage = document.createElement('div');
    productImage.className = 'product-img';

    const imageData = document.createElement('img');
    imageData.src = item.image;
    imageData.alt = item.model;
    productImage.appendChild(imageData);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const productName = document.createElement('div');
    productName.className=('product-name');
    productName.textContent = item.name;

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
    productItem.appendChild(productName);


    productList.appendChild(productItem); 
  })
}

populateProducts();