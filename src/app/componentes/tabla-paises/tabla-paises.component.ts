import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService} from "../../servicios/data.service";

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  
  listado:Array<any>
  @Output() PaisSeleccionado: EventEmitter <any> = new EventEmitter();
  constructor(private datos:DataService) { }

  ngOnInit(): void {
    this.datos.getPaises().subscribe(res => {
      console.info("res", res);
      this.listado = res;
    })
  }

  seleccionarPais(pais:any) {
    console.log(pais);
    this.PaisSeleccionado.emit(pais);
}

}