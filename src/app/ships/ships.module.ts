import {NgModule} from '@angular/core';
import {ShipsComponent} from './components/ships-component/ships.component';
import {ShipsRoutingModule} from './ships-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ShipsComponent
  ],
  imports: [
    ShipsRoutingModule,
    SharedModule
  ],
})
export class ShipsModule {
}
