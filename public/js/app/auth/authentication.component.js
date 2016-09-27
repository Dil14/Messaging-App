"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var signout_component_1 = require('./signout.component');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_authServices) {
        this._authServices = _authServices;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this._authServices.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'myAuth',
            template: "\n    <header class=\"row spacing\">\n    <nav class=\"col-md-8 col-md-offset-2\">\n    <ul class=\"nav nav-tabs\">\n    <li><a  [routerLink]=\"['./signup']\">SignUp</a></li>\n    <li><a *ngIf=\"!isLoggedIn()\" [routerLink]=\"['./signin']\">SignIn</a></li>\n    <li><a *ngIf=\"isLoggedIn()\" [routerLink]=\"['./signout']\">SignOut</a></li>\n    </ul>\n    </nav>\n    </header> \n    <div class=\"row spacing\">\n    <router-outlet></router-outlet>\n    </div>",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n    .router-link-active{\n        color:#555;\n        cursor:default;\n        background-color:#fff;\n        border:1px solid #ddd;\n        border-bottom-color:transparent;\n    }"]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignUpComponent },
            { path: '/signin', component: signin_component_1.SignInComponent },
            { path: '/signout', component: signout_component_1.SignOutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthServices])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsaUNBQThCLG9CQUM5QixDQUFDLENBRGlEO0FBQ2xELGlDQUE2QixvQkFDN0IsQ0FBQyxDQURnRDtBQUNqRCxrQ0FBK0IscUJBQy9CLENBQUMsQ0FEbUQ7QUFDcEQsdUJBQXVDLGlCQUV2QyxDQUFDLENBRnVEO0FBRXhELDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBZ0M1QztJQUVBLGlDQUFvQixhQUEwQjtRQUExQixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtJQUFFLENBQUM7SUFFakQsNENBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFwQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFFBQVE7WUFDakIsUUFBUSxFQUFDLDhjQVlGO1lBQ1AsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7WUFDN0IsTUFBTSxFQUFDLENBQUMsMkxBT1AsQ0FBQztTQUNOLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7WUFDMUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsb0NBQWdCLEVBQUM7U0FDL0MsQ0FBQzs7K0JBQUE7SUFRRiw4QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksK0JBQXVCLDBCQU9uQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50J1xyXG5pbXBvcnR7U2lnbkluQ29tcG9uZW50fSBmcm9tICcuL3NpZ25pbi5jb21wb25lbnQnXHJcbmltcG9ydCB7U2lnbk91dENvbXBvbmVudH0gZnJvbSAnLi9zaWdub3V0LmNvbXBvbmVudCdcclxuaW1wb3J0IHtSb3V0ZXMsUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbmltcG9ydCB7QXV0aFNlcnZpY2VzfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteUF1dGgnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGhlYWRlciBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XHJcbiAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgIDxsaT48YSAgW3JvdXRlckxpbmtdPVwiWycuL3NpZ251cCddXCI+U2lnblVwPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCIgW3JvdXRlckxpbmtdPVwiWycuL3NpZ25pbiddXCI+U2lnbkluPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgKm5nSWY9XCJpc0xvZ2dlZEluKClcIiBbcm91dGVyTGlua109XCJbJy4vc2lnbm91dCddXCI+U2lnbk91dDwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+IFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgIHN0eWxlczpbYFxyXG4gICAgLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgICAgICBjb2xvcjojNTU1O1xyXG4gICAgICAgIGN1cnNvcjpkZWZhdWx0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIH1gXVxyXG59KVxyXG5AUm91dGVzKFtcclxuICAgIHtwYXRoOicvc2lnbnVwJyxjb21wb25lbnQ6U2lnblVwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvc2lnbmluJyxjb21wb25lbnQ6U2lnbkluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvc2lnbm91dCcsY29tcG9uZW50OlNpZ25PdXRDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudHtcclxuXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlczpBdXRoU2VydmljZXMpe31cclxuXHJcbmlzTG9nZ2VkSW4oKXtcclxuICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZXMuaXNMb2dnZWRJbigpO1xyXG59XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
