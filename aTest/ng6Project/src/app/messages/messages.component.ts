import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // messageService is public so that the template can bind to messageService.xxx
  // Angular can only bind to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
