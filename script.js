function enviar(){
    var email = document.getElementById("emailtxt")
    var res = document.getElementById("res")
    if (email.value.length == 0 ){
            res.innerHTML = "Por favor, digite um email válido!"
        
    }
}