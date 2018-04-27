import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badwords'
})
export class BadwordsPipe implements PipeTransform {

  badWords: Array<string> = ["bad", "react", "vue", "dummy", "established"];

  transform(value: any, args?: any): any {
    this.badWords.forEach(badWord => value = value.replace(badWord, "***"));
    return value;
  }

}
