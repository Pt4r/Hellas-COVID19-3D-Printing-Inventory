import { UserFilamentModel } from './../../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { User } from '@app/_helpers';
import { TableColumn } from '@swimlane/ngx-datatable';
import { UserService } from '@app/_services';
import { SearchEvent } from '@app/_helpers/list-view/models/search-event';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html'
})
export class FilamentComponent implements OnInit {
  @ViewChild('actionsTemplate', { static: true }) private _actionsTemplate: TemplateRef<HTMLElement>;
  @ViewChild('dateTemplate', { static: true }) private _dateTemplate: TemplateRef<HTMLElement>;
  loading = false;
  deliveryLoading = false;
  users: User[] = new Array<User>();
  columns: TableColumn[] = [];
  modalResult = '';
  private event: SearchEvent;
  private _newUser: UserFilamentModel = new UserFilamentModel();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;

    this.columns = [
      { prop: 'firstName', name: 'First Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      { prop: 'lastName', name: 'Last Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      { prop: 'printerModel', name: 'Printer Model', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      {
        prop: 'latestShippedDate', name: 'Latest Shipped Date', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        cellTemplate: this._dateTemplate
      },
      { prop: 'shippedQuantity', name: 'Shipped Quantity', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      {
        prop: 'id', name: 'Actions', draggable: false, canAutoResize: false, sortable: true, resizeable: false,
        cellTemplate: this._actionsTemplate, cellClass: 'd-flex align-items-center'
      },
    ];
  }

  getUsers(event: SearchEvent): void {
    this.event = event;
    this.userService.GetUsersWithoutFilament(event).pipe(first()).subscribe((users: User[]) => {
      this.loading = false;
      this.users = users;
    });
  }

  sendFilament(row: User) {
    this._newUser.id = row.id;
    this._newUser.firstName = row.firstName;
    this._newUser.lastName = row.lastName;
    this._newUser.needsFilament = row.needsFilament;
    this._newUser.sentFilamentDate = new Date();
    this._newUser.filamentTrackingNumber = 'test';

    this.userService.deliverFilament(this._newUser).subscribe(() => {
      this.deliveryLoading = false;
      this.getUsers(this.event);
    });
  }


}
