import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public hide = true;
  public password;
  public loggedIn = false;
  public playername;
  public urls: any = [];
  public roomname = '';

  public players: any = [];

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public login() {
    if (!this.username && !this.password) {
      this.openSnackBar("Username or Email not found", "");
    }

    if (this.username == environment.username && this.password == environment.pass) {
      this.loggedIn = true;
      // this.generateurls();
      this.openSnackBar("Login Successful", "");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public addPlayer(): void {
    if (this.players.length <= 9) {
      this.players.push(this.playername);
      this.playername = '';
    } else {
      this.openSnackBar("Cannot add more players", "");
    }
  }

  public generateurls() {
    this.urls = [];
    let roomName = this.makeid(7);
    if (this.roomname) {
      roomName = this.roomname;
    }

    for (let i = 0; i < 12; i++) {
      let data = {
        id: roomName,
        position: i + 1,
        // player: this.players[i]
      };
      let spec = btoa(JSON.stringify(data));
      // let spec = JSON.stringify(data);
      this.urls.push(`${environment.host}room?spec=${spec}`);
    }
    console.log(this.urls);
  }

  public makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.openSnackBar("URL copied", "");
  }

}
