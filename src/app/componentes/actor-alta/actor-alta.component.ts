import { Component, OnInit } from '@angular/core';
import { DataService } from "../../servicios/data.service";
import { ActorModel } from '../../modelos/model';
import { ToastrService } from 'ngx-toastr';
import {​​ FormBuilder, FormGroup, Validators }​​ from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  
  constructor( private dataSrv: DataService,private toast:ToastrService,private fb:FormBuilder) { 
  
  }
  pais:any;
  actor:ActorModel = new ActorModel();
  form:FormGroup;
  
  ngOnInit(): void {
    this.form = this.fb.group({​​
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required],
      sexo: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    }​​);
  }
  get nombre() {​​ return this.form.get('nombre'); }​​
  get apellido() {​​ return this.form.get('apellido'); }​​
  get fecha() {​​ return this.form.get('fecha'); }​​
  get sexo() {​​ return this.form.get('sexo');}
  get nacionalidad() {​​ return this.form.get('nacionalidad');}

  paisSeleccionado(dato:any)
  { 
    this.pais=dato;
    this.actor.nacionalidad = dato.nombre;
    this.form.patchValue({​​
      nacionalidad: dato.nombre
    }​​);
    
  }
  /*
  export class ActorModel {
    id: string;
    nombre: string;
    apellido: string;
    sexo: string;
    fecha: string;
    nacionalidad:string;
    foto: string;
}
  */

  guardar()
  { 
   const {​​ nombre, apellido, sexo, fecha,nacionalidad }​​ = this.form.value;
   this.actor.nombre = nombre;
   this.actor.apellido = apellido;
   this.actor.sexo = sexo;
   this.actor.fecha = fecha;
   this.actor.nacionalidad = this.pais.nombre;
   if(nombre && apellido && sexo && fecha && nacionalidad) {​​
    let a=this.dataSrv.addActores(this.actor)
     if(a)
     {
       this.toast.success("actor Agregada con éxito");
     }
   }
   else
   {
    this.toast.error("Datos inválidos");

   }

  }

}
