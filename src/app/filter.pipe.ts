import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    var arr:any[]=[];
    args.forEach(e=>{
         if(e===value){
          arr.push(e);
         }
    });

    return arr;

   
  }

}
