"use strict";
var router_1 = require('@angular/router');
var routes = [
    { path: 'crisis-center', component: CrisisCenterComponent },
    { path: 'heroes', component: HeroListComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU5RCxJQUFNLE1BQU0sR0FBaUI7SUFDekIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtDQUNuRCxDQUFDO0FBRVcsMEJBQWtCLEdBQUc7SUFDOUIsc0JBQWEsQ0FBQyxNQUFNLENBQUM7Q0FDeEIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb3ZpZGVSb3V0ZXIsIFJvdXRlckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICAgIHsgcGF0aDogJ2NyaXNpcy1jZW50ZXInLCBjb21wb25lbnQ6IENyaXNpc0NlbnRlckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2hlcm9lcycsIGNvbXBvbmVudDogSGVyb0xpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdoZXJvLzppZCcsIGNvbXBvbmVudDogSGVyb0RldGFpbENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlclByb3ZpZGVycyA9IFtcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcbl07XG4iXX0=
