import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ProductosService } from "../../servicios/productos.service";
import { Productos } from "../../modelos/model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  constructor(private data:ProductosService,private toast:ToastrService) { }
  @Output() eventoDatoProducto = new EventEmitter<any>();
  
  ngOnInit(): void {

  }
  buscarProducto(terminoDeBusqueda: string) {
   
    console.info(terminoDeBusqueda);
    this.data.searchProducto(terminoDeBusqueda).then(res =>{
      if(res!="0")
      { 
        console.info(res);
        this.eventoDatoProducto.emit(res);

      }
      else
      { 
        this.toast.error("No exite el producto indicado","Error");
        
      }
      

    }).catch(error=>{
      console.log("llega Mal")
      console.info(error);
    })
   
  }

}
