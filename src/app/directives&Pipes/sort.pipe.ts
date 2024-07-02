import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array) || !field) {
      return array;
    }

    return array.sort((a, b) => {
      const numLikesA = a[field];
      const numLikesB = b[field];

      if (numLikesA > numLikesB) {
        return -1; 
      } else if (numLikesA < numLikesB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
