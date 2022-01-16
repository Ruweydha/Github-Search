import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayUserComponent } from './display-user/display-user.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'users',component:DisplayUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
