import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageContainerComponent } from './message-container/message-container.component';
import { FormsModule } from '@angular/forms';
import { FormChatComponent } from './message-container/form-chat/form-chat.component';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageContainerComponent,
    FormChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
