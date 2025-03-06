document.getElementById('add-money').addEventListener('click',function (event){
    event.preventDefault();
    const amount=document.getElementById('amount').value;
    const convertedAmount=parseFloat(amount);
    const pinNumber = document.getElementById('Pin-Number').value;
    const convertedPinNumner = parseInt(pinNumber);
    const mainbalance=document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainbalance);

    if (convertedPinNumner===1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
        console.log("pin is foles")
    }
})