document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia a los desplegables
    var provinciaSelect = document.getElementById('provincia');
    var municipioSelect = document.getElementById('municipio');

    // Cargar provincias al cargar la pagina
    cargarProvincias();

    // Agregar evento de cambio al desplegable de provincias
    provinciaSelect.addEventListener('change', function () {
        var selectedProvincia = provinciaSelect.value;
        if (selectedProvincia !== "") {
            cargarMunicipios(selectedProvincia);
        } else {
            // Limpiar desplegable de municipios si no hay provincia seleccionada
            municipioSelect.innerHTML = '<option>- selecciona una provincia -</option>';
        }
    });

    // Funcion para cargar las provincias mediante AJAX
    function cargarProvincias() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "provinciasJson.php", true);
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var provincias = JSON.parse(xhr.responseText);
                console.log('Provincias:', provincias);
                llenarDesplegable(provincias, provinciaSelect);
            }
        });
        xhr.send();
    }
    

    // Funcion para cargar los municipios mediante AJAX
    function cargarMunicipios(provincia) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "cargaMunicipiosJson.php?provincia=" + provincia, true);
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var municipios = JSON.parse(xhr.responseText);
                console.log('Municipios:', municipios);
                llenarDesplegable(municipios, municipioSelect);
            }
        });
        xhr.send();
    }

    // Funcion para llenar un desplegable con opciones
    function llenarDesplegable(data, selectElement) {
        // Limpiar desplegable
        selectElement.innerHTML = '';

        // Agregar opciones al desplegable
        for (var i = 0; i < data.length; i++) {
            var option = document.createElement('option');
            option.value = data[i].codigo;
            option.text = data[i].nombre;
            selectElement.appendChild(option);
        }
    }
});
