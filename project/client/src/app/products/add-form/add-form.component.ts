import { Component } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  detach: () => void;

  constructor() { }

  public close() {
    this.detach();
  }
}
