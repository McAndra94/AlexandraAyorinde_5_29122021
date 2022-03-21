let api = fetch("http://localhost:3000/api/products")
.then(
    async result =>{
        let response = await result.json();
        Object.entries(response).forEach(element => {
            let items = document.getElementById("items");
            items.innerHTML += 
            `<a href="./product.html?id=${element[1]._id}">
                <article>
                    <img src="${element[1].imageUrl}" alt="${element[1].altTxt}">
                    <h3 class="productName">${element[1].name}</h3>
                    <p class="productDescription">${element[1].description}</p>
                </article>
            </a>`
        });
    }
)