import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/Rx';   // Load all features

import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerService } from './customers/customer.service';
import { CustomerFormService } from './customers/customer-form.service';
import { WelcomeComponent } from './home/welcome.component';

@Component({
    selector: 'q-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/customers']"> My Customers</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CustomerService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS,
                CustomerFormService]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/customers/:id', component: CustomerListComponent }
])
export class AppComponent {
    pageTitle: string = 'Quark Portal';
}
