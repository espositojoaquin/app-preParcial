import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { DataService} from "../../servicios/data.service";
import { ActorModel } from "../../modelos/model";

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  
  @Input() mostrarB:boolean; 
  listado:Array<ActorModel>
  @Output() ActorSeleccionado: EventEmitter <ActorModel> = new EventEmitter();
  @Output() mostrarE: EventEmitter <boolean> = new EventEmitter();
  @Output() mostrarD: EventEmitter <boolean> = new EventEmitter();
  @Output() mostrarM: EventEmitter <boolean> = new EventEmitter();
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

    mostrar(a:string,actor:any)
    { 
      this.ActorSeleccionado.emit(actor);
        switch(a)
        {  
          case "E":
            this.mostrarE.emit(true);
            break;

          case "D":
            this.mostrarD.emit(true);
            
            break;

          case "M":
            this.mostrarM.emit(true);
            break;
       }
    }

}
