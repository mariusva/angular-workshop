import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, skip } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  typeahead: Observable<any> = null;

  constructor() { }

  ngOnInit() {
    const searchBox = document.getElementById('textInput');
    this.typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: any) => e.target.value),
      // filter(text => text.length > 2),
      // debounceTime(1000),
      // distinctUntilChanged(),
      skip(3)
      // switchMap(term => ajax(`http://localhost:3000/products?category=${term}`))
    );

    this.typeahead.subscribe(data => console.log(data))
  }

}
