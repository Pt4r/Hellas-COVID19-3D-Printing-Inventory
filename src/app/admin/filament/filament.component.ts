import { UserFilamentModel } from './../../_helpers/backend';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { User } from '@app/_helpers';
import { TableColumn } from '@swimlane/ngx-datatable';
import { UserService } from '@app/_services';
import { SearchEvent } from '@app/_helpers/list-view/models/search-event';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

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
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true;

    this.columns = [
      { prop: 'firstName', name: 'First Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      { prop: 'lastName', name: 'Last Name', draggable: false, canAutoResize: true, sortable: true, resizeable: false },
      {
        prop: 'shippedQuantity', name: 'Total Shipped', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        width: 50
      },
      {
        prop: 'latestShippedDate', name: 'Latest Shipped Date', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        cellTemplate: this._dateTemplate
      },
      {
        prop: 'latestShippedQuantity', name: 'Latest Shippment', draggable: false, canAutoResize: true, sortable: true, resizeable: false,
        width: 70
      },
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

  openDialog(row: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        row.sentFilamentDate = result.sentFilamentDate;
        row.filamentTrackingNumber = result.filamentTrackingNumber;
        row.filamentAmountRecieved = result.filamentAmountRecieved;
        this.sendFilament(row);
      }
    });
  }

  sendFilament(row: User) {
    this._newUser = row;

    this.userService.deliverFilament(this._newUser).subscribe(() => {
      this.deliveryLoading = false;
      this.getUsers(this.event);
    });
  }
}
