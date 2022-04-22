import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICreateOrderProducts } from './ICreateOrderProducts';

export interface IOrder {
  id: string;
  customer: ICustomer;
  orders_products: ICreateOrderProducts[];
  created_at: Date;
  updated_at: Date;
}
