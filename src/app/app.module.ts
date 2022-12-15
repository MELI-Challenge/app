import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HeaderNavComponent } from './public/shared/modules/header-nav/header-nav.component';
import { HttpService } from './services/http.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GetUserService } from './services/get-user.service';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

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
