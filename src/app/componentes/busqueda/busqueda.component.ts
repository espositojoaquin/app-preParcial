import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from "../../modelos/model";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  pelicula: PeliculaModel;
  constructor() { }
  tomarPeliculaParaDetalles(pelicula: PeliculaModel) {
    this.pelicula = pelicula;
    console.log("llega bien perri")
    console.info(this.pelicula)
}

  ngOnInit(): void {
  }

}
