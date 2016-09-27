import {Component,OnInit} from '@angular/core';
import {MessageComponent} from './message.component.ts';
import {Message} from './message';
import {MessageService} from './message.service';
import {ErrorService} from '../error/error.service';

@Component({
    selector:'my-message-list',
    template:`<section class="col-md-8 col-md-offset-2">
        <my-message *ngFor="let message of messages" [message]="message"> </my-message>
        </section>
        `,
       directives:[MessageComponent]
})
export class MessageListComponent implements OnInit{

messages:Message[];
constructor(private _messageService:MessageService,private _errorService:ErrorService){

}

ngOnInit(){
this._messageService.getMessage()
.subscribe(
    messages =>{
        this.messages=messages;
        this._messageService.messages=messages;
    },
    error => console.log(error)
);
}

     

}