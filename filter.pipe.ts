import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string, propName1: string, propName2: string): any{

      if(value.length === 0 || filterString === '' || filterString === undefined){
          return value;
          
      }else{
          let filteredData = value.filter((v: any) =>v[propName].toLowerCase().includes(filterString.toLowerCase()));
          
          if(propName1 && propName2) {
              filteredData = filteredData.concat(value.filter((v: any) => v[propName1].toLowerCase().includes(filterString.toLowerCase())));
            
              filteredData = filteredData.concat(value.filter((v: any) => v[propName2].toLowerCase().includes(filterString.toLowerCase())));
              }
          
          return filteredData;
      }
    
  }
}
