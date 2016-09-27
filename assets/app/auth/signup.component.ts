import {Component,OnInit} from '@angular/core';

import{AuthServices} from './auth.service'

import {User} from './user'

import {FormBuilder,ControlGroup,Validators,Control} from '@angular/common'

import {ErrorService} from '../error/error.service';

@Component({
    selector:'my-signup',
    template:`
    <section class="col-md-8 col-md-offset-2">
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" [ngFormControl]="myForm.find('firstName')" class="form-control" id="firstName"/>
    </div>
     <div class="form-group">
    <label for="lastName">Last Name</label>
    <input [ngFormControl]="myForm.find('lastName')" type="text" class="form-control" id="lastName"/>
    </div>
    <div class="form-group">
    <label for="email">Email</label>
    <input type="email" [ngFormControl]="myForm.find('email')" class="form-control" id="email"/>
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <input type="password"  [ngFormControl]="myForm.find('password')" class="form-control" id="password"/>
    </div>
    <div class="form-group">
    <button type="submit" class="btn btn-primary" [disabled]="! myForm.valid">SignUp</button>
    </div>
   </form>
    </section>`,
    providers:[AuthServices]
})
export class SignUpComponent implements OnInit{

    myForm:ControlGroup;

    constructor(private _fb:FormBuilder,private _authServices:AuthServices,private _errorService:ErrorService){}

    onSubmit(){
        const user=new User(this.myForm.value.email,this.myForm.value.password,this.myForm.value.firstName,
        this.myForm.value.lastName);
        this._authServices.signup(user)
        .subscribe(
            data => console.log(data),
            error => this._errorService.handleError(error)
        );
    }

    ngOnInit(){
        this.myForm=this._fb.group({
            firstName:['',Validators.required],
            lastName:['',Validators.required],
            email:['',Validators.compose(
                [
                    Validators.required,
                    this.isEmail
                ]
            )],
            password:['',Validators.required]
        });
    }

  private isEmail(control:Control):{[s:string]:boolean} {
      var email = control.value;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
      return {invalidEmail:true};
      }              
  
    }

}