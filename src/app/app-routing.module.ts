import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from '../dashboard/dashboard.component'
import { AppComponent } from './app.component';
import { LoginComponent } from './compoents/login/login.component';
import { RoomComponent } from './compoents/room/room.component';


const routes: Routes = [
  {
    path: 'room',
    component: RoomComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
