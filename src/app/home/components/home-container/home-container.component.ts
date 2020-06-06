import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomeService } from '../../services';
import { TabItem } from '../../interface';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  public tabs$: Observable<Array<TabItem>>;
  public currentTab: string;
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.tabs$ = this.service.getTabs().pipe(
      tap(list => console.log(list))
    );
  }

  tabTrackFunc(index, item) {
    return item.type;
  }
}
