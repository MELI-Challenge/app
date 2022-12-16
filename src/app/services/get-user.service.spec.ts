import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { GetUserService } from './get-user.service';

describe('SetUserService', () => {
  let service: GetUserService;

  const fakeUser = {
    id: 1,
    name: 'Mercadolibre',
    lastName: 'User',
    level: 'ORO',
    imageUrl: 'imageUrl',
  };

  class ApiServiceMock {
    getUser = jest.fn().mockImplementation(() => of(fakeUser));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
    });
    service = TestBed.inject(GetUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data', () => {
    const userData = service.getUserData();
    expect(userData).toEqual(fakeUser);
  });
});
