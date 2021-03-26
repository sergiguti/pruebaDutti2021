import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from './components/page-one-component/page-one.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageOneRoutingModule {
}
