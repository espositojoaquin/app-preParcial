import { Component, OnInit } from '@angular/core';
import { ActorModel } from "../../modelos/model";
import { DataService } from "../../servicios/data.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  
  actor:ActorModel;

 constructor(private data:DataService,private toast:ToastrService) { }
  
 tomarActorParaDetalles(actor: ActorModel) {
  this.actor = actor;
}
borrarActor(id:string)
{ 
  
   this.data.deleteActor(id).then(res=>{
     this.toast.success("Actor eliminado con éxito","Completado");
   }).catch(res=>{
    this.toast.error(res,"Error");

   })

}

  ngOnInit(): void {
  }

}
