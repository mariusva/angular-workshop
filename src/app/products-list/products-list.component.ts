import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [];
  selectedTag: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.products = [{
      "id": 1400,
      "title": "Product title",
      "price": 150,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "tech"
    },{
      "id": 1410,
      "title": "Product title",
      "price": 1500,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with",
      "likesNo": 32,
      "liked": false,
      "commentsNo": 12,
      "category": "kitchen"
    },{
      "id": 1420,
      "title": "Product title",
      "price": 330.5,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "garden"
    },{
      "id": 1420,
      "title": "Product title",
      "price": 330.5,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "tech"
    },{
      "id": 1420,
      "title": "Product title",
      "price": 330.5,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "tech"
    },{
      "id": 1420,
      "title": "Product title",
      "price": 330.5,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "sea"
    },{
      "id": 1420,
      "title": "Product title",
      "price": 330.5,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "garden"
    },{
      "id": 1420,
      "title": "Product title",
      "price": 330.5,
      "imageSrc": "http://via.placeholder.com/350x250",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      "likesNo": 32,
      "liked": true,
      "commentsNo": 12,
      "category": "tech"
    }];
  }

  filterTagChanged(selectedTag: string) {
    this.selectedTag = selectedTag;
  }

}
