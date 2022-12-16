import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { mockUser } from 'tests/utils/mock-user';
import { ApiService } from './api.service';
import { GetUserService } from './get-user.service';

describe('SetUserService', () => {
  let service: GetUserService;

  class ApiServiceMock {
    getUser = jest.fn().mockImplementation(() => of(mockUser));
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
    expect(userData).toEqual(mockUser);
  });
});
