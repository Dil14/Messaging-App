import {Component} from '@angular/core';
import {SignUpComponent} from './signup.component'
import{SignInComponent} from './signin.component'
import {SignOutComponent} from './signout.component'
import {Routes,ROUTER_DIRECTIVES} from '@angular/router'

import {AuthServices} from './auth.service';

@Component({
    selector:'myAuth',
    template:`
    <header class="row spacing">
    <nav class="col-md-8 col-md-offset-2">
    <ul class="nav nav-tabs">
    <li><a  [routerLink]="['./signup']">SignUp</a></li>
    <li><a *ngIf="!isLoggedIn()" [routerLink]="['./signin']">SignIn</a></li>
    <li><a *ngIf="isLoggedIn()" [routerLink]="['./signout']">SignOut</a></li>
    </ul>
    </nav>
    </header> 
    <div class="row spacing">
    <router-outlet></router-outlet>
    </div>`,
    directives:[ROUTER_DIRECTIVES],
     styles:[`
    .router-link-active{
        color:#555;
        cursor:default;
        background-color:#fff;
        border:1px solid #ddd;
        border-bottom-color:transparent;
    }`]
})
@Routes([
    {path:'/signup',component:SignUpComponent},
    {path:'/signin',component:SignInComponent},
    {path:'/signout',component:SignOutComponent}
])
export class AuthenticationComponent{

constructor(private _authServices:AuthServices){}

isLoggedIn(){
    return this._authServices.isLoggedIn();
}
}