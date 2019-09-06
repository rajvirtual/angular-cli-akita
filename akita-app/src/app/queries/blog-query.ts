import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { BlogState, BlogStore } from '../stores/blog-store';
import { Blog } from '../models/blog';
@Injectable({
    providedIn: 'root'
})
export class BlogQuery extends QueryEntity<BlogState, Blog> {
    constructor(protected store: BlogStore) {
        super(store);
    }
}
