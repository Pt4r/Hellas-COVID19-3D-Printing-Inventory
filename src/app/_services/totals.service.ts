import { map } from 'rxjs/operators';
import { TotalsModel } from './../_helpers/backend';
import { Injectable } from '@angular/core';import { BackofficeApiService } from '@app/_helpers';
import { AsyncSubject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class TotalsService {
    private _totals: AsyncSubject<TotalsModel>;

    constructor(private backoffice: BackofficeApiService) {
    }

   getTotals() {
       if (!this._totals) {
           this._totals = new AsyncSubject<TotalsModel>();
           this.backoffice.totals_GetTotals().subscribe((totals: TotalsModel) => {
               this._totals.next(totals);
               this._totals.complete();
           });
       }
       return this._totals;
   }

}