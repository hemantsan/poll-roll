import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ViewComponent } from './pages/view/view.component';
import { ResultComponent } from './pages/result/result.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'view/:id',
        component: ViewComponent
      },
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
