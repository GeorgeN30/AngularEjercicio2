import { Component, OnInit } from '@angular/core';
import { TareaService, Tarea } from 'src/app/sercicios/tarea.service';

@Component({
  selector: 'app-tareas-lista',
  templateUrl: './tareas-lista.component.html'
})
export class TareasListaComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this.tareaService.obtenerTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  completarTarea(id: number) {
    this.tareaService.marcarComoCompletada(id).subscribe(() => {
      this.obtenerTareas(); // refrescar lista
    });
  }
}
