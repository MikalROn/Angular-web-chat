import { Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public url: string = 'ws://127.0.0.1:8000'
  private ws: WebSocket;
  private username: string = 'TigrePadrao';
  private listaMenssagens: Array<string> = [];

  get menssagens () {return this.listaMenssagens.reverse()}

  get user () { return this.username}

  constructor (){
    this.ws = this.connect();
  }

  connect(): WebSocket {
      let localSock: WebSocket = new WebSocket(`${this.url}/?username=${this.username}`);
      this.onMessage(localSock);
      return localSock
  }

  onMessage(socket: WebSocket) {
    socket.onmessage = event => this.listaMenssagens.push(event.data)
  }

  changeName(username: string): void{
    this.listaMenssagens.length = 0
    alert(`Nome foi alterado de ${this.username} -> para -> ${username}`)
    this.ws.close();
    this.username = username;
    this.ws = this.connect();
  }

  sendMessage(message: string): void{
    this.ws.send(
      message
    )
  }
}
