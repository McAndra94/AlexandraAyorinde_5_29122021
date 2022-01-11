/* 

${element[1]._id}
${element[1].imageUrl}
${element[1].altTxt}
title : ${element[1].name}
price : ${element[1].price}
description : ${element[1].description}
colors : ${element[1].colors}

*/

let api = fetch("http://localhost:3000/api/products" + idProduct)
.then(
    async result =>{
        let response = await result.json();
        console.log(response);
        Object.entries(response).forEach(element => {
            let items = document.getElementsByClassName("  ");


        
        });
    }
)