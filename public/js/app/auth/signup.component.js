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
var auth_service_1 = require('./auth.service');
var user_1 = require('./user');
var common_1 = require('@angular/common');
var error_service_1 = require('../error/error.service');
var SignUpComponent = (function () {
    function SignUpComponent(_fb, _authServices, _errorService) {
        this._fb = _fb;
        this._authServices = _authServices;
        this._errorService = _errorService;
    }
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this._authServices.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SignUpComponent.prototype.isEmail = function (control) {
        var email = control.value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            return { invalidEmail: true };
        }
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input type=\"text\" [ngFormControl]=\"myForm.find('firstName')\" class=\"form-control\" id=\"firstName\"/>\n    </div>\n     <div class=\"form-group\">\n    <label for=\"lastName\">Last Name</label>\n    <input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" class=\"form-control\" id=\"lastName\"/>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [ngFormControl]=\"myForm.find('email')\" class=\"form-control\" id=\"email\"/>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\"  [ngFormControl]=\"myForm.find('password')\" class=\"form-control\" id=\"password\"/>\n    </div>\n    <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"! myForm.valid\">SignUp</button>\n    </div>\n   </form>\n    </section>",
            providers: [auth_service_1.AuthServices]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthServices, error_service_1.ErrorService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLDZCQUEwQixnQkFFMUIsQ0FBQyxDQUZ5QztBQUUxQyxxQkFBbUIsUUFFbkIsQ0FBQyxDQUYwQjtBQUUzQix1QkFBMEQsaUJBRTFELENBQUMsQ0FGMEU7QUFFM0UsOEJBQTJCLHdCQUF3QixDQUFDLENBQUE7QUE4QnBEO0lBSUkseUJBQW9CLEdBQWUsRUFBUyxhQUEwQixFQUFTLGFBQTBCO1FBQXJGLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFhO0lBQUUsQ0FBQztJQUU1RyxrQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFNLElBQUksR0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDbEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzlCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDTixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsU0FBUyxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLFFBQVEsRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxPQUFPLENBQ3hCO29CQUNJLG1CQUFVLENBQUMsUUFBUTtvQkFDbkIsSUFBSSxDQUFDLE9BQU87aUJBQ2YsQ0FDSixDQUFDO1lBQ0YsUUFBUSxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSyxpQ0FBTyxHQUFmLFVBQWdCLE9BQWU7UUFDM0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyx3SkFBd0osQ0FBQztRQUNsSyxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUMzQixDQUFDO0lBRUgsQ0FBQztJQWpFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsV0FBVztZQUNwQixRQUFRLEVBQUMscWtDQXVCRTtZQUNYLFNBQVMsRUFBQyxDQUFDLDJCQUFZLENBQUM7U0FDM0IsQ0FBQzs7dUJBQUE7SUF3Q0Ysc0JBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLHVCQUFlLGtCQXVDM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0e0F1dGhTZXJ2aWNlc30gZnJvbSAnLi9hdXRoLnNlcnZpY2UnXHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcidcclxuXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsQ29udHJvbEdyb3VwLFZhbGlkYXRvcnMsQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5cclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9yL2Vycm9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbXktc2lnbnVwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZmlyc3ROYW1lXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJsYXN0TmFtZVwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhIG15Rm9ybS52YWxpZFwiPlNpZ25VcDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5gLFxyXG4gICAgcHJvdmlkZXJzOltBdXRoU2VydmljZXNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgbXlGb3JtOkNvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcixwcml2YXRlIF9hdXRoU2VydmljZXM6QXV0aFNlcnZpY2VzLHByaXZhdGUgX2Vycm9yU2VydmljZTpFcnJvclNlcnZpY2Upe31cclxuXHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnN0IHVzZXI9bmV3IFVzZXIodGhpcy5teUZvcm0udmFsdWUuZW1haWwsdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQsdGhpcy5teUZvcm0udmFsdWUuZmlyc3ROYW1lLFxyXG4gICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmxhc3ROYW1lKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZXMuc2lnbnVwKHVzZXIpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLm15Rm9ybT10aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZW1haWw6WycnLFZhbGlkYXRvcnMuY29tcG9zZShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbWFpbFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIHByaXZhdGUgaXNFbWFpbChjb250cm9sOkNvbnRyb2wpOntbczpzdHJpbmddOmJvb2xlYW59IHtcclxuICAgICAgdmFyIGVtYWlsID0gY29udHJvbC52YWx1ZTtcclxuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgIGlmKCFyZS50ZXN0KGVtYWlsKSl7XHJcbiAgICAgIHJldHVybiB7aW52YWxpZEVtYWlsOnRydWV9O1xyXG4gICAgICB9ICAgICAgICAgICAgICBcclxuICBcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
