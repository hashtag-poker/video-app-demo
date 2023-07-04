import { Component } from '@angular/core';
// import { AgoraService } from './services/agora.service';
import { AgoraService } from './services/agora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng8-agora-POC';

  constructor(
    public agoraService: AgoraService
  ) {}
}
