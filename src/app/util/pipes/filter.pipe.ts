import { Pipe, PipeTransform } from '@angular/core';
import { Row } from '../../table-view/row/row';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Row[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.workType.toLowerCase().includes(searchText) || ('' + it.code).includes(searchText);
    });
  }
}
