import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessagesComponent} from './components/error-messages/error-messages.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  declarations: [
    ErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    })
  ],
  exports: [
    CommonModule,
    ErrorMessagesComponent
  ],
  providers: [
    {provide: ToastrService, useClass: ToastrService},
  ]
})
export class SharedModule {
}
