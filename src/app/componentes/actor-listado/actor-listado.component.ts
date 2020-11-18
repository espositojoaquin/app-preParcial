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
  mostrarD:boolean;
  mostrarE:boolean;
  mostrarM:boolean;

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

mostrar(op:string,item:boolean)
{
  switch(op)
  {  
    case "E":
      this.mostrarE = item;
      this.mostrarD = false;
      this.mostrarM = false;

      break;

    case "D":
      this.mostrarD = item;
      this.mostrarE = false;
      this.mostrarM = false;

      
      break;

    case "M":
      this.mostrarM = item;
      this.mostrarD = false;
      this.mostrarE = false;

      break;
 }
}

  ngOnInit(): void {
  }

}
