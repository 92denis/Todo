import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(todos, value) {
    return todos.filter( todo => {
        return todo.name.toLowerCase().includes((value).toLowerCase()) 
          || todo.tags.some(tag => tag.toLowerCase().includes((value).toLowerCase())); 
    });
  }
}
