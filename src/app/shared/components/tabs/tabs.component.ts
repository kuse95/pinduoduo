import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { TabPaneComponent } from '../tab-pane';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.styl'],
})
export class TabsComponent implements AfterContentInit {
  @Input() value: string;
  @Output() valueChange = new EventEmitter();

  @ContentChildren(TabPaneComponent) panes!: QueryList<TabPaneComponent>;
  constructor() {}

  ngAfterContentInit() {
    if (!this.value) {
      const temp = this.panes.first;
      if (temp) {
        this.valueChange.emit(temp.name);
      }
    }
  }
}
