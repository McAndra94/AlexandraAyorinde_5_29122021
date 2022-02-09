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
                    console.log(response.quantity);
                    cartItems.innerHTML += 
                    `<article class="cart__item" data-id="${id}" data-color="${color}">
                        <div class="cart__item__img">
                        <img src="${response.imageUrl}" alt="${response.altTxt}">
                        </div>
                        
                        <div class="cart__item__content">
                        <div class="cart__item__content__description">
                            <h2>${response.name}</h2>
                            <p>${color}</p>
                            <p>${response.price} €</p>
                        </div>
                        
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${count}">
                            </div>
        
                            <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                            </div>
                        </div>
                        
                        </div>
                    </article>`  
                    let itemsQuantity = document.getElementsByClassName("itemQuantity");
                    Object.values(itemsQuantity).forEach((element)=>{
                        element.addEventListener("change",function(event){
                            let elementId = element.closest("article").getAttribute("data-id")
                            let elementColor = element.closest("article").getAttribute("data-color")
                            console.log(elementId)
                            console.log(elementColor)
                            updateCountProducts(elementId,elementColor,element.value)
                    
                        })
                    })
                    let itemsDelete = document.getElementsByClassName("deleteItem");
                    Object.values(itemsDelete).forEach((element)=>{
                        element.addEventListener("click",function(event){
                            itemsDelete.innerHTML = "Supprimer";         
                        })
                    })
                }
            )
        }
    }
} else {

}