import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input()
  blogs;

  @Output()
  deleteBlogEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteBlog(blog) {
    this.deleteBlogEvent.emit(blog);
  }
}
