import { query } from '@angular/animations';
import { Injectable, Query } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PeliculaModel } from "../modelos/model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  user: any;
  dbPelisRef: AngularFirestoreCollection<any>;
  dbActores: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { 
    this.dbPelisRef = this.db.collection("peliculas");
    this.dbActores = this.db.collection("actores");
  } 

  addPelis(pelicula:PeliculaModel){
   return this.db.collection("peliculas").get().subscribe(res =>{
      console.log("info id");
      let id = res.size + 1;
      console.log(id);
       this.db.collection("peliculas").doc(id.toString()).set({

        nombre: pelicula.nombre,
        id:id,
        estado:1,
        actor:pelicula.actor.nombre +" "+ pelicula.actor.apellido,
        fecha: pelicula.fecha,
        publico:pelicula.publico,
        tipo:pelicula.tipo,
        foto: "https://ignaciosantiago.com/wp-content/uploads/2013/08/Sabes-cuando-es-la-calidad-de-una-pelicula-en-internet-mejor-o-peor-2.jpg"
       })
    })
  }

  pelisAdd(id:string,pelicula:PeliculaModel){
    
  return this.db.collection("peliculas").doc(id.toString()).set({
      nombre: pelicula.nombre,
      id:id,
      estado:1,
      actor:pelicula.actor.nombre +" "+ pelicula.actor.apellido,
      fecha: pelicula.fecha,
      publico:pelicula.publico,
      tipo:pelicula.tipo,
      foto: "https://ignaciosantiago.com/wp-content/uploads/2013/08/Sabes-cuando-es-la-calidad-de-una-pelicula-en-internet-mejor-o-peor-2.jpg"
     })
  }

  getPelis() {
   // return this.dbPelisRef.ref.where('estado','==','1').get();
   return this.dbPelisRef.valueChanges();
  }

  getActores(){
   return this.dbActores.valueChanges();

  }

   getPelisByid(id: string) {
    return this.dbPelisRef.doc(id).valueChanges();
  }

  deleteMovie(id:string)
  {  
    return this.dbPelisRef.doc(id.toString()).update({
      estado:0
    })
  }

}