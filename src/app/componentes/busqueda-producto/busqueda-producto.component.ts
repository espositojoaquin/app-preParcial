import { Component, OnInit } from '@angular/core';
import { Productos } from "../../modelos/model";

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {
  
  producto:Productos;
  constructor() { }
  ngOnInit(): void {
  }

  tomarProducto(prod:Productos)
  {   
     this.producto = prod;
       console.info(this.producto); 
  }
  cerrar()
  {
    this.producto=null;
  }

}
