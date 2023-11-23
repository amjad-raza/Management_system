import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { ChatAreaComponent } from '../chat-area/chat-area.component';
import { ChatInfoComponent } from '../chat-info/chat-info.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MessageComponent,
    ChatAreaComponent,
    ChatInfoComponent,
    ChatListComponent,
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,MatRippleModule,MatButtonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MessageModule { }
