import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlable',
  standalone: true
})
export class UrlablePipe implements PipeTransform {

  transform(value: string): string {
    return `url(${ value })`;
  }

}
