import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService} from "../../servicios/data.service";
import { ActorModel } from "../../modelos/model";

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  
  listado:Array<ActorModel>
  @Output() ActorSeleccionado: EventEmitter <ActorModel> = new EventEmitter();
  constructor(private datos:DataService) { }

  ngOnInit(): void {
    this.datos.getActores().subscribe(res => {
      console.info("res", res);
      this.listado = res.filter(res =>res.estado == 1);
    })
  }
 
  seleccionarActor(actor:ActorModel) {
    console.log(actor);
    this.ActorSeleccionado.emit(actor);
}

}
