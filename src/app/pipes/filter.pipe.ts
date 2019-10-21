import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        return items.filter((item: any) => item.training_name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }
}