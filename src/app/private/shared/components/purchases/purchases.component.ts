import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';
import { ApiService } from '../../../../services/api.service';
import { GetUserService } from '../../../../services/get-user.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  page = environment.pagination.startingPage;
  pageSize = environment.pagination.pageSize;
  purchasesData!: Purchase[];
  selectedPurchaseData!: Purchase;

  user$ = this.getUserService.userDataBS$;

  constructor(
    private apiService: ApiService,
    private getUserService: GetUserService
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

  setSelectedPurchase(purchase: Purchase) {
    this.selectedPurchaseData = purchase;
  }
}
