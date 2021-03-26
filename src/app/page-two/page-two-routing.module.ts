import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageTwoComponent} from './components/page-two-component/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: PageTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTwoRoutingModule {
}
