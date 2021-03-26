import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './components/main-component/main.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule {
}
