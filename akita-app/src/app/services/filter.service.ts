import { Injectable } from '@angular/core';
import { FilterStore } from '../stores/filter-store';

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor(private filterStore: FilterStore) { }

    updateFilter(authFilter: string) {
        this.filterStore.update({
            authorFilter: {
                filter: authFilter
            }
        });
    }

}
