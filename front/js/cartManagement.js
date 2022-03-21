let storage = localStorage

function getProductFromLocalStorage(){
  let products = storage.getItem("canap_cart")
  if(!products){
      return {}  
    }
  return JSON.parse(products)
}

function updateLocalStorage(products){
    storage.setItem("canap_cart",JSON.stringify(products))
}

function getProductCount(productId, productColor){
    let products = getProductFromLocalStorage();
    return parseInt(products[productId][productColor])
}

function addToCart(id,number,color){
    let products = getProductFromLocalStorage();
    if(products[id]){
            if(products[id][color]){
                let currentCount = getProductCount(id, color)
                products[id][color] = parseInt(number) + currentCount;  
            }else{
                products[id][color] = number;
            }
    }
    if(!products[id]){
        products[id] = {
            [color]:number,
        }
    }

    updateLocalStorage(products)
}

/**
 * 
 * @param {*} id 
 * @param {*} color 
 * @param {*} count 
 */
function updateCountProducts(id,color,count){
    let cartProducts = getProductFromLocalStorage()
    console.log(Number(count) > 0)
    if(Number(count) > 0){
        cartProducts[id][color] = count
    }
    updateLocalStorage(cartProducts)
    location.reload()
}

function productDelete(id,color){
    let products = getProductFromLocalStorage();
    if(products[id]){
        delete products[id]
    }
    updateLocalStorage(products)
    location.reload()
}

function getProductsId(products){  
    var ids = []
    for(const[id,colors] of Object.entries(products)){
        ids.push(id) 
    }
    return ids 
}