const inputDOM = document.querySelector('input');
const selectDOM = document.querySelector('select');
const buttonDOM = document.querySelector('button');
const tipDOM = document.querySelector('.tipNum');
const totalDOM = document.querySelector('.totalNum');




buttonDOM.addEventListener('click', () => {
    const tipAmount = (+inputDOM.value * (selectDOM.value / 100));
    console.log(inputDOM.value);
    console.log(tipAmount);
    
    tipDOM.textContent = `${tipAmount.toFixed(2)} $`;
    totalDOM.textContent = `${(+inputDOM.value + tipAmount).toFixed(2)} $`;
})

