import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import {
  ToastNotificationService
} from './services';

const SHARED_SERVICES = [
  ToastNotificationService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SnotifyModule
  ],
  exports: [
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    ...SHARED_SERVICES
  ]
})
export class SharedModule { }
