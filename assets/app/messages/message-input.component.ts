import {Component,OnInit} from '@angular/core';
import {Message} from './message';
import {MessageService}from  './message.service';
import {ErrorService} from '../error/error.service';
@Component({
    selector:'my-message-input',
    template:`
    <section class="col-md-8 col-md-offset-2">
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
    <div class="form-group">
    <label for="content">Content</label>
    <input type="text" ngControl="content" class="form-control" id="content" [value]="message?.content">
    </div>
    <button type="submit" class="btn btn-primary">{{!message ? 'Send Message' : 'Save Message'}}</button>
    <button type="button" class="btn btn-danger" *ngIf="message" (click)="onCancel()">Cancel</button>
    </form>
    </section>`
})

export class MessageInputComponent implements OnInit{

    message:Message=null;

constructor(private _messageService:MessageService,private _errorService:ErrorService){

}

ngOnInit(){
    this._messageService.isMessageEdit.subscribe(
        message=>{
           this.message=message; 
        }
    )
}

onSubmit(form:any){

    if(this.message){
  this.message.content=form.content;
  this._messageService.updateMessage(this.message)
  .subscribe( data =>{
      console.log(data);
},
error=>{
    error => this._errorService.handleError(error)
} 
  );
  this.message=null;
    }else{
    const message:Message=new Message(form.content,'Dil');
    this._messageService.addMessage(message)
    .subscribe(
        data=> { 
            console.log(data);
            this._messageService.messages.push(data);
        },
       error => this._errorService.handleError(error)
    );
    }
}


 onCancel(){
     this.message=null;
 }   

}