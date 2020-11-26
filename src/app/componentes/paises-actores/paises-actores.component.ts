import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-paises-actores',
  templateUrl: './paises-actores.component.html',
  styleUrls: ['./paises-actores.component.css']
})
export class PaisesActoresComponent implements OnInit {
  paisSeleccionado:any
  lista:any
  peliculas:any
  actor:any
  constructor( private datos:DataService) { }
  
  filtro:any;
  ngOnInit(): void {
  }
  
  paisSelec(item:any)
  { 
    this.paisSeleccionado = item;
   // lista = this
    this.datos.getActores().subscribe(res => {
      console.info("res", res);
      this.lista = res.filter(res =>res.estado == 1 && res.nacionalidad.name == item.name);
    })
    this.datos.getPelis().subscribe(res =>{
      this.peliculas = res.filter(res =>res.estado == 1 && res.nacionalidad.name == item.name);
    })
  }

  actorSeleccionado(item:any)
  { 
    
    this.actor = item;
    console.log(item);
  }
}
