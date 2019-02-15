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
      maxHeight: 500,
      titleMaxLength: 30,
      bodyMaxLength: 80,
      style: 'material',
    };
  }

  ngOnInit() {

  }

  showToast(content: any) {
    if (content.status === 'error') {
      this.showError(content);
    }
    else if(content.status === 'success') {
      this.showSuccess(content);
    }
  }

  showError(content: any) {
    this.snotifyService.error(content.message, content.error, {
      ...this.toastConfig
    });
  }

  showSuccess(content: any) {
    this.snotifyService.success(content.message, 'Success', {
      ...this.toastConfig
    });
  }
}
