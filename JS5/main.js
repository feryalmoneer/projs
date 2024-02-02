
async function getProduct(){
    const resopnse = await fetch("https://dummyjson.com/products");
    const data = await resopnse.json();
    const products = data.products;
    
    const results = products.map(function (result) {
        return `
        <div class="product">
        <img src="${result.thumbnail}">
        <h2> ${result.title} </h2>
        <span> The Price is ${result.price} </span>

        </div>
        `;
        
    }
    ).join('');
    document.querySelector(".products").innerHTML=results;
    }
    getProduct();