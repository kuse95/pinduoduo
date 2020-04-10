import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.styl'],
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';
  constructor() {}

  ngOnInit() {}

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateColumns(): string {
    const temp = `repeat(${this.cols}, calc((100vw - ${
      this.displayCols * 8
    }px) / ${this.displayCols}))`;
    return temp;
  }

  public handleScroll(ev) {
    this.sliderMargin = `0 ${
      (100 * ev.target.scrollLeft) / ev.target.scrollWidth
    }%`;
  }
}
