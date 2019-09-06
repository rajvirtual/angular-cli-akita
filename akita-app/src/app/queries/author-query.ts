import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthorState, AuthorStore } from '../stores/author-store';
import { Author } from '../models/author';

@Injectable({
    providedIn: 'root'
})
export class AuthorQuery extends QueryEntity<AuthorState, Author> {
    constructor(protected store: AuthorStore) {
        super(store);
    }
}
