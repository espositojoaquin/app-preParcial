import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from "../../modelos/model";
import { DataService } from "../../servicios/data.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  pelicula: PeliculaModel;
  constructor(private data:DataService,private toast:ToastrService) { }

  tomarPeliculaParaDetalles(pelicula: PeliculaModel) {
    this.pelicula = pelicula;
  }
  borrarPelicula(id:string)
  { 

     this.data.deleteMovie(id).then(res=>{
       this.toast.success("Pelicula eliminada con éxito","Completado");
     }).catch(res=>{
      this.toast.error(res,"Error");

     })

  }


  ngOnInit(): void {
  }

}
