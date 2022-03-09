const urlSearchP = new URLSearchParams(window.location.search);
const orderId = urlSearchP.get("orderId");
console.log(orderId);

document.getElementById("orderId").innerText = orderId;
localStorage.removeItem("canap_cart")