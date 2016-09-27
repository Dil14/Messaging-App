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
var auth_service_1 = require('./auth.service');
var SignOutComponent = (function () {
    function SignOutComponent(_authServices, _router) {
        this._authServices = _authServices;
        this._router = _router;
    }
    SignOutComponent.prototype.onClick = function () {
        this._authServices.signout();
        this._router.navigate(['/auth/signin']);
    };
    SignOutComponent = __decorate([
        core_1.Component({
            selector: 'my-signout',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n    <button class=\"bnt btn-danger\" (click)=\"onClick()\">Signout</button>\n    </section>"
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthServices, router_1.Router])
    ], SignOutComponent);
    return SignOutComponent;
}());
exports.SignOutComponent = SignOutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2Qyw2QkFBMkIsZ0JBQWdCLENBQUMsQ0FBQTtBQVM1QztJQUVBLDBCQUFvQixhQUEwQixFQUFTLE9BQWM7UUFBakQsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFPO0lBQUUsQ0FBQztJQUVwRSxrQ0FBTyxHQUFQO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQWRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxZQUFZO1lBQ3JCLFFBQVEsRUFBQyxpSkFHRTtTQUNkLENBQUM7O3dCQUFBO0lBVUYsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdCQUFnQixtQkFTNUIsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ25vdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7QXV0aFNlcnZpY2VzfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteS1zaWdub3V0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYm50IGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25DbGljaygpXCI+U2lnbm91dDwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25PdXRDb21wb25lbnR7XHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZXM6QXV0aFNlcnZpY2VzLHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpe31cclxuXHJcbiAgICBvbkNsaWNrKCl7XHJcbiAgIHRoaXMuX2F1dGhTZXJ2aWNlcy5zaWdub3V0KCk7XHJcbiAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
