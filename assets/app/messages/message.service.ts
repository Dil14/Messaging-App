import {Message} from './message';
import{Http,Headers} from '@angular/http';
import {Injectable,EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService{

    constructor(private _http:Http){}
messages:Message[]=[];
isMessageEdit=new EventEmitter<Message>();

    addMessage(message:Message){
    
    const body=JSON.stringify(message);
    const header= new Headers({'Content-Type':'application/json'});
    const token= localStorage.getItem('token') ? '?token=' +localStorage.getItem('token') : '';
    return this._http.post('http://localhost:3000/message'+token,body,{headers:header})
    .map(response => {
        const data=response.json().obj;
        var message=new Message(data.content,data.user.firstname,data._id,data.user._id);
        return message;
    })
    .catch(error => Observable.throw(error.json()));

    }

    getMessage(){
    
        return this._http.get('http://localhost:3000/message')
        .map(response =>{
            const data=response.json().obj;
            var objs:any[]=[];
            data.forEach(element => {
                var message=new Message(element.content,element.user.firstname,element._id,element.user._id);
                objs.push(message);
            }); 
            return objs;
        })
        .catch(error => Observable.throw(error.json()));
    }

    updateMessage(message:Message){
    const body=JSON.stringify(message);
    const header=new Headers({'Content-Type':'application/json'});
    const token= localStorage.getItem('token') ? '?token=' +localStorage.getItem('token') : '';
    return this._http.patch('http://localhost:3000/message/'+message.messageId+token,body,{headers:header})
    .map( response =>{
        const data=response.json().obj;
        var message=new Message(data.content,'Dil',data._id,null);
        return message;
    }) 
    .catch(error => Observable.throw(error.json())); 
    }

    editMessage(message:Message){
        this.isMessageEdit.emit(message);
        //this.messages[this.messages.indexOf(message)]=new Message('Edited','Dil');
    }
    
    deleteMessage(message:Message){
         this.messages.splice(this.messages.indexOf(message), 1);
         const token= localStorage.getItem('token') ? '?token=' +localStorage.getItem('token') : '';
         console.log('http://localhost:3000/message/'+message.messageId+token);   
         return this._http.delete('http://localhost:3000/message/'+message.messageId)
     .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
    
}