import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc-anc';
import { LoginComponent } from './compoents/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RoomComponent } from './compoents/room/room.component';
import { environment } from 'src/environments/environment';


const agoraConfig: AgoraConfig = {
  AppID: environment.appId,
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularAgoraRtcModule.forRoot(agoraConfig),
    BrowserAnimationsModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
