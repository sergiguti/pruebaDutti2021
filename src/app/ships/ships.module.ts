import {NgModule} from '@angular/core';
import {ShipsComponent} from './components/ships-component/ships.component';
import {ShipsRoutingModule} from './ships-routing.module';
import {ShipsDetailsComponent} from './components/ships-details-component/ships-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent
  ],
  imports: [
    ShipsRoutingModule,
    NgxPaginationModule,
    SharedModule
  ],
})
export class ShipsModule {
}
