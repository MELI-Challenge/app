import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';

@Component({
  selector: 'app-purchase-summary',
  templateUrl: './purchase-summary.component.html',
  styleUrls: ['./purchase-summary.component.scss'],
})
export class PurchaseSummaryComponent {
  viewedPurchases: Purchase[] = [];

  @Input('purchase') purchase!: Purchase;
  @Input('content') content!: TemplateRef<ElementRef>;

  @Output() purchaseEmitter = new EventEmitter<Purchase>();

  constructor(private modalService: NgbModal) {}

  open(purchase: Purchase) {
    this.purchaseEmitter.emit(purchase);
    this.modalService.open(this.content, { centered: true });
  }
}
