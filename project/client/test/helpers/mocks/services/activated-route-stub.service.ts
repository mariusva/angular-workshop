import { BehaviorSubject } from 'rxjs';

export class ActivatedRouteStub {
  private params = {
    get(string) {
      return 140;
    }
  };

  public paramMap = new BehaviorSubject(this.params);
  public data = new BehaviorSubject(
    {
      product: {
        'id': 1400,
        'title': 'Product title',
        'price': 150,
        'imageSrc': 'https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&h=250&w=350',
        'description':
          `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries`,
        'likesNo': 32,
        'liked': true,
        'commentsNo': 12,
        'category': 'tech'
      }
    }
  );
}