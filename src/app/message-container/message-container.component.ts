import { SocketService } from './../services/socket.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent {
    public messages: Array<any>;
    public username: string;

    constructor(private socket: SocketService){
      this.messages = this.socket.menssagens
      this.username = this.socket.user
    }

    changeUsername() {
      this.socket.changeName(this.username);
    }

}
