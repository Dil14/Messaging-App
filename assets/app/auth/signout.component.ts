import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthServices} from './auth.service';

@Component({
    selector:'my-signout',
    template:`
    <section class="col-md-8 col-md-offset-2">
    <button class="bnt btn-danger" (click)="onClick()">Signout</button>
    </section>`
})
export class SignOutComponent{

constructor(private _authServices:AuthServices,private _router:Router){}

    onClick(){
   this._authServices.signout();
   this._router.navigate(['/auth/signin']);
    }

}