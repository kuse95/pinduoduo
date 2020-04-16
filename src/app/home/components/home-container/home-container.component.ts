import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services';
import { TabItem } from '../../interface';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.styl'],
})
export class HomeContainerComponent implements OnInit {
  public tabs: Array<TabItem>;
  public currentTab: string;
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.service.getTabs().subscribe((res) => {
      this.tabs = res.list;
    });
  }

  tabTrackFunc(index, item) {
    return item.type;
  }
}
