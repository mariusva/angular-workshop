import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, of, interval, from, pipe } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  o$: Observable<string[]>;
  vals: string[];

  ngOnInit() {

    this.vals = [];

    // Observable from DOM event
    // const o = fromEvent(document, 'click');
    // o.subscribe((evt: MouseEvent) => console.log(evt.type));

    // const o = fromEvent(
    //   document.querySelector('#someInput'),
    //   'input'
    //   );

    // o.subscribe((evt: Event) => console.log(evt.target.value));


    // const o = of('Name', 1, {name: 'Some name'});
    // o.subscribe(data => console.log(data));

    // const p = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('Timeout');
    //     resolve('Some value');
    //   }, 2000);
    // });
    // const o = from(p);


    // Observable from none
    // const o = of();
    // o.subscribe(
    //   data => console.log(data),
    //   err => console.log(err),
    //   () => console.log('On done')
    // );

    // const fromDom = fromEvent(document, 'click');
    // const pipeTransf = pipe(
    //   takeUntil(o)
    // );

    // pipeTransf(fromDom).subscribe(
    //   data => console.log('I`m clicking'),
    //   () => {},
    //   () => console.log('Done'));

    // const numbers = of(1, 2, 3, 4, 5);
    // const pipeTransf = pipe(
    //   // last(),
    //   map((no: number) => no * no),
    //   // filter(no => no > 20)
    // );

    // pipeTransf(numbers).subscribe(no => console.log(no));

    // const o = from([1, 2, 3, 4, 5])
    //   .pipe(
    //     take(3)
    //   );
    // o.subscribe(data => console.log(data));


    // const nextObs = from([1, 2, 3, 4, 5, 6])
    //     .pipe(
    //       withLatestFrom(o)
    //     )
    //     .subscribe(data => console.log('next: ', data));

    // Testing debounceTime / throttleTime
    const forbidden = ['bad', 'word'];

    this.o$ = fromEvent(
      document.querySelector('#someInput'),
      'input'
    ).pipe(
      // debounceTime(1000),
      // throttleTime(300),
      map((evt: InputEvent) => evt.target.value),
      debounceTime(300),
      distinctUntilChanged(),
      filter(val => !forbidden.some(fb => val.toLowerCase().indexOf(fb) > -1)),
    )
    .subscribe(val => this.vals.push(val));

    // const transformed$ = pipeTransf(o);//.subscribe((val: string) => console.log(val));
  }
}
