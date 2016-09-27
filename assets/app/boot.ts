///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';

import {ROUTER_PROVIDERS} from '@angular/router';

import { AppComponent } from "./app.component";

import {MessageService}from  './messages/message.service';

import {HTTP_PROVIDERS} from '@angular/http';

import {provide} from '@angular/core';

import {AuthServices} from './auth/auth.service'

import {ErrorService} from './error/error.service'

import {LocationStrategy,HashLocationStrategy} from '@angular/common'

bootstrap(AppComponent,[MessageService,AuthServices,ErrorService,ROUTER_PROVIDERS,provide(LocationStrategy,{useClass:HashLocationStrategy}),
HTTP_PROVIDERS]);