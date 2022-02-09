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

function addToCart(id,number,color){
    console.log(id);    
    let products = getProductFromLocalStorage();
    if(products[id]){
            if(products[id][color]){
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
    console.log(id); 
    console.log(count);
}