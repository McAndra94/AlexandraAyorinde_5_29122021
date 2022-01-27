/* let api = fetch("http://localhost:3000/api/products")
.then(
    async result =>{
        let response = await result.json();
        console.log(response);
        
    }
) */

let productInCart = getProductFromLocalStorage();
console.log(productInCart);

let cartItems = document.getElementById("cart__items")

if(Object.keys(productInCart).length !== 0){
    for(const[id,colors]of Object.entries(productInCart)){
        console.log(id);
        console.log(colors);
        for(const[color,count]of Object.entries(colors)){
            let api = fetch("http://localhost:3000/api/products/" + id)
            .then(
                async result =>{
                    let response = await result.json();
                    console.log(response);
                    cartItems.innerHTML += 
                    `<article class="cart__item" data-id="${id}" data-color="${color}">
                        <div class="cart__item__img">
                        <img src="${response.imageUrl}" alt="Photographie d'un canapé">
                        </div>
                        
                        <div class="cart__item__content">
                        <div class="cart__item__content__description">
                            <h2>Nom du produit</h2>
                            <p>Vert</p>
                            <p>42,00 €</p>
                        </div>
                        
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                            </div>
        
                            <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                            </div>
                        </div>
                        
                        </div>
                    </article>`  
                    let itemsQuantity = document.getElementsByClassName("itemQuantity");
                    Object.values(itemsQuantity).forEach((element)=>{
                        element.addEventListener("change",function(e){
                            //element.closest("article").getAttribute("data-id")
                        })
                    })
                }
            )
        }
    }
} else {

}
/*let productImg = document.createElement("img");
document.querySelector(".cart__items__img").appendChild(productImg);

let productDescription = document.createElement("description");
productArticle.appendChild(productDescription);
productDescription.className = "cart__item__content__description";

let productPrice = document.createElement("price");
productItemContent.appendChild(productItemContentTitlePrice);
    

 */    