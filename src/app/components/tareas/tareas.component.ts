import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
    listaTareas: Tarea[] = [];
    nombreTarea = '';

    constructor() { }

    ngOnInit(): void {
    }

    agregarTarea(){
        // Crear objeto tarea
        const tarea: Tarea = {
            nombre: this.nombreTarea,
            estado: false
        }

        // agregar objeto tarea al array
        this.listaTareas.push(tarea);

        // Resetform
        this.nombreTarea = ''; 
    }

    eliminarTarea(indice: number): void {
        this.listaTareas.splice(indice,1);
    }

    actualizarTarea(indice: number, tarea: Tarea): void{
        this.listaTareas[indice].estado = !tarea.estado;
    }

}
