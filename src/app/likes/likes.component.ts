import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input() liked:boolean;
  @Input() likesNo: number;

  @Output() onToggleLike = new EventEmitter<boolean>();

  constructor() { }

  toggleLike() {
    this.liked = !this.liked;
    this.onToggleLike.emit(this.liked);
  }

}
