import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  FooterComponent,
  HorizontalGridComponent,
  GridItemComponent,
  SearchBarComponent,
  HeaderContainerComponent,
  IconComponent,
  TabsComponent
} from './components';

@NgModule({
  declarations: [
    HorizontalGridComponent,
    GridItemComponent,
    FooterComponent,
    SearchBarComponent,
    HeaderContainerComponent,
    IconComponent,
    TabsComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    HorizontalGridComponent,
    GridItemComponent,
    FooterComponent,
    SearchBarComponent,
    HeaderContainerComponent,
    IconComponent,
    TabsComponent
  ],
})
export class SharedModule {}
