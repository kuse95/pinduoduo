import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.styl']
})
export class IconComponent{
  @Input() name = '' ;
  constructor() { }
}
