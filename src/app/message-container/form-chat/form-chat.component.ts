import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css']
})
export class FormChatComponent {
  public message: string = '';

  constructor(private socketService: SocketService){}

  sendMessage() {
    this.socketService.sendMessage(this.message)
    this._limparText();
  }
  private _limparText() {
    this.message = '';
  }
}
