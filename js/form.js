const enviarForm = (e) => {
    e.preventDefault();
    console.log('Estoy en proceso de envío...!')
    let inputname = document.querySelector("#name");
    if(inputname.value.length == 0)  {
        alert('No completaste el Nombre y Apellidos...');
        return false;
    }
    let inputemail = document.querySelector("#email");
    if(inputemail.value.length == 0) {
        alert('Falta tu email...');
        return false;
    }
    let inputtel = document.querySelector("#tel");
    if(inputtel.value.length == 0) {
        alert('Falta tu teléfono...');
        return false;
    }
    let inputguests = document.querySelector("#guests");
    if(inputguests.value.length == 0) {
        alert('Falta la cantidad de personas...');
        return false;
    }
    let inputmensaje = document.querySelector("#mensaje");
    if(inputmensaje.value.length == 0) {
        alert('Creemos que has olvidado tu Consulta 😉...');
        return false;
    }
}