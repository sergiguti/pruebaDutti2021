import {NgModule} from '@angular/core';
import {PageTwoComponent} from './components/page-two-component/page-two.component';
import {PageTwoRoutingModule} from './page-two-routing.module';

@NgModule({
  declarations: [
    PageTwoComponent
  ],
  imports: [
    PageTwoRoutingModule
  ],
})
export class PageTwoModule {
}
