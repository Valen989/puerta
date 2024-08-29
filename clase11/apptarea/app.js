const prompt = require('prompt-sync')({sigint : true});

const {listarTareas,agregarTarea,actualizarTarea,eliminarTarea,filtrarTareasPorEstado} = require('./moduloTareas.js')


function mostrarMenu() {
    console.clear();
    console.log('*****MENU*****');
    console.log('1-LISTAR tareas');
    console.log('2-AGREGAR tarea');
    console.log('3-ACTUALIZAR tarea');
    console.log('4-ELIMINAR tarea');
    console.log('5-FILTRAR tareas');
    console.log('0-SALIR');
    console.log('**************');
}

function mostrarInterfaz() {
    let opcion = -1;
    while (opcion != 0) {
        mostrarMenu()
        opcion = +prompt('Elejí una opción: ')
        console.clear();
        let idTarea
        let respuesta
        let estado
        switch (opcion) {
            case 1:
                console.log("LISTANDO tareas...");
                listarTareas()
                break;
            case 2:
                console.log("AGREGANDO tarea");
                let nombre = prompt("Escribir el nombre de la tarea: ")
                agregarTarea(nombre) 

                break;
            case 3:
                console.log("Actualizando tareas");
                listarTareas()
                idTarea = prompt('Escribir id de la tarea: ')
                respuesta =  actualizarTarea(idTarea)

                console.log(respuesta);
                break;
            case 4 :
                console.log("ELIMINANDO tarea");
                listarTareas()
                idTarea = prompt('Escribir id de la tarea: ')
                respuesta = eliminarTarea(idTarea)
                console.log(respuesta);
                
                break;
            case 5 :
                console.log("FILTRANDO tareas");
                estado = "x"
                while (estado.toLowerCase() !== "p" && estado.toLocaleLowerCase() !== "f") {
                   estado = prompt("Filtrar tareas pendientes (P) o finalizada (F)")
                }

                filtrarTareasPorEstado(estado)

                break;
            case 0 :
                console.log("GRACIAS TOTALES!!!");
                break;

            default:
                console.log("ERROR!!");
                
                break;
        }
        if (opcion !=0 ) {
            prompt('Presiona una tecla...')
        }
       

    }
}

mostrarInterfaz()





