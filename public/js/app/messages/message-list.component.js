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
var message_component_ts_1 = require('./message.component.ts');
var message_service_1 = require('./message.service');
var error_service_1 = require('../error/error.service');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService, _errorService) {
        this._messageService = _messageService;
        this._errorService = _errorService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessage()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this._messageService.messages = messages;
        }, function (error) { return console.log(error); });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "<section class=\"col-md-8 col-md-offset-2\">\n        <my-message *ngFor=\"let message of messages\" [message]=\"message\"> </my-message>\n        </section>\n        ",
            directives: [message_component_ts_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQ0FBK0Isd0JBQXdCLENBQUMsQ0FBQTtBQUV4RCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQVVwRDtJQUdBLDhCQUFvQixlQUE4QixFQUFTLGFBQTBCO1FBQWpFLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWE7SUFFckYsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO2FBQ2hDLFNBQVMsQ0FDTixVQUFBLFFBQVE7WUFDSixLQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBQyxRQUFRLENBQUM7UUFDM0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNGLENBQUM7SUF4QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLGlCQUFpQjtZQUMxQixRQUFRLEVBQUMseUtBR0o7WUFDRixVQUFVLEVBQUMsQ0FBQyx1Q0FBZ0IsQ0FBQztTQUNuQyxDQUFDOzs0QkFBQTtJQXFCRiwyQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksNEJBQW9CLHVCQW9CaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50LnRzJztcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi9lcnJvci9lcnJvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J215LW1lc3NhZ2UtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTpgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICA8bXktbWVzc2FnZSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIj4gPC9teS1tZXNzYWdlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBgLFxyXG4gICAgICAgZGlyZWN0aXZlczpbTWVzc2FnZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxubWVzc2FnZXM6TWVzc2FnZVtdO1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTpNZXNzYWdlU2VydmljZSxwcml2YXRlIF9lcnJvclNlcnZpY2U6RXJyb3JTZXJ2aWNlKXtcclxuXHJcbn1cclxuXHJcbm5nT25Jbml0KCl7XHJcbnRoaXMuX21lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2UoKVxyXG4uc3Vic2NyaWJlKFxyXG4gICAgbWVzc2FnZXMgPT57XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcz1tZXNzYWdlcztcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcz1tZXNzYWdlcztcclxuICAgIH0sXHJcbiAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuKTtcclxufVxyXG5cclxuICAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
