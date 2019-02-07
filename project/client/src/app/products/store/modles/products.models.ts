export interface ProductsState {
  isLoading: boolean;
  error: any;
  products: Array<IProduct>;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  description: string;
  likesNo: number;
  liked: boolean;
  commentsNo: number;
  category: string;
}
