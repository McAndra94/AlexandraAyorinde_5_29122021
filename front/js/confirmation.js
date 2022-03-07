const urlSearchParams = window.location.href;
const orderUrl = new URL(urlSearchParams);
const orderId = orderUrl.searchParams.get("orderId");
console.log(orderId);

document.getElementById("orderId").innerText = orderId;