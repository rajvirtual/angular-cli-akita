import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Blog } from '../models/blog';
import { BlogStore } from '../stores/blog-store';

@Injectable({ providedIn: 'root' })
export class BlogService {

  filter = 'All';
  constructor(private http: HttpClient, private blogStore: BlogStore) {
  }

  private createBlog({ id, title, author }: Partial<Blog>) {
    return {
      id,
      title, author
    };
  }


  get() {
    return this.http.get<Blog[]>('http://localhost:3000/blogs').pipe(tap(blogs => {
      this.blogStore.set(blogs);
    }));
  }


  add({ title, author }: Partial<Blog>) {
    const blog = this.createBlog({ id: Math.random(), title, author });
    this.blogStore.add(blog);
  }

  delete(id) {
    this.blogStore.remove(id);
  }

}
