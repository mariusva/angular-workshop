import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'badwords'
})
export class BadWordsStubPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value;
  }
}
