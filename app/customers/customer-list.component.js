System.register(['@angular/core', '@angular/router', './customer.service', './customer-hideunregister.pipe', './customer-update.component', './customer-form.service', '../validation/control-messages.component'], function(exports_1, context_1) {
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
    var core_1, router_1, customer_service_1, customer_hideunregister_pipe_1, customer_update_component_1, customer_form_service_1, control_messages_component_1;
    var CustomerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (customer_hideunregister_pipe_1_1) {
                customer_hideunregister_pipe_1 = customer_hideunregister_pipe_1_1;
            },
            function (customer_update_component_1_1) {
                customer_update_component_1 = customer_update_component_1_1;
            },
            function (customer_form_service_1_1) {
                customer_form_service_1 = customer_form_service_1_1;
            },
            function (control_messages_component_1_1) {
                control_messages_component_1 = control_messages_component_1_1;
            }],
        execute: function() {
            CustomerListComponent = (function () {
                function CustomerListComponent(_customerService, _routeSegment, _formBuilder) {
                    this._customerService = _customerService;
                    this._routeSegment = _routeSegment;
                    this._formBuilder = _formBuilder;
                    this.pageTitle = 'My Customers';
                    this.showCustomer = false;
                    this.listFilterOut = '';
                    this.filterList = false;
                    this.showEmptyForm = true;
                    this.hideMessage = false;
                    this.startFade = false;
                    this.cid = parseInt(_routeSegment.getParam('id'));
                    this.customerForm = _formBuilder.createForm(null);
                    this.getCountries();
                    this.updateMsgs = [];
                }
                CustomerListComponent.prototype.ngOnInit = function () {
                    this.customers = this.getCustomers();
                };
                CustomerListComponent.prototype.getCustomers = function () {
                    var _this = this;
                    this._customerService.getCustomers(this.cid)
                        .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
                    return this.customers;
                };
                CustomerListComponent.prototype.getCountries = function () {
                    var _this = this;
                    this._customerService.getCountries()
                        .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; });
                };
                CustomerListComponent.prototype.showCreateCustomer = function () {
                    if (!this.showCustomer) {
                        this.showCustomer = true;
                    }
                };
                CustomerListComponent.prototype.hideCreateCustomer = function () {
                    this.showCustomer = false;
                };
                CustomerListComponent.prototype.setFilter = function () {
                    this.filterList = !this.filterList;
                    if (this.filterList) {
                        this.listFilterOut = 'unregistered';
                    }
                    else {
                        this.listFilterOut = '';
                    }
                };
                CustomerListComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (this.customerForm.dirty && this.customerForm.valid) {
                        console.log("Email: " + this.customerForm.value.email);
                        this._customerService.createCustomer(this.cid, this.customerForm.value)
                            .subscribe(function (data) {
                            _this.dataResponse = data;
                        });
                    }
                    // reset form
                    this.showEmptyForm = false;
                    setTimeout(function () {
                        _this.reset();
                        _this.showEmptyForm = true;
                    });
                };
                CustomerListComponent.prototype.reset = function () {
                    this.customerForm = this._formBuilder.createForm(null);
                };
                CustomerListComponent.prototype.openCustomerModal = function (customer) {
                    this.showCustomer = false;
                    this.updateModal.ModalIsVisible = true;
                    this.updateModal.cId = this.cid;
                    this.updateModal.countries = this.countries;
                    this.updateModal.customer = customer;
                    this.updateModal.createUpdateForm(customer);
                };
                CustomerListComponent.prototype.updateAll = function () {
                    var _this = this;
                    for (var i = 0; i < this.customers.length; i++) {
                        console.log(("email: " + i) + (" customerid : " + this.customers[i].id) + (" email: " + this.customers[i].email));
                        this._customerService.updateCustomer(this.cid, this.customers[i], false)
                            .subscribe(function (data) {
                            _this.errorMessage = data.message;
                            _this.dataResponse = JSON.stringify(data.message);
                            _this.showFade(data, i);
                            // this.startFade = true;
                            // setTimeout(() => {
                            //     this.errorMessage = data.message;
                            //     this.hideMessage = true;
                            // }, 0);
                            console.log("response: " + _this.dataResponse);
                            _this.dataResponse = data.result;
                        }, function (err) {
                            console.error('There was an error: ' + err);
                        }, function () {
                            console.log('complete');
                        });
                        this.updateMsgs.push(this.dataResponse);
                    }
                    //alert('out of loop');
                };
                CustomerListComponent.prototype.showFade = function (data, k) {
                    var _this = this;
                    this.startFade = true;
                    setTimeout(function () {
                        //this.updateAll;
                        _this.errorMessage = data.message;
                        _this.hideMessage = true;
                    }, k * 5000);
                };
                __decorate([
                    core_1.ViewChild(customer_update_component_1.CustomerUpdateComponent), 
                    __metadata('design:type', customer_update_component_1.CustomerUpdateComponent)
                ], CustomerListComponent.prototype, "updateModal", void 0);
                CustomerListComponent = __decorate([
                    core_1.Component({
                        selector: 'q-customers',
                        templateUrl: 'app/customers/customer-list.component.html',
                        pipes: [customer_hideunregister_pipe_1.CustomerHideUnregisteredPipe],
                        directives: [control_messages_component_1.ControlMessages, customer_update_component_1.CustomerUpdateComponent]
                    }), 
                    __metadata('design:paramtypes', [customer_service_1.CustomerService, router_1.RouteSegment, customer_form_service_1.CustomerFormService])
                ], CustomerListComponent);
                return CustomerListComponent;
            }());
            exports_1("CustomerListComponent", CustomerListComponent);
        }
    }
});
//# sourceMappingURL=customer-list.component.js.map