import { Component } from '@angular/core';
import {Routes,ROUTER_DIRECTIVES} from '@angular/router';
import{MessagesComponent} from './messages/messages.component';
import{AuthenticationComponent} from './auth/authentication.component';
import {ErrorComponent} from './error/error.component';
import {HeaderComponent} from './header.component';



@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <my-header></my-header>
    <router-outlet></router-outlet>
    </div>
    <my-error></my-error>     
    `,
    directives:[ROUTER_DIRECTIVES,HeaderComponent,ErrorComponent]
   
   
})

@Routes([
{path: '/', component:MessagesComponent},
{path: '/auth', component:AuthenticationComponent}
])
export class AppComponent {

   
}
