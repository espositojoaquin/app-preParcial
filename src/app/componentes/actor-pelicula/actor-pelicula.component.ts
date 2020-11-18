import { Component, OnInit } from '@angular/core';
import { ActorModel, Nacionalidad, PeliculaModel } from "../../modelos/model";
import { DataService } from "../../servicios/data.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  actor:ActorModel;
  lista:Array<PeliculaModel>;
  nacionalidad:any;
  mostrarPelis = false;


 constructor(private data:DataService,private toast:ToastrService) { }

 tomarActorParaDetalles(actor: ActorModel) {
  this.actor = actor;
  this.nacionalidad = this.actor.nacionalidad;
}

peliculas()
{ 
  this.data.getPelis().subscribe(res =>{
    this.lista =res.filter(pe => pe.actor.id == this.actor.id);
    this.mostrarPelis = this.lista.length > 0 ? true:false;
  })

  // this.data.getPaises().subscribe(res=>{
  //   this.nacionalidad = (res.filter(na => na.nombre == this.actor.nacionalidad.name))[0];
  // })
}

  ngOnInit(): void {
  }

}
