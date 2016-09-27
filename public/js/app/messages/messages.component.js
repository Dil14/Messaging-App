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
var message_input_component_1 = require('./message-input.component');
var message_list_component_1 = require('./message-list.component');
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'my-messages',
            template: " <div class=\"row spacing\">\n        <my-message-input></my-message-input>\n        </div>\n         <div class=\"row spacing\">\n        <my-message-list></my-message-list>\n        </div>",
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent],
            styles: [".spacing {\n  margin-bottom: 20px;\n}"]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2hFLHVDQUFtQywwQkFFbkMsQ0FBQyxDQUY0RDtBQWU3RDtJQUFBO0lBRUEsQ0FBQztJQWZEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxhQUFhO1lBQ3RCLFFBQVEsRUFBQyxnTUFLRTtZQUNQLFVBQVUsRUFBQyxDQUFDLDZDQUFvQixFQUFDLCtDQUFxQixDQUFDO1lBQ3ZELE1BQU0sRUFBQyxDQUFDLHVDQUVkLENBQUM7U0FDRixDQUFDOzt5QkFBQTtJQUdGLHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx5QkFBaUIsb0JBRTdCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2VJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZS1saXN0LmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J215LW1lc3NhZ2VzJyxcclxuICAgIHRlbXBsYXRlOmAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XHJcbiAgICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cclxuICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxyXG4gICAgICAgIDwvZGl2PmAsXHJcbiAgICAgICAgZGlyZWN0aXZlczpbTWVzc2FnZUxpc3RDb21wb25lbnQsTWVzc2FnZUlucHV0Q29tcG9uZW50XSxcclxuICAgICAgICBzdHlsZXM6W2Auc3BhY2luZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
