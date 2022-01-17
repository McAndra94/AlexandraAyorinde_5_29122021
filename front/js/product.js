const UrlSP = new URLSearchParams(window.location.search);
const idProduct = UrlSP.get("id");
console.log(idProduct);

let api = fetch("http://localhost:3000/api/products/" + idProduct)
.then(
    async result => {
        let response = await result.json();
        console.log(response);

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

/*
document.getElementById("addToCart").addEventListener("click", (event)=>{
    if (value > 0){
        let
    }
};
*/