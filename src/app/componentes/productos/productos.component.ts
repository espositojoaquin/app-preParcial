import { Component, OnInit } from '@angular/core';
import { Productos } from "../../modelos/model";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos:Productos;
  constructor() { }

  ngOnInit(): void {
    
  }
  tomarProductosParaDetalles(productos: Productos) {
    this.productos = productos;
    console.info(productos);
  }


}
