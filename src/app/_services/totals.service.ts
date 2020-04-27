import { map } from 'rxjs/operators';
import { TotalsModel, TopTen } from './../_helpers/backend';
import { Injectable } from '@angular/core'; import { BackofficeApiService } from '@app/_helpers';
import { AsyncSubject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class TotalsService {
    private _totals: AsyncSubject<TotalsModel[]>;
    private _liveTotals: AsyncSubject<TotalsModel>;
    private _topTen: AsyncSubject<TopTen[]>;

    constructor(private backoffice: BackofficeApiService) {
    }

    getTotalsLive() {
        if (!this._liveTotals) {
            this._liveTotals = new AsyncSubject<TotalsModel>();
            this.backoffice.totals_GetTotalsLive().subscribe((totals: TotalsModel) => {
                this._liveTotals.next(totals);
                this._liveTotals.complete();
            });
        }
        return this._liveTotals;
    }

    getTotals() {
        if (!this._totals) {
            this._totals = new AsyncSubject<TotalsModel[]>();
            this.backoffice.totals_GetTotals().subscribe((totals: TotalsModel[]) => {
                this._totals.next(totals);
                this._totals.complete();
            });
        }
        return this._totals;
    }

    getTopTen() {
        if (!this._topTen) {
            this._topTen = new AsyncSubject<TopTen[]>();
            this.backoffice.totals_GetTopTen().subscribe((topTen: TopTen[]) => {
                this._topTen.next(topTen);
                this._topTen.complete();
            });
        }
        return this._topTen;
    }
}