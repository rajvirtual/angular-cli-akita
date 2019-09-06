import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter = 'All';
  constructor() { }

  ngOnInit() {
  }

  updateFilter(filter) {
    this.filter = filter;
  }
}
