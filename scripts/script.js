
const password = document.getElementById('Password')
const Confirm = document.getElementById('C-Password')
function showHide(){
if(password.type === 'password'){
password.setAttribute("type","text")
document.getElementById('icons').className="fa-solid fa-unlock"
}
else{
password.setAttribute("type","password")
document.getElementById('icons').className="fa-solid fa-lock"

}
}
function ConfirmPassword(){
    if(Confirm.type==="password"){
        Confirm.setAttribute("type","text")
        document.getElementById('icon').className="fa-solid fa-unlock"
    }
    else{
        Confirm.setAttribute("type","password")
        document.getElementById('icon').className="fa-solid fa-lock"
        }
}
function login(){
    alert("Successfully login");
}
function Register(){
    alert("Successfully Register")
}



