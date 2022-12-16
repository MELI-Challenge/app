import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { GetUserService } from '../../../services/get-user.service';
import { Level } from 'src/app/public/shared/interfaces/api/level.interface';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';
import { Restriction } from 'src/app/public/shared/interfaces/api/restriction.interface';
import { User } from 'src/app/public/shared/interfaces/api/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userData!: User;
  levelData!: Level;
  restrictionsData!: Restriction[];
  purchasesData!: Purchase[];

  user$ = this.getUserService.userDataBS$;
  constructor(
    private apiService: ApiService,
    private getUserService: GetUserService
  ) {}

  ngOnInit(): void {
    this.user$
      .pipe(
        map((user) => {
          if (user.id > 0) {
            this.userData = user;
            this.apiService.getLevel(user.level).subscribe((level) => {
              this.levelData = level;
            });
            this.apiService
              .getRestrictions(user.id.toString())
              .subscribe(
                (restrictions) => (this.restrictionsData = restrictions)
              );
            this.apiService
              .getPurchases(user.id.toString())
              .subscribe((purchases) => (this.purchasesData = purchases));
          }
        })
      )
      .subscribe();
  }
}
