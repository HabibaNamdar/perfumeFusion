export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }
  export interface CartState {
    cart: Item[];
  }