import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';
import { ApiService } from 'src/app/services/api.service';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  page = 1;
  pageSize = 2;
  purchasesData!: Purchase[];

  selectedPurchaseData!: Purchase;
  viewedPurchases: Purchase[] = [];

  user$ = this.getUserService.userDataBS$;

  constructor(
    private apiService: ApiService,
    private getUserService: GetUserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.user$
      .pipe(
        map((user) => {
          if (user.id > 0) {
            this.apiService
              .getPurchases(user.id.toString())
              .subscribe((purchases) => {
                this.purchasesData = purchases;
                this.purchasesData.forEach((purchase, index, arr) => {
                  const { shipmentId, transactionId } = purchase;

                  this.apiService
                    .getShipment(shipmentId.toString())
                    .subscribe((shipment) => {
                      arr[index] = { ...arr[index], shipment };
                    });

                  this.apiService
                    .getPayment(transactionId.toString())
                    .subscribe((payment) => {
                      arr[index] = { ...arr[index], payment };
                    });
                });
              });
          }
        })
      )
      .subscribe();
  }

  open(content: TemplateRef<ElementRef>, purchase: Purchase) {
    const index = this.viewedPurchases.findIndex(
      (_purchase) => _purchase.id === purchase.id
    );
    index === -1 ? this.viewedPurchases.push(purchase) : null;
    console.log(this.viewedPurchases);
    this.selectedPurchaseData = purchase;
    this.modalService.open(content, { centered: true });
  }
}
