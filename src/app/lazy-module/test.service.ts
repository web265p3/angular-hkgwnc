import { Injectable } from '@angular/core';
import { TestServiceAbstract } from './abstract.test.service';

@Injectable()
export class TestService extends TestServiceAbstract{
   getNumber() {
      return 5;
   }
}