import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicar'
})
export class DuplicarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultproductos = [];
    for(const post of value){
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase()) >-1){
     console.log('Sip');
     resultproductos.push(post);
      };

    };
    return resultproductos;
  }

}
