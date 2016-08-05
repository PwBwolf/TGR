"use strict";
var router_1 = require('@angular/router');
var signup_component_1 = require("./signup/signup.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./pageNotFound/pageNotFound.component");
var forgotPassword_component_1 = require("./forgotPassword/forgotPassword.component");
var aboutSite_component_1 = require("./aboutSite/aboutSite.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'signup', component: signup_component_1.SignUpComponent },
    { path: 'forgot-password', component: forgotPassword_component_1.ForgotPasswordComponent },
    { path: 'about', component: aboutSite_component_1.AboutSite },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM5RCxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUU1RCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCx1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQUM5RSx5Q0FBc0MsMkNBQTJDLENBQUMsQ0FBQTtBQUNsRixvQ0FBd0IsaUNBQWlDLENBQUMsQ0FBQTtBQUcxRCxJQUFNLE1BQU0sR0FBaUI7SUFDekIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7SUFDOUQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrQkFBUyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUM7Q0FDbEQsQ0FBQztBQUVXLDBCQUFrQixHQUFHO0lBQzlCLHNCQUFhLENBQUMsTUFBTSxDQUFDO0NBQ3hCLENBQUMiLCJmaWxlIjoic3JjL2FwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25JbkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZU5vdEZvdW5kL3BhZ2VOb3RGb3VuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9yZ290UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL2ZvcmdvdFBhc3N3b3JkL2ZvcmdvdFBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBYm91dFNpdGV9IGZyb20gXCIuL2Fib3V0U2l0ZS9hYm91dFNpdGUuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWduVXBDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdmb3Jnb3QtcGFzc3dvcmQnLCBjb21wb25lbnQ6IEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXRTaXRlIH0sXG4gICAgeyBwYXRoOiAnKionLCBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZENvbXBvbmVudH1cbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXJQcm92aWRlcnMgPSBbXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG5dO1xuIl19
