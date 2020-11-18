import { Component, OnInit } from '@angular/core';
import { ActorModel, PeliculaModel } from '../../modelos/model';
import { DataService } from "../../servicios/data.service";
import { ToastrService } from 'ngx-toastr';
import {​​ FormBuilder, FormGroup, Validators }​​ from '@angular/forms';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  
  constructor( private dataSrv: DataService,private toast:ToastrService,private fb:FormBuilder) { 
  
  }
  pelicula:PeliculaModel = new PeliculaModel();
  actor:ActorModel = new ActorModel();
  hola:string;
  form:FormGroup;


  actorSeleccionado(actor:ActorModel)
  { 
    this.actor = actor;
    this.pelicula.actor = actor;
    this.form.patchValue({​​
      actor: actor.nombre
    }​​);
    
  }

  guardar()
  { 
   const {​​ nombre, tipo, fecha_estreno, cantidad_publico, actor }​​ = this.form.value;
   this.pelicula.nombre = nombre;
   this.pelicula.tipo = tipo;
   this.pelicula.fecha = fecha_estreno;
   this.pelicula.publico = cantidad_publico;
   this.pelicula.actor = this.actor;
   if(nombre && tipo && fecha_estreno && cantidad_publico && actor) {​​
    let a=this.dataSrv.addPelis(this.pelicula)
     if(a)
     {
       this.toast.success("Pelicula Agregada con éxito");
     }
   }
   else
   {
    this.toast.error("Datos inválidos");

   }

  }

 
  ngOnInit(): void {
    this.form = this.fb.group({​​
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha_estreno: ['', Validators.required],
      cantidad_publico: ['', Validators.required,Validators.min(0),Validators.max(1000)],
      actor: ['', Validators.required]
    }​​);

  


  }

  get nombre() {​​ return this.form.get('nombre'); }​​
  get tipo() {​​ return this.form.get('tipo'); }​​
  get fecha() {​​ return this.form.get('fecha_estreno'); }​​
  get cantidad() {​​ return this.form.get('cantidad_publico');}

  

}
