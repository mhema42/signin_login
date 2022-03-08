var strength = {
0: "För svagt lösenord",
1: "För svagt lösenord",
2: "För svagt lösenord",
3: "Ok lösenord",
4: "Starkt lösenord"
}

var password = document.getElementById('signup_pwd');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);

    // Update the password strength meter
    meter.value = result.score;
   
    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "<strong>" + strength[result.score]; 
    }
    else {
        text.innerHTML = "";
    }
});

document.getElementById("menu-login").addEventListener("click", open_login);
document.getElementById("open-login").addEventListener("click", open_login);
document.getElementById("open-signup").addEventListener("click", open_signup);
document.getElementById("close-login-btn").addEventListener("click", close_modal);
document.getElementById("close-signup-btn").addEventListener("click", close_modal);

function open_login() {
    document.getElementById("signup-modal").classList.remove("show");
    document.getElementById("login-modal").classList.toggle("show");
    document.getElementById("layer").classList.toggle("show");
}

function open_signup() {
    document.getElementById("login-modal").classList.toggle("show");
    document.getElementById("signup-modal").classList.toggle("show");
}

function close_modal() {
    document.getElementById("login-modal").classList.remove("show");
    document.getElementById("signup-modal").classList.remove("show");
    document.getElementById("layer").classList.remove("show");
}