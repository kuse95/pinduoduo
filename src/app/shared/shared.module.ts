import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent, HorizontalGridComponent, GridItemComponent } from './components';



@NgModule({
  declarations: [
    HorizontalGridComponent,
    GridItemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HorizontalGridComponent,
    GridItemComponent,
    FooterComponent
  ]
})
export class SharedModule { }
