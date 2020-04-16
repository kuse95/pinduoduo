import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.styl'],
})
export class SearchBarComponent implements OnInit {
  @HostBinding('class.simple') isSimple = true;

  constructor() {}

  ngOnInit() {}
}
