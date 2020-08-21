import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(recetas: any[], searchText: string): any {
    if (!recetas) {
      return [];
    }

    if (!searchText) {
      return recetas;
    }

    searchText = searchText.toLocaleLowerCase();

    return recetas.filter(receta => {
      return receta.title.toLocaleLowerCase().includes(searchText)
    });
  }
}
