import { Injectable, OnInit } from '@angular/core';
import { SnotifyPosition, SnotifyService, SnotifyToast } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService implements OnInit {
  toastConfig;

  constructor(public snotifyService: SnotifyService) {
    this.toastConfig = {
      title: 'Snotify title!',
      body: 'Lorem ipsum dolor sit amet!',
      timeout: 3000,
      position: SnotifyPosition.rightBottom,
      progressBar: true,
      closeClick: true,
      newTop: true,
      backdrop: -1,
      dockMax: 6,
      pauseHover: true,
      maxHeight: 300,
      titleMaxLength: 15,
      bodyMaxLength: 80,
    };
  }

  ngOnInit() {

  }

  showError(content: any) {
    this.snotifyService.error(content.message, content.error, {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });
  }
}
