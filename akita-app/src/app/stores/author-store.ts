import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Author } from '../models/author';
import { Injectable } from '@angular/core';

export interface AuthorState extends EntityState<Author> { }
@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'authors' })
export class AuthorStore extends EntityStore<AuthorState, Author> {

}
