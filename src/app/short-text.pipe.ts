import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortText'})
export class ShortTextPipe implements PipeTransform {
  transform(value: string, len: number): string {
    return value.length <= len ? value : value.substring(0, len) + "...";
  }
}