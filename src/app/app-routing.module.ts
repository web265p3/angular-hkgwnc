import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
   path: 'home',
   pathMatch: 'prefix',
   loadChildren: () => import('../app/lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
