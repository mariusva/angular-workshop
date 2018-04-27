import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 204!';

  containBadWords() {
    return this.title.toLowerCase().indexOf("bad") > -1;
  }

  changeTitle() {
    this.title = "Another title";
  }
}
