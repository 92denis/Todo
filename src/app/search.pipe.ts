import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(todos, value) {
    if (value === "") {
      return todos;
    } else {
      return todos.filter(todo => {
        if (todo.tags === undefined ) {
          return todo.name.toLowerCase().includes(value.toLowerCase());
        }
        else {
          return todo.name.toLowerCase().includes(value.toLowerCase())
            || todo.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()));
        }
      });
    }
  }
}
