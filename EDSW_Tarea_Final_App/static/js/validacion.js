function validar_formulario(event){

    const formulario_nombre = document.getElementById('formulario_nombre');
    const formulario_apellido = document.getElementById('formulario_apellido');
    const formulario_email = document.getElementById('formulario_email');
    const formulario_sms = document.getElementById('formulario_sms');

    const formulario_campos_alert = document.getElementById('formulario_campos_alert');
    const formulario_nombre_alert = document.getElementById('formulario_nombre_alert');
    const formulario_apellido_alert = document.getElementById('formulario_apellido_alert');

    if(formulario_nombre.value === ""){
        formulario_campos_alert.style.display = 'block';
        formulario_nombre.style.border = '2px solid red';
        event.preventDefault();
    }
    if(formulario_apellido.value === ""){
        formulario_campos_alert.style.display = 'block';
        formulario_apellido.style.border = '2px solid red';
        event.preventDefault();
    }
    if(formulario_email.value === ""){
        formulario_campos_alert.style.display = 'block';
        formulario_email.style.border = '2px solid red';
        event.preventDefault();
    }
    if(formulario_sms.value === ""){
        formulario_campos_alert.style.display = 'block';
        formulario_sms.style.border = '2px solid red';
        event.preventDefault();
    }


    if(formulario_nombre.value.charAt(0) !== formulario_nombre.value.charAt(0).toUpperCase()){
        event.preventDefault();
        formulario_nombre_alert.style.display = 'block';
        formulario_nombre.style.border = '2px solid red';
    }
    if(formulario_nombre.value !== "" && formulario_nombre.value.charAt(0) === formulario_nombre.value.charAt(0).toUpperCase()){
        formulario_nombre_alert.style.display = 'none';
        formulario_nombre.style.border = '1px solid black';
    }

    if(formulario_apellido.value.charAt(0) !== formulario_apellido.value.charAt(0).toUpperCase()){
        event.preventDefault();
        formulario_apellido_alert.style.display = 'block';
        formulario_apellido.style.border = '2px solid red';
    } 
    if(formulario_apellido.value !== "" && formulario_apellido.value.charAt(0) === formulario_apellido.value.charAt(0).toUpperCase()){
        formulario_apellido_alert.style.display = 'none';
        formulario_apellido.style.border = '1px solid black';
    }


    if(formulario_email.value !== "" && formulario_sms.value !== ""){
        formulario_campos_alert.style.display ='none';
        formulario_email.style.border = '1px solid black';
        formulario_sms.style.border = '1px solid black';
    }
    if(formulario_email.value !== "" && formulario_sms.value == ""){
        formulario_email.style.border = '1px solid black';
    }
    if(formulario_email.value == "" && formulario_sms.value !== ""){
        formulario_sms.style.border = '1px solid black';
    }

}

function cancelar_validar_formulario(){

    const formulario_nombre = document.getElementById('formulario_nombre');
    const formulario_apellido = document.getElementById('formulario_apellido');
    const formulario_email = document.getElementById('formulario_email');
    const formulario_sms = document.getElementById('formulario_sms');

    const formulario_campos_alert = document.getElementById('formulario_campos_alert');
    const formulario_nombre_alert = document.getElementById('formulario_nombre_alert');
    const formulario_apellido_alert = document.getElementById('formulario_apellido_alert');

    formulario_campos_alert.style.display = 'none';
    formulario_nombre_alert.style.display = 'none';
    formulario_apellido_alert.style.display = 'none';

    formulario_nombre.value = "";
    formulario_apellido.value = "";
    formulario_email.value = "";
    formulario_sms.value = "";

    formulario_nombre.style.border = '1px solid black';
    formulario_apellido.style.border = '1px solid black';
    formulario_email.style.border = '1px solid black';
    formulario_sms.style.border = '1px solid black';

}

function validar_oferta_trabajo(event){

    const trabajo_name = document.getElementById('nombre');
    const trabajo_firstname = document.getElementById('apellido');
    const trabajo_birth = document.getElementById('nacimiento');
    const trabajo_email = document.getElementById('email');
    const trabajo_phone = document.getElementById('telefono');
    const trabajo_sms = document.getElementById('laboral');

    const formulario_campos_alert = document.getElementById('formulario_campos_alert');
    const formulario_nombre_alert = document.getElementById('formulario_nombre_alert');
    const formulario_apellido_uno_alert = document.getElementById('formulario_apellido_uno_alert');


    if(trabajo_name.value == ""){
        event.preventDefault();
        trabajo_name.style.border = '2px solid red';
        formulario_campos_alert.style.display = 'block';
    }
    if(trabajo_firstname.value == ""){
        event.preventDefault();
        trabajo_firstname.style.border = '2px solid red';
        formulario_campos_alert.style.display = 'block';
    }
    if(trabajo_birth.value == ""){
        event.preventDefault();
        trabajo_birth.style.border = '2px solid red';
        formulario_campos_alert.style.display = 'block';
    }
    if(trabajo_email.value == ""){
        event.preventDefault();
        trabajo_email.style.border = '2px solid red';
        formulario_campos_alert.style.display = 'block';
    }
    if(trabajo_phone.value == "" || trabajo_phone.value.length !== 8){
        event.preventDefault();
        trabajo_phone.style.border = '2px solid red';
        formulario_campos_alert.style.display = 'block';
    }
    if(trabajo_sms.value == ""){
        event.preventDefault();
        trabajo_sms.style.border = '2px solid red';
        formulario_campos_alert.style.display = 'block';
    }



    if(trabajo_name.value.charAt(0) !== trabajo_name.value.charAt(0).toUpperCase()){
        event.preventDefault();
        formulario_nombre_alert.style.display = 'block';
        trabajo_name.style.border = '2px solid red';
    }
    if(trabajo_name.value !== "" && trabajo_name.value.charAt(0) === trabajo_name.value.charAt(0).toUpperCase()){
        formulario_nombre_alert.style.display = 'none';
        trabajo_name.style.border = '1px solid black';
    }

    if(trabajo_firstname.value.charAt(0) !== trabajo_firstname.value.charAt(0).toUpperCase()){
        event.preventDefault();
        formulario_apellido_uno_alert.style.display = 'block';
        trabajo_firstname.style.border = '2px solid red';
    } 
    if(trabajo_firstname.value !== "" && trabajo_firstname.value.charAt(0) === trabajo_firstname.value.charAt(0).toUpperCase()){
        formulario_apellido_uno_alert.style.display = 'none';
        trabajo_firstname.style.border = '1px solid black';
    }

    if(trabajo_email.value !== "" && trabajo_sms.value !== ""){
        formulario_campos_alert.style.display = 'none';
        trabajo_email.style.border = '1px solid black';
        trabajo_sms.style.border = '1px solid black';
    }
    if(trabajo_email.value !== "" && trabajo_sms.value == ""){
        trabajo_email.style.border = '1px solid black';
    }
    if(trabajo_email.value == "" && trabajo_sms.value !== ""){
        trabajo_sms.style.border = '1px solid black';
    }

}

function obtener_hora(event){

    let fecha_input = document.getElementById('nacimiento');
    let fecha_seleccionada = new Date(fecha_input.value);
    let fecha_actual = new Date();

    if(fecha_seleccionada.getTime() > fecha_actual.getTime()){
        event.preventDefault();
        alert('La fecha es mayor a la del día de hoy, el campo se borrará para que introduzca una fecha válida.');
        fecha_input.value = "";
        fecha_input.style.border = '2px solid red';
    }else{
        fecha_input.style.border = '1px solid black';
    }
}

function validar_email(event){

    let email_input = document.getElementById('email');
    let dominio = email_input.value.split('@')[1];

    if(/\d/.test(dominio)){
        alert('El dominio contiene números, el campo se borrará para que introduzca un email válido.');
        email_input.value = "";
    }
}

function validar_email_contacto(event){

    let email_input = document.getElementById('formulario_email');
    let dominio = email_input.value.split('@')[1];

    if(/\d/.test(dominio)){
        alert('El dominio contiene números, el campo se borrará para que introduzca un email válido.');
        email_input.value = "";
    }
}

function validar_numero_telefono(event){

    let telefono_input = document.getElementById('telefono');
    let telefono = telefono_input.value.trim();
    let patron_numerico = /^\d{1,8}$/;

    if(telefono_input.value.charAt(0) !== '5'){
        event.preventDefault();
        telefono_input.style.border = '2px solid red';
        telefono_input.value = "";
    }

    if(!patron_numerico.test(telefono)){
        event.preventDefault();
        telefono_input.style.border = '2px solid red';
        telefono_input.value = "";
        alert('El número de teléfono que introdujo contiene letras, el campo se borrará para que introduzca un número de teléfono válido.');
    }

    if(telefono_input.value.length == 8){
        telefono_input.style.border = '1px solid black';
    }

}


function cancelar_validar_oferta_trabajo(){

    const trabajo_name = document.getElementById('nombre');
    const trabajo_firstname = document.getElementById('apellido');
    const trabajo_birth = document.getElementById('nacimiento');
    const trabajo_email = document.getElementById('email');
    const trabajo_phone = document.getElementById('telefono');
    const trabajo_sms = document.getElementById('laboral');

    const formulario_campos_alert = document.getElementById('formulario_campos_alert');
    const formulario_nombre_alert = document.getElementById('formulario_nombre_alert');
    const formulario_apellido_uno_alert = document.getElementById('formulario_apellido_uno_alert');

    formulario_campos_alert.style.display = 'none';
    formulario_nombre_alert.style.display = 'none';
    formulario_apellido_uno_alert.style.display = 'none';

    trabajo_name.value = "";
    trabajo_firstname.value = "";
    trabajo_birth.value = "";
    trabajo_email.value = "";
    trabajo_phone.value = "";
    trabajo_sms.value = "";

    trabajo_name.style.border = '1px solid black';
    trabajo_firstname.style.border = '1px solid black';
    trabajo_birth.style.border = '1px solid black';
    trabajo_email.style.border = '1px solid black';
    trabajo_phone.style.border = '1px solid black';
    trabajo_sms.style.border = '1px solid black';

}
