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
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        console.log(localStorage.getItem('userId') == this.message.userId ? 'true' : 'false');
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message);
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.message.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n    <article class=\"panel panel-default\">\n        <div class=\"panel-body\">\n        {{message.content}}\n        </div>\n        <footer class=\"panel-footer\">\n        <div class=\"author\">\n        {{message.userName}}\n        </div>\n        <div class=\"config\" *ngIf=\"belongsToUser()\">\n        <a (click)=\"onEdit()\">Edit</a> \n        <a (click)=\"onDelete()\">Delete</a>\n        </div>\n        </footer>\n        </article>\n\n    ",
            styles: ["\n    .author{\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n    }\n    .config{\n        display: inline;\n        text-align: right;\n        font-size: 12px;\n        width: 19px;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFDcEUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBc0NqRDtJQU9BLDBCQUFvQixlQUE4QjtRQUE5QixvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUh4QyxnQkFBVyxHQUFDLElBQUksbUJBQVksRUFBVSxDQUFDO0lBR0csQ0FBQztJQUVyRCxpQ0FBTSxHQUFOO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUUsQ0FBQztRQUN0RixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNMLHdDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0lBakJEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQXhDVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsWUFBWTtZQUNyQixRQUFRLEVBQUMseWNBZ0JSO1lBQ0QsTUFBTSxFQUFDLENBQUMsb1FBYVAsQ0FBQztTQUdMLENBQUM7O3dCQUFBO0lBc0JGLHVCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSx3QkFBZ0IsbUJBcUI1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteS1tZXNzYWdlJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAge3ttZXNzYWdlLmNvbnRlbnR9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAge3ttZXNzYWdlLnVzZXJOYW1lfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCIgKm5nSWY9XCJiZWxvbmdzVG9Vc2VyKClcIj5cclxuICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPiBcclxuICAgICAgICA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgLmF1dGhvcntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmNvbmZpZ3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgfVxyXG4gICAgYF1cclxuICAgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudHtcclxuXHJcbkBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcblxyXG5AT3V0cHV0KCkgZWRpdENsaWNrZWQ9bmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cclxuY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6TWVzc2FnZVNlcnZpY2Upe31cclxuXHJcbm9uRWRpdCgpe1xyXG5jb25zb2xlLmxvZyggbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpPT10aGlzLm1lc3NhZ2UudXNlcklkID8gJ3RydWUnIDogJ2ZhbHNlJyApO1xyXG50aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xyXG59XHJcblxyXG5vbkRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSk7ICAgICBcclxuICAgIH1cclxuYmVsb25nc1RvVXNlcigpe1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKT09dGhpcy5tZXNzYWdlLnVzZXJJZDtcclxufVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
