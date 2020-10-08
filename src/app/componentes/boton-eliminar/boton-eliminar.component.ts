import { Component, OnInit,Input } from '@angular/core';
import { Productos } from "../../modelos/model";
import { ProductosService } from "../../servicios/productos.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-boton-eliminar',
  templateUrl: './boton-eliminar.component.html',
  styleUrls: ['./boton-eliminar.component.css']
})
export class BotonEliminarComponent implements OnInit { 
  
  @Input() producto: Productos;
  constructor(private data:ProductosService,private toast:ToastrService) { }

  ngOnInit(): void {
  }

  borrarPelicula()
  {
    this.data.deleteProducto(this.producto.id.toString()).then(res=>{
      this.toast.success("Pelicula eliminada con éxito","Completado");
    }).catch(res=>{
     this.toast.error(res,"Error");

    })
  }

}
