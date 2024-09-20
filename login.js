// LogIn Section
document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    let phoneNumber = document.getElementById('phone-num').value;
    let pinNumber = document.getElementById('pin-num').value;
    if(phoneNumber === '01926002688' && pinNumber ==='1234'){
        console.log('you login SuccessFully')
        window.location.href='./home.html';
    }
    else{
        alert('Wrong your number or pin');
    }

})
