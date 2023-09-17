import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], searchTerm: string): any[] {
    if (!users || !searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();

    return users.filter(user => {
      return user.username.toLowerCase().includes(searchTerm);
    });
  }
}
