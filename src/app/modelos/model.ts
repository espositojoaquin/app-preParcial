export type Tipo = 'terror' | 'comedia' | 'amor' | 'otros';
export class ActorModel {
    id: string;
    nombre: string;
    apellido: string;
    sexo: string;
    fecha: string;
    foto: string;
}

export class PeliculaModel {
    id: string;
    nombre: string;
    tipo: Tipo;
    fecha: string;
    publico: number;
    foto?: string;
    actor?: ActorModel = new ActorModel();
    estado:number;
}

export class Productos{
    id:number;
    descripcion:string;
    tipo:string;
    fechaV:string;
    precio:number;
    foto:string;
}
