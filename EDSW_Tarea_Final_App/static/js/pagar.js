function pagar(event){

    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const targeta = document.getElementById('targeta');
    const alerta_comprar_error = document.getElementById('alerta_comprar_error');

    if (telefono.value == "" || telefono.value.length !== 8){
        event.preventDefault();
        alerta_comprar_error.style.display = 'block';
        telefono.style.border = '2px solid red';
    }
    if (targeta.value == "" || targeta.value.length !== 16){
        event.preventDefault();
        alerta_comprar_error.style.display = 'block';
        targeta.style.border = '2px solid red';
    }
    if (direccion.value == ""){
        event.preventDefault();
        alerta_comprar_error.style.display = 'block';
        direccion.style.border = '2px solid red';
    }

    if (targeta.value !== ""){
        targeta.style.border = '1px solid black';
    }
    if (direccion.value !== ""){
        direccion.style.border = '1px solid black';
    }

    if(telefono.value !== "" && direccion.value == ""){
        telefono.style.border = '1px solid black';
        direccion.style.border = '2px solid red';
    }
    if(telefono.value == "" && direccion.value !== ""){
        telefono.style.border = '2px solid red';
        direccion.style.border = '1px solid black';
    }

}

function validar_telefono(event){

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

function validar_targeta(event){

    let telefono_input = document.getElementById('targeta');
    let telefono = telefono_input.value.trim();
    let patron_numerico = /^\d{1,16}$/;

    if(telefono_input.value.charAt(0) !== '9'){
        event.preventDefault();
        telefono_input.style.border = '2px solid red';
        telefono_input.value = "";
    }

    if(!patron_numerico.test(telefono)){
        event.preventDefault();
        telefono_input.style.border = '2px solid red';
        telefono_input.value = "";
        alert('El número de targeta que introdujo contiene letras, el campo se borrará para que introduzca un número de targeta válido.');
    }

    if(telefono_input.value.length == 8){
        telefono_input.style.border = '1px solid black';
    }

}


function cancelar_pagar(){

    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const targeta = document.getElementById('targeta');
    const alerta_comprar_error = document.getElementById('alerta_comprar_error');

    alerta_comprar_error.style.display = 'none';
  
    telefono.style.border = '1px solid black'
    targeta.style.border = '1px solid black'
    direccion.style.border = '1px solid black' 

    telefono.value = "";
    targeta.value = "";
    direccion.value = "";

}