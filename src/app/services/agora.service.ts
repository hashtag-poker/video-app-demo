import { Injectable } from '@angular/core';
import { AngularAgoraRtcService } from 'angular-agora-rtc-anc';

@Injectable({
  providedIn: 'root'
})
export class AgoraService {

  public rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remteStream: [],
    params: {}
  };

  public options: {
    appId: '4d124536678a486493686acd33d17722',
    channel: 'POC',
    uid: null,
    token: '0064d124536678a486493686acd33d17722IAAM4LWvL2zoNy44eOg9Ef8BZ2dG5E7t9YCUTZr/y5YSiUK0yQsAAAAAEAAB6BGro0tsXwEAAQCjS2xf'
  };

  public localStream;
  public muteAudio = false;
  public remoteCalls: any = [];

  constructor(
    private agoraService: AngularAgoraRtcService,
  ) {
    console.log('------Agora Service--------', 'client has been created');
    // this.agoraService.createClient();
  }

  public joinClient(userId: string, roomName: string) {
    this.agoraService.createClient();
    console.log('---------------Joining -------------');
    this.subscribeStreams();
    let uID;
    this.agoraService.client.join(
      null,
      roomName,
      userId,
      (uid) => {

        console.log('---------------Joined-------------', uid);
        this.localStream = this.agoraService.createStream(uid, true, null, null, true, false);
        console.log('--------------Joined Stream--------------------\n', typeof (this.localStream), this.localStream);

        this.localStream.setVideoProfile('720p_3');

        this.localStream.init(() => {
          console.log("----------------getUserMedia successfully----------------");
          this.localStream.play(`agora_local_${userId}`);
          this.agoraService.client.publish(this.localStream, (err) => {
            console.log("-----------Publish local stream error:---------------- " + err)
            this.remoteCalls.push(userId);
          });
          this.agoraService.client.on('stream-published', (evt) => {
            console.log("------------------Publish local stream successfully--------------------")
          });
        }, (err) => console.log("getUserMedia failed", err));


        // The user has granted access to the camera and mic.
        this.localStream.on("accessAllowed", () => {
          console.log("accessAllowed");
        });
        // The user has denied access to the camera and mic.
        this.localStream.on("accessDenied", () => {
          console.log("accessDenied");
        });
      });
  }

  public subscribeStreams() {
    // this.agoraService.client.on('stream-added', (evt) => {
    //   console.log('-------subscribed&&&-------', evt);
    //   const stream = evt.stream;
    //   if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)) {
    //     this.remoteCalls.push(`agora_remote${stream.getId()}`);
    //   }
    //   setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 1000);
    // });

    // this.agoraService.client.on('stream-added', (evt) => {
    //   console.log('-------subscribed&&&-------', evt);
    // });

    this.agoraService.client.on('stream-added', (evt) => {
      const streamm = evt.stream;
      console.log('-------added-event-------', streamm.streamId, this.remoteCalls);
      if (!this.remoteCalls.includes(streamm.streamId)) {
        this.agoraService.client.subscribe(streamm, (stream) => {
          console.log('-------subscribed the added event-------', stream);
          stream.play(`agora_local_${streamm.streamId}`);
        }, (err) => {
          console.log("--------------Subscribe stream failed--------------", err);
        });
      }
    });

    this.agoraService.client.on('stream-subscribed', (evt) => {
      const stream = evt.stream;
      console.log('-------subscribed&&&-------', stream.getId());

      if (!this.remoteCalls.includes(stream.streanId)) {

        this.remoteCalls.push(stream.streanId);
      }

      setTimeout(() => stream.play(`agora_local_${stream.streamId}`), 1000);
    });

    this.agoraService.client.on('stream-removed', (evt) => {
      console.log('---------stream stopped-----------', evt);
      const stream = evt.stream;
      stream.stop();
      for (let i = 0; i < this.remoteCalls.length; i++) {
        if (this.remoteCalls[i] === stream.streamId) {
          this.remoteCalls[i].splice(i, 1);
        }
      }
      // this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      // console.log(`Remote stream is removed ${stream.getId()}`);
    });

    this.agoraService.client.on('peer-leave', (evt) => {
      const stream = evt.stream;
      console.log('---------stream stopped-----------', evt);
      if (stream) {
        stream.stop();
        for (let i = 0; i < this.remoteCalls.length; i++) {
          if (this.remoteCalls[i] === stream.streamId) {
            this.remoteCalls[i].splice(i, 1);
          }
        }
        // this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        // console.log(`${evt.uid} left from this channel`);
      }
    });

    // this.agoraService.client.on('stream-removed', (evt) => {
    //   console.log('---------stream stopped-----------', evt);
    //   const stream = evt.stream;
    //   stream.stop();
    //   // this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
    //   for (let i = 0; i < this.remoteCalls.length; i++) {
    //     if (this.remoteCalls[i] === stream.streamId) {
    //       this.remoteCalls[i].splice(i, 1);
    //     }
    //   }
    //   console.log(`Remote stream is removed ${stream.getId()}`);
    // });

    // this.agoraService.client.on('peer-leave', (evt) => {
    //   console.log('---------stream stopped-----------', evt);
    //   const stream = evt.stream;
    //   if (stream) {
    //     stream.stop();
    //     this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
    //     console.log(`${evt.uid} left from this channel`);
    //   }
    // });

  }

  public disableAudio() {
    if (this.localStream) {
      if (!this.muteAudio) {
        this.localStream.muteAudio();
        // this.localStream.disableVideo();
        this.muteAudio = true;
        console.log('-------------audio has been disabled ---------------', this.localStream.hasAudio());
      } else {
        this.localStream.unmuteAudio();
        this.muteAudio = false;
        // this.localStream.enableVideo();
        console.log('-------------audio has been enabled ---------------', this.localStream.hasAudio());
      }
    }
    // return this.localStream.hasAudio();
  }
}
