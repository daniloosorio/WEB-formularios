window.onload = function(){
    document.getElementById("submit").onclick = mostrar;
}

function mostrar(){
    
    var elementos = document.FORMULARIO2.elements;
    for(var i = 0; i < elementos.length; i++){
        switch(elementos[i].type){
            case "text":
                //elementos[i].onfocus = enfoco;
                alert(elementos[i].name + " : " + elementos[i].value);
                break;

            case "radio":
                alert(elementos[i].name + " :" + elementos[i].value + " :" + elementos[i].checked)
                break;

            case "checkbox":
                alert( elementos[i].name + " :" + elementos[i].value + " :" + elementos[i].checked)
                break;
        }
    }
    alert("Comentario: " + document.getElementsByName("coment")[0].value);
    var seleccion = document.getElementsByName("opcion")[0];
    var posicion = seleccion.selectedIndex;
    var valor = seleccion.options[posicion].value;
    alert("Opción seleccionada: " + valor ); 
}