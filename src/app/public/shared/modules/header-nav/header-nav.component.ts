import { Component } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';
import { User } from '../../interfaces/api/user.interface';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  user$ = this.getUserService.userDataBS$;
  userData!: User;

  constructor(private getUserService: GetUserService) {
    this.user$.subscribe((user) => (this.userData = user));
  }
}
