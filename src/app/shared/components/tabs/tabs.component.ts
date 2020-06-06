import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  AfterViewInit,
  ElementRef,
  AfterContentChecked,
} from '@angular/core';
import { TabPaneComponent } from '../tab-pane';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.styl'],
})
export class TabsComponent
  implements AfterContentInit, AfterViewInit, AfterContentChecked {
  private $activeName: string;
  @Output() activeNameChange = new EventEmitter();

  @ViewChildren('tabBar') tabs!: QueryList<ElementRef>;
  @ContentChildren(TabPaneComponent) panes!: QueryList<TabPaneComponent>;

  constructor() {}

  ngAfterContentInit() {
    if (!this.activeName && this.panes.length) {
      this.activeName = this.panes.first.name;
    }
  }
  ngAfterContentChecked() {
    if (!this.activeName && this.panes.length) {
      this.activeName = this.panes.first.name;
    }
  }

  ngAfterViewInit() {
    console.log(this.tabs);
  }

  @Input()
  public get activeName(): string {
    return this.$activeName;
  }

  public set activeName(v: string) {
    if (v) {
      this.$activeName = v;
      this.activeNameChange.emit(v);
    }
  }

  onSelect(item, index) {
    // console.log(item);
  }
}
