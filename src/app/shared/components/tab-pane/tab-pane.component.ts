import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-pane',
  templateUrl: './tab-pane.component.html',
  styleUrls: ['./tab-pane.component.styl']
})
export class TabPaneComponent implements OnInit {
  // 选项卡标题
  @Input() label = '';
  // 是否禁用
  @Input() disabled = false;
  // 与选项卡 activeName 对应的标识符，表示选项卡别名
  @Input() name = '';
  // 标签是否可关闭
  @Input() closable = false;

  constructor() {
  }

  ngOnInit() {
  }

}
