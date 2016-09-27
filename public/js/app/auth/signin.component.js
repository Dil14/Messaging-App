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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var error_service_1 = require('../error/error.service');
var SignInComponent = (function () {
    function SignInComponent(_fb, _authServices, _router, _errorService) {
        this._fb = _fb;
        this._authServices = _authServices;
        this._router = _router;
        this._errorService = _errorService;
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authServices.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.obj);
            localStorage.setItem('userId', data._id);
            _this._router.navigateByUrl('/');
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SignInComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SignInComponent.prototype.isEmail = function (control) {
        var email = control.value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            return { invalidEmail: true };
        }
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [ngFormControl]=\"myForm.find('email')\" class=\"form-control\" id=\"email\"/>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\"  [ngFormControl]=\"myForm.find('password')\" class=\"form-control\" id=\"password\"/>\n    </div>\n    <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"! myForm.valid\">SignIn</button>\n    </div>\n   </form>\n    </section>"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthServices, router_1.Router, error_service_1.ErrorService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHVCQUEwRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBMkIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1Qyw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQXFCcEQ7SUFJSSx5QkFBb0IsR0FBZSxFQUFTLGFBQTBCLEVBQVMsT0FBYyxFQUNyRixhQUEwQjtRQURkLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDckYsa0JBQWEsR0FBYixhQUFhLENBQWE7SUFBRSxDQUFDO0lBRXJDLGtDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZELElBQU0sSUFBSSxHQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDRixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsT0FBTyxDQUN4QjtvQkFDSSxtQkFBVSxDQUFDLFFBQVE7b0JBQ25CLElBQUksQ0FBQyxPQUFPO2lCQUNmLENBQ0osQ0FBQztZQUNGLFFBQVEsRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssaUNBQU8sR0FBZixVQUFnQixPQUFlO1FBQzNCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxFQUFFLEdBQUcsd0pBQXdKLENBQUM7UUFDbEssRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNwQixNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUM7UUFDM0IsQ0FBQztJQUVILENBQUM7SUExREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFdBQVc7WUFDcEIsUUFBUSxFQUFDLDRxQkFlRTtTQUNkLENBQUM7O3VCQUFBO0lBMENGLHNCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQXpDWSx1QkFBZSxrQkF5QzNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsVmFsaWRhdG9ycyxDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHtBdXRoU2VydmljZXN9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uL2Vycm9yL2Vycm9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbXktc2lnbnVwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiISBteUZvcm0udmFsaWRcIj5TaWduSW48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbkluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIG15Rm9ybTpDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIscHJpdmF0ZSBfYXV0aFNlcnZpY2VzOkF1dGhTZXJ2aWNlcyxwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxyXG4gICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOkVycm9yU2VydmljZSl7fVxyXG5cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICBjb25zdCB1c2VyPW5ldyBVc2VyKHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgIHRoaXMuX2F1dGhTZXJ2aWNlcy5zaWduaW4odXNlcilcclxuICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgZGF0YSA9PntcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyxkYXRhLm9iaik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLm15Rm9ybT10aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOlsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1haWxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBwcml2YXRlIGlzRW1haWwoY29udHJvbDpDb250cm9sKTp7W3M6c3RyaW5nXTpib29sZWFufSB7XHJcbiAgICAgIHZhciBlbWFpbCA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICBpZighcmUudGVzdChlbWFpbCkpe1xyXG4gICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDp0cnVlfTtcclxuICAgICAgfSAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
