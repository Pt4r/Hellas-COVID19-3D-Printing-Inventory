import { first } from 'rxjs/operators';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { User } from '@app/_helpers';
import { TableColumn } from '@swimlane/ngx-datatable';
import { UserService } from '@app/_services';
import { SearchEvent } from '@app/_helpers/list-view/models/search-event';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  @ViewChild('actionsTemplate', { static: true }) private _actionsTemplate: TemplateRef<HTMLElement>;
  loading = false;
  users: User[] = new Array<User>();
  columns: TableColumn[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;

    this.users.map(x => x.latestShippedDate = new Date());
    this.users.map(x => x.productionDate = new Date());

    this.columns = [
      { prop: 'firstName', name: 'First Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      { prop: 'lastName', name: 'Last Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      { prop: 'username', name: 'Username', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      { prop: 'role', name: 'Role', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      {
        prop: 'id', name: 'Actions', draggable: false, canAutoResize: false, sortable: true, resizeable: false,
        cellTemplate: this._actionsTemplate, cellClass: 'd-flex align-items-center'
      }
    ];
  }

  getUsers(event: SearchEvent): void {
    this.userService.getAll(event).pipe(first()).subscribe((users: User[]) => {
      this.loading = false;
      this.users = users;
    });
  }

}
