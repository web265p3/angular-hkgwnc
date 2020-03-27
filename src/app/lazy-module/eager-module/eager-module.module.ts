import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ShowComponent } from './show/show.component';
import { TestServiceAbstract } from '../abstract.test.service';
import { TestService } from '../test.service';

@NgModule({
   imports: [
      
   ],
   declarations: [
      ShowComponent,
   ],
   exports: [
      ShowComponent,
   ],
   providers: [
      {provide: TestServiceAbstract, useClass: TestService}
   ]
})
export class EagerModule {

}
