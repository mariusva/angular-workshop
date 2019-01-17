import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of, interval, from, pipe, fromEventPattern } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, take, takeUntil } from 'rxjs/operators';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

import { BadwordsPipe } from './shared/badwords.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('myInput') myInput: ElementRef;

  ngOnInit() {
    const click$ = fromEvent(
      document.querySelector('#theBtn'),
      'click'
    ).pipe(
      // take(3)
      map((evt: MouseEvent) => [evt.clientX, evt.clientY])
    );
    click$.subscribe(arr => console.log(arr));

    const clickSubscr = click$.subscribe(arr => {
      if (arr[0] < 172) {
        clickSubscr.unsubscribe();
      }
      console.log('unsubscribable stream');
    });

    const keyUp$ = fromEvent(
      this.myInput.nativeElement,
      'keyup'
    );

    const badwordsPipe = new BadwordsPipe();

    const rec = pipe(
      // debounceTime(300),
      map(evt => evt['target']['value']),
      map(val => badwordsPipe.transform(val)),
      distinctUntilChanged(),
      takeUntil(click$)
    );

    rec(keyUp$).subscribe(inputStr => console.log(inputStr));
  }

}
