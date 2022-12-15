import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../public/shared/interfaces/api/user.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  userData$ = this.apiService.getUser();
  userData!: User;
  public userDataBS$ = new BehaviorSubject<User>({} as User);

  constructor(private apiService: ApiService) {
    this.setUserData();
  }

  private setUserData() {
    this.userData$.subscribe((user) => {
      this.userData = user;
      this.userDataBS$.next(user);
    });
  }

  getUserData() {
    return this.userData;
  }
}
