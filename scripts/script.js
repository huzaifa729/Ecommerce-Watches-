
const password = document.getElementById('Password')
const Confirm = document.getElementById('C-Password')

function showHide(){
if(password.type === 'password'){
password.setAttribute("type","text")
}
else{
password.setAttribute("type","password")
}
}
function ConfirmPassword(){
    if(Confirm.type==="password"){
        Confirm.setAttribute("type","text")
    }
    else{
        Confirm.setAttribute("type","password")
        }
}


