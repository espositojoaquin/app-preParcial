import { query } from '@angular/animations';
import { Injectable, Query } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Productos } from "../modelos/model";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  dbProd: AngularFirestoreCollection<any>;
  //constructor() { }
  constructor(private db: AngularFirestore) { 
    this.dbProd = this.db.collection("productos");
   
  } 

  getProductos() {
    return this.dbProd.valueChanges();
   }

   deleteProducto(id:string)
   {  
     return this.dbProd.doc(id.toString()).update({
       estado:0
     })
   }

   searchProducto(descripcion:string){
     return new Promise((resolve, reject) => {
       this.dbProd.ref.where('descripcion',"==",descripcion.toLowerCase()).get().then(res=>{
         if(res.size>0)
         {   
            res.forEach(doc =>{
              resolve(doc.data());
            })
         }
         else
         {
           resolve("0");
         }
       }).catch(error=>{
         console.log(error);
         reject(error);
       })
      
    });
  }

}



