import { Component } from '@angular/core';
import { Tarea, TareaService } from 'src/app/sercicios/tarea.service';

@Component({
  selector: 'app-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css']
})
export class TareaFormularioComponent {
  nuevaTarea: Tarea = { titulo: '', descripcion: '' };

  constructor(private tareaService: TareaService) {}

  guardarTarea() {
    this.tareaService.agregarTarea(this.nuevaTarea).subscribe(() => {
      alert('Tarea registrada con éxito');
      this.nuevaTarea = { titulo: '', descripcion: '' };
    });
  }
}