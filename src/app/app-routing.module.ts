import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyOdcLayoutComponent } from './features/my-odc-layout/my-odc-layout.component';

const routes: Routes = [
  {
    path: 'virtualOdc',
    component: MyOdcLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
