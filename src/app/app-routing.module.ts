import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { PeliculaAltaComponent } from "./componentes/pelicula-alta/pelicula-alta.component";
import { PeliculaListadoComponent } from "./componentes/pelicula-listado/pelicula-listado.component";
import { ActorAltaComponent } from "./componentes/actor-alta/actor-alta.component";
import { ActorListadoComponent } from "./componentes/actor-listado/actor-listado.component";
import { MenuComponent } from "./componentes/menu/menu.component";
import { BienvenidoComponent } from "./componentes/bienvenido/bienvenido.component";
import { ProductosComponent } from "./componentes/productos/productos.component";
import { BusquedaProductoComponent } from "./componentes/busqueda-producto/busqueda-producto.component";
import { PaisesListadoComponent } from "./componentes/paises-listado/paises-listado.component";




const routes: Routes = [
 {path:'',component:BienvenidoComponent},
 {path:'Bienvenido',component:BienvenidoComponent},
 {path:'PaicesListado',component:PaisesListadoComponent},
 {path:'BusquedaProducto',component:BusquedaProductoComponent},
 {path:'Productos',component:ProductosComponent},
 {path:'Busqueda',component:BusquedaComponent},
 {path:'PeliculaAlta',component:PeliculaAltaComponent},
 {path:'PeliculaLista',component:PeliculaListadoComponent},
 {path:'ActorAlta',component:ActorAltaComponent},
 {path:'ActorListado',component:ActorListadoComponent},
 {path:'Menu',component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
