import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowComponent } from './eager-module/show/show.component';

@NgModule({
   imports: [
      RouterModule.forChild([ {
            path: '',
            component: ShowComponent
         }]
      )],
   exports: [RouterModule]
})
export class LazyRoutingModule {

}
