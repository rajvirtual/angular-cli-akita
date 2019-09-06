import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface FilterState extends EntityState<string> {
    authorFilter: {
        filter: string;
    };
}

const initialState = {
    authorFilter: {
        filter: 'All'
    }
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'filter' })
export class FilterStore extends EntityStore<FilterState, string> {
    constructor() {
        super(initialState);
    }
}
