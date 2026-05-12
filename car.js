import {car} from './car_details.js'


function carCategories() {
    const categoryList = document.getElementById('categoryList');
    const categories = Object.keys(car);
    
    categories.forEach((category) => {
        const categoryItem = document.createElement('a');

        categoryItem.className = 'category-item';

        categoryItem.textContent = category;
        categoryItem.href = `carList.html?category=${category}`;
        categoryList.appendChild(categoryItem);
    });
}

carCategories();


