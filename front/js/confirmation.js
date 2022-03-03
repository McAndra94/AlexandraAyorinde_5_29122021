const UrlSP = new URLSearchParams(window.location.search);
const idProduct = UrlSP.get("orderId");
console.log(idProduct);

var spanOrderId = document.getElementById("orderId")
