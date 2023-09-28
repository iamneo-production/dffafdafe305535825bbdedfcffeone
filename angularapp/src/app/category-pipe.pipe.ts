import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from './menu/menu.component';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(items: MenuItem[], category: string): MenuItem[] {
    if (category === 'All') {
      return items;
    } else {
      return items.filter(item => item.category === category);
    }
  }
}
