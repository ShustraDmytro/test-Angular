import { IAddress } from './address.model';

export interface IUser {
  name: string;
  username: string;
  email: string;
  phone: string;
  address: IAddress;
  id?: number;
}
