import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  @Output()
  addBlogEvent = new EventEmitter();

  @Input()
  filter;

  blog: Partial<Blog> = {};

  constructor() { }

  ngOnInit() {
  }

  addBlog() {
    this.addBlogEvent.emit(this.blog);
    this.blog = {};
  }

}
