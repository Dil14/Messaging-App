"use strict";
var core_1 = require('@angular/core');
var error_1 = require('./error');
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        console.log(error);
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yL2Vycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBb0IsU0FFcEIsQ0FBQyxDQUY0QjtBQUU3QjtJQUFBO1FBQ0EsaUJBQVksR0FBQyxJQUFJLG1CQUFZLEVBQVMsQ0FBQztJQVN2QyxDQUFDO0lBUEQsa0NBQVcsR0FBWCxVQUFZLEtBQVM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFNLFNBQVMsR0FBQyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdELG1CQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxvQkFBWSxlQVV4QixDQUFBIiwiZmlsZSI6ImVycm9yL2Vycm9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RXJyb3J9IGZyb20gJy4vZXJyb3InXHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNle1xyXG5lcnJvck9jY3VyZWQ9bmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbmhhbmRsZUVycm9yKGVycm9yOmFueSl7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvckRhdGE9bmV3IEVycm9yKGVycm9yLnRpdGxlLGVycm9yLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5lcnJvck9jY3VyZWQuZW1pdChlcnJvckRhdGEpO1xyXG59XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
