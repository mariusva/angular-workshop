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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.products = [{
      id: 1400,
      title: 'Product title',
      price: 150,
      imageSrc: 'https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&h=250&w=350',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1410,
      title: 'Product title',
      price: 1500,
      imageSrc: 'https://images.pexels.com/photos/84475/night-product-watch-dramatic-84475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350',
      description: `but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1420,
      title: 'Product title',
      price: 330.5,
      imageSrc: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1420,
      title: 'Product title',
      price: 330.5,
      imageSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1420,
      title: 'Product title',
      price: 330.5,
      imageSrc: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1420,
      title: 'Product title',
      price: 330.5,
      imageSrc: 'https://images.pexels.com/photos/1782561/pexels-photo-1782561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
        layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1420,
      title: 'Product title',
      price: 330.5,
      imageSrc: 'https://images.pexels.com/photos/1448730/pexels-photo-1448730.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    },
    {
      id: 1420,
      title: 'Product title',
      price: 330.5,
      imageSrc: 'https://images.pexels.com/photos/734214/pexels-photo-734214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
      likesNo: 32,
      liked: true,
      commentsNo: 12
    }];

  }

}
