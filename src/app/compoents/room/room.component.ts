import { Component, OnInit } from '@angular/core';
import { AgoraService } from '../../services/agora.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public roomId;
  public playerPos;
  public playerName;

  constructor(
    public agoraService: AgoraService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      // let date = params['startdate'];
      let data: any = atob(params.spec);
      data = JSON.parse(data);
      console.log(data);
      this.roomId = data.id;
      this.playerPos = data.position;
      this.playerName = data.player;
      console.log(params); // Print the parameter to the console.
    });

    if (this.roomId && this.playerPos) {
      this.agoraService.joinClient(this.playerPos, this.roomId)
    }
  }

}
