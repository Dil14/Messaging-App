import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Message} from './message';
import {MessageService} from './message.service';

@Component({
    selector:'my-message',
    template:`
    <article class="panel panel-default">
        <div class="panel-body">
        {{message.content}}
        </div>
        <footer class="panel-footer">
        <div class="author">
        {{message.userName}}
        </div>
        <div class="config" *ngIf="belongsToUser()">
        <a (click)="onEdit()">Edit</a> 
        <a (click)="onDelete()">Delete</a>
        </div>
        </footer>
        </article>

    `,
    styles:[`
    .author{
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
    .config{
        display: inline;
        text-align: right;
        font-size: 12px;
        width: 19px;
    }
    `]
   

})
export class MessageComponent{

@Input() message: Message;

@Output() editClicked=new EventEmitter<string>();


constructor(private _messageService:MessageService){}

onEdit(){
console.log( localStorage.getItem('userId')==this.message.userId ? 'true' : 'false' );
this._messageService.editMessage(this.message);
}

onDelete() {
        this._messageService.deleteMessage(this.message);     
    }
belongsToUser(){
    return localStorage.getItem('userId')==this.message.userId;
}

}