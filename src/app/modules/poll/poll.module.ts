import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ViewComponent } from './pages/view/view.component';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [CreateComponent, ViewComponent, ResultComponent],
  imports: [
    CommonModule,
    PollRoutingModule
  ]
})
export class PollModule { }
