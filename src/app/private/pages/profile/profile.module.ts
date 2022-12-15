import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PurchasesComponent } from '../../shared/components/purchases/purchases.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseModalDataComponent } from '../../shared/components/purchase-modal-data/purchase-modal-data.component';
import { PurchaseSummaryComponent } from '../../shared/components/purchase-summary/purchase-summary.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PurchasesComponent,
    PurchaseModalDataComponent,
    PurchaseSummaryComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxSkeletonLoaderModule,
    NgbPaginationModule,
  ],
})
export class ProfileModule {}
