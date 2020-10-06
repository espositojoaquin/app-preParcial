import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { DataService} from "../../servicios/data.service";
import { PeliculaModel } from "../../modelos/model";

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  
  public listado: Array<PeliculaModel>;
  @Output() peliculaSeleccionada: EventEmitter <PeliculaModel> = new EventEmitter();
  @Output() indexPeliculaSeleccionada: EventEmitter <number> = new EventEmitter();
  constructor(private datos:DataService) { }
  seleccionarPelicula(pelicula:PeliculaModel, index: number) {
    console.log(pelicula);
    console.log(index);
    this.peliculaSeleccionada.emit(pelicula);
    this.indexPeliculaSeleccionada.emit(index);
}
  ngOnInit(): void {
   
    this.datos.getPelis().subscribe(res => {
      console.info("res", res);
      this.listado = res.filter(res =>res.estado == 1);
    })
  }

}
