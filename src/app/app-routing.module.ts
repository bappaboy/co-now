import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataNowComponent } from './data-now/data-now.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
