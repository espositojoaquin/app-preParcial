import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { ActorModel } from "../../modelos/model";

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {
  
  @Input() actor: ActorModel;
  @Input() borrado: number;
  @Output() eventoBorrarActor = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

   borrarActor(id: string) {
    this.eventoBorrarActor.emit(id);
    this.actor = null; 
}

}
