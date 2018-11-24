import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/messages/messages.service'
import { Result } from '../beans/result';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  initialMessage: string = 'We gaan beginnen';
  messages: String[];

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messageService.retrieveMessages()
      .subscribe(messages => this.messages = messages);
  }

  getInitialMessage(): String {
    if (this.messages.length < 1) {
      return this.initialMessage;
    } else {
      return null;
    }

  }

}