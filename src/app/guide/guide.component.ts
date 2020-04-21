import { Component, OnInit } from '@angular/core';
import { UserModel } from '@app/_helpers';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html'
})
export class GuideComponent implements OnInit {
  currentUser: UserModel;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {

  }

}
