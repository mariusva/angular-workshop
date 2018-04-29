import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from "rxjs/observable/fromEvent";
import { ajax } from "rxjs/observable/dom/ajax";
import { map, filter, debounceTime, switchMap, takeUntil, skip } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  typeahead;
  btnStream: Observable<any>;

  constructor() { }

  ngOnInit() {
    const observablesBox = document.querySelector('#obervablesBox');
    const stopBtn = document.querySelector('#stopButton')

    this.btnStream = fromEvent(stopBtn, 'click');

    this.typeahead = fromEvent(observablesBox, 'keyup')
      .pipe(
        map((evt: any) => evt.target.value),
        filter((val: string) => val !== "me"),
        filter((val: string) => val.length > 3),
        debounceTime(1000),
        skip(4),
        takeUntil(this.btnStream)
        
        // switchMap((val: string) =>  ajax('https://jsonplaceholder.typicode.com/posts'))
      );

    this.typeahead.subscribe(data => console.log(data));
    console.log(observablesBox);
  }

}
