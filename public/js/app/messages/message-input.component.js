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
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var error_service_1 = require('../error/error.service');
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService, _errorService) {
        this._messageService = _messageService;
        this._errorService = _errorService;
        this.message = null;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.isMessageEdit.subscribe(function (message) {
            _this.message = message;
        });
    };
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                (function (error) { return _this._errorService.handleError(error); });
            });
            this.message = null;
        }
        else {
            var message = new message_1.Message(form.content, 'Dil');
            this._messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this._messageService.messages.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.message = null;
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n    <div class=\"form-group\">\n    <label for=\"content\">Content</label>\n    <input type=\"text\" ngControl=\"content\" class=\"form-control\" id=\"content\" [value]=\"message?.content\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">{{!message ? 'Send Message' : 'Save Message'}}</button>\n    <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"message\" (click)=\"onCancel()\">Cancel</button>\n    </form>\n    </section>"
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBZ0JwRDtJQUlBLCtCQUFvQixlQUE4QixFQUFTLGFBQTBCO1FBQWpFLG9CQUFlLEdBQWYsZUFBZSxDQUFlO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFGakYsWUFBTyxHQUFTLElBQUksQ0FBQztJQUl6QixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN4QyxVQUFBLE9BQU87WUFDSixLQUFJLENBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBUTtRQUFqQixpQkF3QkM7UUF0QkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMvQyxTQUFTLENBQUUsVUFBQSxJQUFJO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxDQUFBLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLEVBQUE7WUFDbEQsQ0FBQyxDQUNFLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDTixJQUFNLE9BQU8sR0FBUyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZDLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsRUFDRixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNoRCxDQUFDO1FBQ0YsQ0FBQztJQUNMLENBQUM7SUFHQSx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQTVERjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsa0JBQWtCO1lBQzNCLFFBQVEsRUFBQyxzakJBVUU7U0FDZCxDQUFDOzs2QkFBQTtJQWlERiw0QkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1ksNkJBQXFCLHdCQStDakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX1mcm9tICAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vZXJyb3IvZXJyb3Iuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J215LW1lc3NhZ2UtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5nQ29udHJvbD1cImNvbnRlbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiIFt2YWx1ZV09XCJtZXNzYWdlPy5jb250ZW50XCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3shbWVzc2FnZSA/ICdTZW5kIE1lc3NhZ2UnIDogJ1NhdmUgTWVzc2FnZSd9fTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiICpuZ0lmPVwibWVzc2FnZVwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBtZXNzYWdlOk1lc3NhZ2U9bnVsbDtcclxuXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOk1lc3NhZ2VTZXJ2aWNlLHByaXZhdGUgX2Vycm9yU2VydmljZTpFcnJvclNlcnZpY2Upe1xyXG5cclxufVxyXG5cclxubmdPbkluaXQoKXtcclxuICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmlzTWVzc2FnZUVkaXQuc3Vic2NyaWJlKFxyXG4gICAgICAgIG1lc3NhZ2U9PntcclxuICAgICAgICAgICB0aGlzLm1lc3NhZ2U9bWVzc2FnZTsgXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5vblN1Ym1pdChmb3JtOmFueSl7XHJcblxyXG4gICAgaWYodGhpcy5tZXNzYWdlKXtcclxuICB0aGlzLm1lc3NhZ2UuY29udGVudD1mb3JtLmNvbnRlbnQ7XHJcbiAgdGhpcy5fbWVzc2FnZVNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpXHJcbiAgLnN1YnNjcmliZSggZGF0YSA9PntcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbn0sXHJcbmVycm9yPT57XHJcbiAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbn0gXHJcbiAgKTtcclxuICB0aGlzLm1lc3NhZ2U9bnVsbDtcclxuICAgIH1lbHNle1xyXG4gICAgY29uc3QgbWVzc2FnZTpNZXNzYWdlPW5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwnRGlsJyk7XHJcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIGRhdGE9PiB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZXMucHVzaChkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiBvbkNhbmNlbCgpe1xyXG4gICAgIHRoaXMubWVzc2FnZT1udWxsO1xyXG4gfSAgIFxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
