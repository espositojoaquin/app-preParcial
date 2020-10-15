import { Component, OnInit,Input } from '@angular/core';
import { ActorModel,PeliculaModel } from 'src/app/modelos/model';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-peliculas-de-actor',
  templateUrl: './peliculas-de-actor.component.html',
  styleUrls: ['./peliculas-de-actor.component.css']
})
export class PeliculasDeActorComponent implements OnInit {
  
  @Input() peliculas: Array<PeliculaModel> = new Array<PeliculaModel>();
  @Input() cantidad;
  constructor(private datos:DataService) { }

  ngOnInit(): void {
  
  }



}
