import { QueryEntity } from '@datorama/akita';
import { FilterState, FilterStore } from '../stores/filter-store';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class FilterQuery extends QueryEntity<FilterState, string> {
    constructor(protected store: FilterStore) {
        super(store);
    }

    getFilter() {
        return this.getValue().authorFilter.filter;
    }

}
