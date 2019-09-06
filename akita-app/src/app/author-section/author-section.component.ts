import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { AuthorQuery } from '../queries/author-query';
import { Observable } from 'rxjs';
import { Author } from '../models/author';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-author-section',
  templateUrl: './author-section.component.html',
  styleUrls: ['./author-section.component.scss']
})
export class AuthorSectionComponent implements OnInit {

  @Output()
  updateFilter = new EventEmitter();
  authors$: Observable<Author[]>;
  constructor(private authorService: AuthorService, private filterService: FilterService, private authorQuery: AuthorQuery) { }

  ngOnInit() {
    this.authorService.get().subscribe();
    this.authors$ = this.authorQuery.selectAll();
  }

  onSelectAuthor(author: string) {
    this.updateFilter.emit(author);
    this.filterService.updateFilter(author === 'All' ? 'All' : author);
  }
}
