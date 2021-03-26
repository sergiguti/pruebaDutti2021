import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShipsComponent} from './components/ships-component/ships.component';

const routes: Routes = [
  {
    path: '',
    component: ShipsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule {
}
