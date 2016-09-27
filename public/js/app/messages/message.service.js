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
var message_1 = require('./message');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
        this.isMessageEdit = new core_1.EventEmitter();
    }
    MessageService.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/message' + token, body, { headers: header })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data.user.firstname, data._id, data.user._id);
            return message;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.getMessage = function () {
        return this._http.get('http://localhost:3000/message')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            data.forEach(function (element) {
                var message = new message_1.Message(element.content, element.user.firstname, element._id, element.user._id);
                objs.push(message);
            });
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.updateMessage = function (message) {
        var body = JSON.stringify(message);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/message/' + message.messageId + token, body, { headers: header })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, 'Dil', data._id, null);
            return message;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.isMessageEdit.emit(message);
        //this.messages[this.messages.indexOf(message)]=new Message('Edited','Dil');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        console.log('http://localhost:3000/message/' + message.messageId + token);
        return this._http.delete('http://localhost:3000/message/' + message.messageId)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUczQztJQUVJLHdCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNsQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUMsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFGTixDQUFDO0lBSWpDLG1DQUFVLEdBQVYsVUFBVyxPQUFlO1FBRTFCLElBQU0sSUFBSSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sS0FBSyxHQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsR0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO2FBQ2xGLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxJQUFNLElBQUksR0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQy9CLElBQUksT0FBTyxHQUFDLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FB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UyxHQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUMsT0FBTyxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUMvRSxTQUFTLENBQ0MsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBaEVMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFrRWIscUJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLHNCQUFjLGlCQWlFMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydHtIdHRwLEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0luamVjdGFibGUsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXt9XHJcbm1lc3NhZ2VzOk1lc3NhZ2VbXT1bXTtcclxuaXNNZXNzYWdlRWRpdD1uZXcgRXZlbnRFbWl0dGVyPE1lc3NhZ2U+KCk7XHJcblxyXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOk1lc3NhZ2Upe1xyXG4gICAgXHJcbiAgICBjb25zdCBib2R5PUpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgaGVhZGVyPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICBjb25zdCB0b2tlbj0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScrdG9rZW4sYm9keSx7aGVhZGVyczpoZWFkZXJ9KVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YT1yZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgIHZhciBtZXNzYWdlPW5ldyBNZXNzYWdlKGRhdGEuY29udGVudCxkYXRhLnVzZXIuZmlyc3RuYW1lLGRhdGEuX2lkLGRhdGEudXNlci5faWQpO1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXNzYWdlKCl7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJylcclxuICAgICAgICAubWFwKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhPXJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgIHZhciBvYmpzOmFueVtdPVtdO1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZT1uZXcgTWVzc2FnZShlbGVtZW50LmNvbnRlbnQsZWxlbWVudC51c2VyLmZpcnN0bmFtZSxlbGVtZW50Ll9pZCxlbGVtZW50LnVzZXIuX2lkKTtcclxuICAgICAgICAgICAgICAgIG9ianMucHVzaChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICByZXR1cm4gb2JqcztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKXtcclxuICAgIGNvbnN0IGJvZHk9SlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICBjb25zdCBoZWFkZXI9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgY29uc3QgdG9rZW49IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycrbWVzc2FnZS5tZXNzYWdlSWQrdG9rZW4sYm9keSx7aGVhZGVyczpoZWFkZXJ9KVxyXG4gICAgLm1hcCggcmVzcG9uc2UgPT57XHJcbiAgICAgICAgY29uc3QgZGF0YT1yZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgIHZhciBtZXNzYWdlPW5ldyBNZXNzYWdlKGRhdGEuY29udGVudCwnRGlsJyxkYXRhLl9pZCxudWxsKTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH0pIFxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy5pc01lc3NhZ2VFZGl0LmVtaXQobWVzc2FnZSk7XHJcbiAgICAgICAgLy90aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKV09bmV3IE1lc3NhZ2UoJ0VkaXRlZCcsJ0RpbCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XHJcbiAgICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwgMSk7XHJcbiAgICAgICAgIGNvbnN0IHRva2VuPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICAgY29uc29sZS5sb2coJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycrbWVzc2FnZS5tZXNzYWdlSWQrdG9rZW4pOyAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycrbWVzc2FnZS5tZXNzYWdlSWQpXHJcbiAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
