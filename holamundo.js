let hxr = new XMLHttpRequest();
//Se abre ña url destino holamundo.txt con get con comnicacion asincrona
hxr.open("GET","holamundo.txt",true);
//En cada cambio de estado (readyState) se llamara a la funcion estadoPeticion
hxr.addEventListener('readystatechange',estadoPeticion,false);
//Peticion al servidor como es por get no lleva parametros
hxr.send(null);
//la funcion estadoPeticion sera invocada a cambio de xmlhttreques
function estadoPeticion(){
    //si accede al objeto mediante la variable hxr o this
    //si readystate = 4 la pedicion habra acabado
    //si status = 200 la peticion abra cabado correctamente y se accedera al resultado
    if(this.readyState == 4 && this.status == 200){
        //la peticion ha finalizado correctamente
        let respuesta = this.responseText;
        //el cotenido de holamundo.txt se mostrara por consola
        document.write(respuesta);
    }
}