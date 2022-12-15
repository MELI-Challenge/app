import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PurchasesComponent } from '../../shared/components/purchases/purchases.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProfileComponent, PurchasesComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxSkeletonLoaderModule,
    NgbPaginationModule,
  ],
})
export class ProfileModule {}
