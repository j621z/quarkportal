System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            CustomerService = (function () {
                function CustomerService(_http) {
                    this._http = _http;
                    this._customerUrl = 'http://quarkapidemo.azurewebsites.net/api/customer/';
                }
                CustomerService.prototype.getCustomers = function (cid) {
                    return this._http.get(this._customerUrl + cid.toString())
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.getCustomer = function (cid, id) {
                    return this.getCustomers(cid)
                        .map(function (customers) { return customers.find(function (c) { return c.id === id; }); });
                };
                CustomerService.prototype.getCountries = function () {
                    return this._http.get(this._customerUrl + 'getcountries')
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.createCustomer = function (cid, customer) {
                    var url = this._customerUrl + 'create/' + cid.toString();
                    var body = JSON.stringify(customer);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(url, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.updateCustomer = function (cid, customer, withaddress) {
                    if (withaddress === void 0) { withaddress = false; }
                    var url = this._customerUrl + 'update/' + cid.toString() + '?withaddress=' + withaddress;
                    var body = JSON.stringify(customer);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(url, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.handleError = function (error) {
                    // to do: send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
//# sourceMappingURL=customer.service.js.map