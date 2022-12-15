import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './public/shared/modules/header-nav/header-nav.component';
import { ApiService } from './services/api.service';
import { GetUserService } from './services/get-user.service';
import { HttpService } from './services/http.service';

import localeEsCl from '@angular/common/locales/es-CL';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeEsCl, 'es-CL');

@NgModule({
  declarations: [AppComponent, HeaderNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot(),
    NgbModule,
  ],
  providers: [
    ApiService,
    HttpService,
    GetUserService,
    { provide: LOCALE_ID, useValue: 'es-CL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
