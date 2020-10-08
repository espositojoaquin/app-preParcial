import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { PeliculaModel,Productos } from "../../modelos/model";
import { ProductosService } from "../../servicios/productos.service";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  public listado: Array<PeliculaModel>;
  @Output() productoSeleccionado: EventEmitter <Productos> = new EventEmitter();
  constructor(private data:ProductosService) { }

  seleccionarProductos(producto:Productos) {
    console.log(producto);
    this.productoSeleccionado.emit(producto);
    
}

  ngOnInit(): void {

    this.data.getProductos().subscribe(res => {
      console.info("res", res);
      this.listado = res.filter(res =>res.estado == 1);
    })
  }

}
