import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextStubPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value;
  }
}
