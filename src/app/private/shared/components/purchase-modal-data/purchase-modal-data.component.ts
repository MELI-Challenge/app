import { Component, Input } from '@angular/core';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';

@Component({
  selector: 'app-purchase-modal-data',
  templateUrl: './purchase-modal-data.component.html',
  styleUrls: ['./purchase-modal-data.component.scss'],
})
export class PurchaseModalDataComponent {
  @Input('selectedPurchaseData') selectedPurchaseData!: Purchase;
}
