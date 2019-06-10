const app = new Vue({

    el: '#app',//Se realiza llamada de container
    data: {
        titulo: 'GYM con Vue',
        //Array
        
        tareas: [],
        
        //Variable para V-Model
        nuevaTarea: ''
    },

    methods: {
        agregarTarea: function () {
            //    console.log('diste un click');

            //Se declara array 
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });

            console.log(this.tareas);
            
            this.nuevaTarea = '';//Se limpia input 
            localStorage.setItem('gymVue', JSON.stringify(this.tareas));//Envia item a created function

        },

        editarTarea: function(index){//Recibe de Boton Ok
            this.tareas[index].estado = true;
            localStorage.setItem('gymVue', JSON.stringify(this.tareas));//Envia item a created function
            // console.log('editar', index);
        },

        eliminarTareas: function(index){
            this.tareas.splice(index, 1)//Elimina una tarea de la lista
            localStorage.setItem('gymVue', JSON.stringify(this.tareas));//Envia item a created function
        }

    },
    //Fuera de metodos función que se inicia al principio
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gymVue')); 
        if( datosDB == null){ //Compara si variable viene vacia
            this.tareas = [];//Se envia array vacio
        }else{
            this.tareas = datosDB; //se envia el valor de datosDB
        }
    }




});