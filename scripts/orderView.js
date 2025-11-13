window.onload = orderPage();
function orderPage() {
    let html = '';
    html = /*HTML*/ `

    <div class="orderWrapper">
        <div class="orderForm">${viewOrderForm()}</div>
    </div>
    <button class="printBtn" style="justify-self: left;" onclick="goToStoreHome()">CANCEL</button>

    `;
    order.innerHTML = html;
}

function viewOrderForm() {
    let opt = loadOrder();
    let html = '';
    let pantTypeSrc = opt[3].visible ? opt[3].src : opt[0].src;
    html = `
   <img src="${pantTypeSrc}">
    <div>${opt[0].descr}</div>
    <div> ${opt[1].visible}</div>
    <div>Pleats: ${opt[2].selected}</div>
    <div>${opt[3].visible}</div>
    <div>${opt[4].visible}</div>
    <div>Size: ${opt[5].size}</div>
    `;
    return html;
    console.log('FUCK');
}
