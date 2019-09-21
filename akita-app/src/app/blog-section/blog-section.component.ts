import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { BlogQuery } from '../queries/blog-query';
import { FilterQuery } from '../queries/ffilter-query';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  blogs$: Observable<Blog[]>;
  @Input()
  filter = 'All';
  constructor(private blogService: BlogService, private blogQuery: BlogQuery, private filterQuery: FilterQuery) { }

  ngOnInit() {
    this.loadBlogs();
  }


  loadBlogs() {
    this.blogService.get().subscribe();

    this.blogs$ = this.filterQuery
      .select(state => state.authorFilter.filter)
      .pipe(
        switchMap(
          filterValue => filterValue !== 'All'
            ? this.blogQuery.selectByAuthor(filterValue)
            : this.blogQuery.selectAll()
        )
      );
  }

  addBlog(blog: Partial<Blog>) {
    blog.author = this.filter;
    this.blogService.add(blog);
  }

  deleteBlog(blog: Blog) {
    this.blogService.delete(blog.id);
  }

}
