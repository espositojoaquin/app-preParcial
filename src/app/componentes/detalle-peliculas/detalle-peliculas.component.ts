import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { PeliculaModel } from "../../modelos/model";
@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.component.html',
  styleUrls: ['./detalle-peliculas.component.css']
})
export class DetallePeliculasComponent implements OnInit {
  
  @Input() pelicula: PeliculaModel;
  @Input() borrado: number;
  @Output() eventoBorrarPelicula = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  borrarPelicula(id: string) {
    this.eventoBorrarPelicula.emit(id);
    this.pelicula = null; 
}

}
