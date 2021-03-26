import {NgModule} from '@angular/core';
import {PageOneComponent} from './components/page-one-component/page-one.component';
import {PageOneRoutingModule} from './page-one-routing.module';

@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    PageOneRoutingModule
  ],
})
export class PageOneModule {
}
