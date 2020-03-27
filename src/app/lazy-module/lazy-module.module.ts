import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule} from './lazy-routing.module';
import { EagerModule } from './eager-module/eager-module.module';
import { TestService } from './test.service';
import { TestServiceAbstract } from './abstract.test.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyRoutingModule,
    EagerModule
  ],
  providers: []
})
export class LazyModuleModule { }
