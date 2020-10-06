import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from "../environments/environment";
import { MenuComponent } from './componentes/menu/menu.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculasComponent } from './componentes/detalle-peliculas/detalle-peliculas.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';

//toast alert
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    MenuComponent,
    TablaPeliculaComponent,
    DetallePeliculasComponent,
    TablaActorComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
