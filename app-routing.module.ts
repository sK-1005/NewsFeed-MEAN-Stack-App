import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule, HomeComponent } from './home';

const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: '**', redirectTo: '/' }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
