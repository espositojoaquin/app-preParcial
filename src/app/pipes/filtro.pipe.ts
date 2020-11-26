import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args:any): any {
     let retorno = []

     if(args != undefined)
     {
       value.forEach(element => {
         if(element.name.toLowerCase().indexOf(args.toLowerCase()) > -1)
         {
           retorno.push(element);
         }
       });

     }

    if(args == undefined || args == "")
    {
      return value;
    }
    else
    {
     return retorno;
    }
    
  }

 

}
