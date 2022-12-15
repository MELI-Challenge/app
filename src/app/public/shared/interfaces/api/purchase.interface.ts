import { Payment } from './payment.interface';
import { Shipment } from './shipment.interface';

export interface Purchase {
  id: number;
  title: string;
  price: {
    total: number;
    currency: string;
  };
  quantity: number;
  date: string;
  imageUrl: string;
  seller: {
    id: number;
    nickname: string;
  };
  transactionId: number;
  shipmentId: number;
  shipment?: Shipment;
  payment?: Payment;
}
