import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { of } from 'rxjs';
import { GetUserService } from 'src/app/services/get-user.service';

import { HeaderNavComponent } from './header-nav.component';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  class GetUserServiceMock {
    userDataBS$ = of({});
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule.forRoot()],
      declarations: [HeaderNavComponent],
      providers: [{ provide: GetUserService, useClass: GetUserServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
