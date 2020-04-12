import { UserModel } from './../../../_helpers/backend';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  public user: User = new User();

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    const userId = this._route.snapshot.params.id;
    this.user.productionDate = new Date();
    this.user.latestShippedDate = new Date();
    this.user.printerActive = true;
    this.user.needsFilament = true;

    this._userService.getById(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

}
