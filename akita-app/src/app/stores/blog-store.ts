import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Blog } from '../models/blog';
import { Injectable } from '@angular/core';

export interface BlogState extends EntityState<Blog> { }

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'blogs' })
export class BlogStore extends EntityStore<BlogState, Blog> {

}
