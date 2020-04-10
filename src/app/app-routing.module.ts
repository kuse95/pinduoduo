import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'follow',
    loadChildren: () => import('./follow').then((m) => m.FollowModule),
  },
  {
    path: 'category',
    loadChildren: () => import('./category').then((m) => m.CategoryModule),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat').then((m) => m.ChatModule),
  },
  {
    path: 'mine',
    loadChildren: () => import('./mine').then((m) => m.MineModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./product').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
