import { Component } from '@angular/core';
import { GetUserService } from './services/get-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Meli Challenge';

  constructor(private setUserService: GetUserService) {}
}
