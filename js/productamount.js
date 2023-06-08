const prodCount = document.querySelector('.productbram-grid__details__quantity__button__amount  ');
let prodAmount = 0;
prodCount.innerText = prodAmount;

function prodIncrease() {
    prodAmount++;
    prodCount.innerText = prodAmount;
}

function prodDecrease() {
    if (prodAmount > 0) {
        prodAmount--;
        prodCount.innerText = prodAmount;
    }
}
