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
var router_1 = require('@angular/router');
var messages_component_1 = require('./messages/messages.component');
var authentication_component_1 = require('./auth/authentication.component');
var error_component_1 = require('./error/error.component');
var header_component_1 = require('./header.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n    <my-header></my-header>\n    <router-outlet></router-outlet>\n    </div>\n    <my-error></my-error>     \n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, error_component_1.ErrorComponent]
        }),
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBK0IsK0JBQStCLENBQUMsQ0FBQTtBQUMvRCx5Q0FBcUMsaUNBQWlDLENBQUMsQ0FBQTtBQUN2RSxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQXNCbkQ7SUFBQTtJQUdBLENBQUM7SUFyQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHFKQU1UO1lBQ0QsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUMsa0NBQWUsRUFBQyxnQ0FBYyxDQUFDO1NBR2hFLENBQUM7UUFFRCxlQUFNLENBQUM7WUFDUixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLHNDQUFpQixFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsa0RBQXVCLEVBQUM7U0FDakQsQ0FBQzs7b0JBQUE7SUFJRixtQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksb0JBQVksZUFHeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcyxST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydHtNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0e0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7RXJyb3JDb21wb25lbnR9IGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICAgIDxteS1lcnJvcj48L215LWVycm9yPiAgICAgXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUyxIZWFkZXJDb21wb25lbnQsRXJyb3JDb21wb25lbnRdXG4gICBcbiAgIFxufSlcblxuQFJvdXRlcyhbXG57cGF0aDogJy8nLCBjb21wb25lbnQ6TWVzc2FnZXNDb21wb25lbnR9LFxue3BhdGg6ICcvYXV0aCcsIGNvbXBvbmVudDpBdXRoZW50aWNhdGlvbkNvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
