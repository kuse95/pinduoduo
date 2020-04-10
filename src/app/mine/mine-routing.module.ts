import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineContainerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: MineContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MineRoutingModule {}
