import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ActorModel  } from "../../modelos/model";
import {​​ FormBuilder, FormGroup, Validators }​​ from '@angular/forms';
import { DataService } from 'src/app/servicios/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.css']
})
export class UpdateActorComponent implements OnInit {

  @Input() actor: ActorModel;
  @Input() mostrarM: boolean;
  @Output() eventoUpdateActor = new EventEmitter<string>();
  form:FormGroup;
  paises:any;
  pais:any;
 
  constructor(private dataSrv: DataService,private toast:ToastrService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({​​
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required],
      sexo: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    }​​);
    this.dataSrv.getPaisesService().subscribe(res =>{
      this.paises = res;
    })
    
  }

  get nombre() {​​ return this.form.get('nombre'); }​​
  get apellido() {​​ return this.form.get('apellido'); }​​
  get fecha() {​​ return this.form.get('fecha'); }​​
  get sexo() {​​ return this.form.get('sexo');}
  get nacionalidad() {​​ return this.form.get('nacionalidad');}

 
  /* updateActor(id: string) {
    this.eventoUpdateActor.emit(id);
    this.actor = null; 
}*/

    paisSeleccionado(item:any)
    { 
      
      this.nacionalidad.setValue(item);
      this.pais = item.name;
    }

    guardar()
    { 
          const {​​ nombre, apellido, sexo, fecha,nacionalidad }​​ = this.form.value;
          this.actor.nombre = nombre? nombre:this.actor.nombre;
          this.actor.apellido = apellido? apellido:this.actor.apellido;
          this.actor.sexo = sexo?sexo:this.actor.sexo;
          this.actor.fecha = fecha?fecha:this.actor.fecha;
         this.actor.nacionalidad = nacionalidad?nacionalidad:this.actor.nacionalidad;
        
          console.info(this.actor);
          let a=this.dataSrv.updateActor(this.actor)
            if(a)
            {
              this.toast.success("Actor Modificado con éxito");
              this.actor = null; 
            }

    }

}
