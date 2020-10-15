import { Component, OnInit } from '@angular/core';
import { ActorModel, PeliculaModel } from "../../modelos/model";
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
  mostrarPelis = false;

 constructor(private data:DataService,private toast:ToastrService) { }

 tomarActorParaDetalles(actor: ActorModel) {
  this.actor = actor;
}

peliculas()
{ 
  this.data.getPelis().subscribe(res =>{
    this.lista =res.filter(pe => pe.actor.id == this.actor.id);
    this.mostrarPelis = this.lista.length > 0 ? true:false;
  })
}

  ngOnInit(): void {
  }

}
