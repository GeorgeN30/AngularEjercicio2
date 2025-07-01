import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  completada?: boolean;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  agregarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  marcarComoCompletada(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}/completar`, {});
}

}
