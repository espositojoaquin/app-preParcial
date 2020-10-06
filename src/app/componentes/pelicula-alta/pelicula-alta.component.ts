import { Component, OnInit } from '@angular/core';
import { ActorModel, PeliculaModel } from '../../modelos/model';
import { DataService } from "../../servicios/data.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  
  constructor( private dataSrv: DataService,private toast:ToastrService) { 
  
  }
  pelicula:PeliculaModel = new PeliculaModel();
  actor:ActorModel = new ActorModel();
  hola:string;

  actorSeleccionado(actor:ActorModel)
  {
    this.pelicula.actor = actor;
    
  }

  guardar()
  { 
   let a=this.dataSrv.addPelis(this.pelicula)
    if(a)
    {
      this.toast.success("Pelicula Agregada con éxito");
    }
  }
 
  ngOnInit(): void {
  
  }

}
