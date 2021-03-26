import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './components/register-component/register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RegisterRoutingModule
  ],
})
export class RegisterModule {
}
