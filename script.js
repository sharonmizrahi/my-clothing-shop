
//the initial fetch function 

const start = async () => {

    const response = await fetch("https://fakestoreapi.com/products/categories") 
    const data = await response.json() //converting to a json file
    createCatogoryList(data); 

}; 

start();


// this function creating a list of categories for the select element.

const createCatogoryList = (categoryList) => {

    document.querySelector('.category-btns').innerHTML = `
    <select onchange="loadByCategory(this.value)" name="category" id="category" class="form-select form-select-sm" aria-label=".form-select-sm example">
       <option>Category</option>
       ${categoryList.map(function(category) {
           return `<option>${category}</option>`
       })}
    </select>
    
 ` 
};


//this function fetching the data of picked category

const loadByCategory = async (category) => {
     
    if (category != "Category") {

        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const data = await response.json()
        console.log(data)
        showCategoriesProducts(data)
    }
    
};



//this function renders all the products of the picked category

const showCategoriesProducts = (categoryOption) => {

   document.querySelector('.cards').innerHTML = `${categoryOption.map((product) => {

     return `   
        <div class="product-card">
           <div class="product-tumb">
              <img src=${product.image} alt="">
           </div>
           <div class="product-details">
               <span class="product-catagory">${product.category}</span>
               <h4><a href="">${product.title}</a></h4>
               <p>${product.description}</p>
          </div>
          <div class="product-bottom-details">
               <div class="product-price">$${product.price}</div>
               <div class="product-links">
                   <span class="material-symbols-outlined" id="favorite">favorite</span>
                   <span class="material-symbols-outlined" id="cart">shopping_cart</span>
              </div>
          </div>
       </div>
   `


 })}
   `
}
       
    

  





