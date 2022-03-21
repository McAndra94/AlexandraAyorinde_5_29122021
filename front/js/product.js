const urlSearchP = new URLSearchParams(window.location.search);
const idProduct = urlSearchP.get("id");

let api = fetch("http://localhost:3000/api/products/" + idProduct)
.then(
    async result => {
        let response = await result.json();

        let productImg = document.createElement("img");
        document.querySelector(".item__img").appendChild(productImg);
        productImg.src = response.imageUrl;
        productImg.alt = response.altTxt;

        const productName = document.getElementById("title");
        productName.innerHTML = response.name;

        const productPrice = document.getElementById("price");
        productPrice.innerHTML = response.price;

        const productDescription = document.getElementById("description");
        productDescription.innerHTML = response.description;

        let colors = response.colors;
        let selectColor = document.getElementById("colors");
        colors.forEach((color)=>{
            let option = document.createElement("option");
            option.value = color
            option.innerHTML = color
            selectColor.appendChild(option)
        })
    }
)

let addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click",(event)=>{
    let quantity = document.getElementById("quantity");
    let color = document.getElementById("colors"); 

    if(quantity.value > 0 && quantity.value <100){
        addToCart(idProduct,quantity.value,color.value,price.value);
    }
    alert("Le produit a été ajouté au panier.")
})