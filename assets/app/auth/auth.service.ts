import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {User} from './user'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthServices{

    constructor(private _http:Http){}

    signup(user:User){
        const body= JSON.stringify(user);
        const header=new Headers({'Content-Type':'application/json'});
        return this._http.post('http://localhost:3000/user',body,{headers:header})
        .map(response => response.json())
        .catch(error => Observable.throw(error.json()));
    }

    signin(user:User){
        const body=JSON.stringify(user);
        const header=new Headers({'Content-Type':'application/json'});
        return this._http.post('http://localhost:3000/user/signin',body,{headers:header})
        .map( response =>response.json())
        .catch(error => Observable.throw(error.json()));
    }

    signout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token')!=null;
    }

}