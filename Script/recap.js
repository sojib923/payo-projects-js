document.getElementById('add-money').addEventListener("click",function (event){
    event.preventDefault();
    const pinNumber = document.getElementById("Pin-Number").value;
    const convertedPinNumner = parseInt(pinNumber);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance=document.getElementById ("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && pinNumber) {
        if (convertedPinNumner === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
            console.log("Ok")
        }
        else{
            alert("Enter velid Pin Number")
        }

    }
    else {
        alert("Enter Amonut")
    }
})