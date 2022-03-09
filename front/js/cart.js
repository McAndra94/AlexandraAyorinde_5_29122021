let productInCart = getProductFromLocalStorage();
/* console.log(productInCart); */

let cartItems = document.getElementById("cart__items")

if(Object.keys(productInCart).length !== 0){
    for(const[id,colors]of Object.entries(productInCart)){
        /* console.log(id);
        console.log(colors); */
        for(const[color,count]of Object.entries(colors)){
            let api = fetch("http://localhost:3000/api/products/" + id)
            .then(
                async result =>{
                    let response = await result.json();
                    /* console.log(response); */
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
                            /* console.log(elementId)
                            console.log(elementColor) */
                            updateCountProducts(elementId,elementColor,element.value)
                        })
                    })
                    let itemsDelete = document.getElementsByClassName("deleteItem");
                    Object.values(itemsDelete).forEach((element)=>{
                        element.addEventListener("click",function(event){
                            let elementToDeleteId = element.closest("article").getAttribute("data-id")
                            let elementToDeleteColor = element.closest("article").getAttribute("data-color")
                            productDelete(elementToDeleteId,elementToDeleteColor) 
                        })
                    })
                    
                    // Récupération tt Qty
                    let productTotalQuantity = document.getElementById("totalQuantity");
                    if (productTotalQuantity.innerHTML === ""){
                        productTotalQuantity.innerHTML = "0"
                    }
                    console.log(productTotalQuantity.innerHTML)
                    let previousQuantity = parseInt(productTotalQuantity.innerHTML) 
                    let finalQuantity = previousQuantity+parseInt(count)
                    productTotalQuantity.innerHTML = finalQuantity.toString()
                    /* console.log(totalQuantity); */
                    
                    // Récupération tt Price
                    let productTotalPrice = document.getElementById("totalPrice");
                    if (productTotalPrice.innerHTML === ""){
                        productTotalPrice.innerHTML = "0,00"
                    }
                    /* console.log(productTotalPrice.innerHTML) */
                    let previousPrice = parseInt(productTotalPrice.innerHTML) 
                    let finalPrice = previousPrice+parseInt(response.price)
                    productTotalPrice.innerHTML = finalPrice.toString()
                    /* console.log(totalPrice); */
                }
            )
        }
    }
} else {

}

//Valider : formulaire
let prenom = document.getElementById("firstName")
let prenomErrorMsg = document.getElementById("firstNameErrorMsg")
let regexPrenom = /^[a-zA-ZÀ-ú\-\s]+$/
let nom = document.getElementById("lastName")
let nomErrorMsg = document.getElementById("lastNameErrorMsg")
let regexNom = /^[a-zA-ZÀ-ú\-\s]+$/
let adresse = document.getElementById("address")
let adresseErrorMsg = document.getElementById("addressErrorMsg")
let regexAdresse = /^[a-zA-ZÀ-ú0-9\-\s]+$/
let ville = document.getElementById("city")     
let villeErrorMsg = document.getElementById("cityErrorMsg")
let regexVille = /^[a-zA-ZÀ-ú\-\s]+$/
let courriel = document.getElementById("email")
let courrielErrorMsg = document.getElementById("emailErrorMsg")
let regexCourriel = /^[a-zA-ZÀ-ú0-9-._]+[@]{1}[a-zA-Z0-9-._]+[.]{1}[a-zA-Z]+$/
let btnSubmit = document.getElementById("order")

btnSubmit.addEventListener("click", function(event){
    /* console.log(event) */
    event.preventDefault() /* prevents page from reloading */

    let valide = false

    if(prenom.value === ""){
        prenom.style.border = "red 2px solid"
        prenomErrorMsg.innerHTML = "Ce champ ne doit pas être vide."
        valide = false
    } else if (prenom.value.match(regexPrenom) === null) {
        prenom.style.border = "red 2px solid"
        prenomErrorMsg.innerHTML = "Ce champ ne doit pas contenir de chiffres."
        valide = false
        } else {
            prenomErrorMsg.innerHTML = ""
            prenom.style.border = "green 2px solid"
            valide = true
        } 
    if(nom.value === ""){
        nom.style.border = "red 2px solid"
        nomErrorMsg.innerHTML = "Ce champ ne doit pas être vide."
        valide = false
    } else if (nom.value.match(regexNom) === null) {
        nom.style.border = "red 2px solid"
        nomErrorMsg.innerHTML = "Ce champ ne doit pas contenir de chiffres."
        valide = false
        } else {
            nomErrorMsg.innerHTML = ""
            nom.style.border = "green 2px solid"
            valide = true
        }
    if(adresse.value === ""){
        adresse.style.border = "red 2px solid"
        adresseErrorMsg.innerHTML = "Ce champ ne doit pas être vide."
        valide = false
    } else if (adresse.value.match(regexAdresse) === null) {
        adresse.style.border = "red 2px solid"
        adresseErrorMsg.innerHTML = "Ce champ doit être une adresse valide."
        valide = false
        } else {
            adresseErrorMsg.innerHTML = ""
            adresse.style.border = "green 2px solid"
            valide = true
        }
    if(ville.value === ""){
        ville.style.border = "red 2px solid"
        villeErrorMsg.innerHTML = "Ce champ ne doit pas être vide."
        valide = false
    } else if (ville.value.match(regexVille) === null) {
        ville.style.border = "red 2px solid"
        villeErrorMsg.innerHTML = "Ce champ ne doit pas contenir de chiffres."
        valide = false
        } else {
            villeErrorMsg.innerHTML = ""
            ville.style.border = "green 2px solid"
            valide = true
        } 
    if(courriel.value === ""){
        courriel.style.border = "red 2px solid"
        courrielErrorMsg.innerHTML = "Ce champ ne doit pas être vide."
        valide = false
    } else if (courriel.value.match(regexCourriel) === null) {
        courriel.style.border = "red 2px solid"
        courrielErrorMsg.innerHTML = "Ce champ doit être une adresse mail valide."
        valide = false
        } else {
            courrielErrorMsg.innerHTML = ""
            courriel.style.border = "green 2px solid"
            valide = true
        } 
        /* console.log(valide) */
    if(valide == true){
        let productsId = getProductsId(productInCart)
        const firstName = prenom.value
        const lastName = nom.value
        const address = adresse.value
        const city = ville.value
        const email = courriel.value
        fetch("http://localhost:3000/api/products/order", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contact: {
                    firstName, lastName,
                    address,
                    city,
                    email
                },
                products: productsId
            })
        }).then(async(response)=>{
            const responseJson = await response.json()
            /* console.log(responseJson.orderId) */
            window.location = `confirmation.html?orderId=${responseJson.orderId}`
        }).catch((error)=>{
            /* console.log(error) */
        })
    }
    
});







