import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { AuthorStore } from '../stores/author-store';
import { Author } from '../models/author';

@Injectable({ providedIn: 'root' })
export class AuthorService {

  constructor(private authorStore: AuthorStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Author[]>('http://localhost:3000/authors').pipe(tap(entities => {
      this.authorStore.set(entities);
    }));
  }

  add(author: Author) {
    this.authorStore.add(author);
  }

  update(id, author: Partial<Author>) {
    this.authorStore.update(id, author);
  }

  remove(id: ID) {
    this.authorStore.remove(id);
  }
}
