
document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const digitPin = document.getElementById("digit-pin").value;
    const convertedDigitPin=parseInt(digitPin)

    if(mobileNumber.length===11) {
        
        if (convertedDigitPin===1234){
            window.location.href="./main.html"
        }
        else
        alert("Triy Your Passwored")
    }
    else{
    alert("not valid your mobile number")}

})