System.register(['@angular/core', '@angular/common', '../validation/validation.service'], function(exports_1, context_1) {
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
    var core_1, common_1, validation_service_1;
    var CustomerFormService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            }],
        execute: function() {
            CustomerFormService = (function () {
                function CustomerFormService(_formBuilder) {
                    this._formBuilder = _formBuilder;
                }
                CustomerFormService.prototype.createForm = function (customer) {
                    if (customer) {
                        this.customer = customer;
                        if (this.customer.countryId === 0)
                            this.customer.countryId = 32;
                        return this.customerForm = this._formBuilder.group({
                            'id': [this.customer.id],
                            'fullName': [this.customer.fullName],
                            'status': [this.customer.status],
                            'customerRoleId': [this.customer.customerRoleId],
                            'delegatedAdmin': [this.customer.delegatedAdmin],
                            'businessPhone': [this.customer.businessPhone, common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.phoneValidator])],
                            'mobilePhone': [this.customer.mobilePhone],
                            'address1': [this.customer.address1, common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                            'address2': [this.customer.address2],
                            'city': [this.customer.city, common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                            'state': [this.customer.state],
                            'zipCode': [this.customer.zipCode],
                            'countryId': [this.customer.countryId]
                        });
                    }
                    else {
                        this.setUpDefaultValues();
                    }
                    return this.customerForm = this._formBuilder.group({
                        'firstName': [this.customer.firstName, common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        'lastName': [this.customer.lastName, common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        'email': [this.customer.email, common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
                        'customerRoleId': [this.customer.customerRoleId],
                        'delegatedAdmin': [this.customer.delegatedAdmin],
                        'businessPhone': [this.customer.businessPhone, common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.phoneValidator])],
                        'mobilePhone': [this.customer.mobilePhone],
                        'address1': [this.customer.address1, common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                        'address2': [this.customer.address2],
                        'city': [this.customer.city, common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        'state': [this.customer.state],
                        'zipCode': [this.customer.zipCode],
                        'countryId': [this.customer.countryId]
                    });
                };
                CustomerFormService.prototype.setUpDefaultValues = function () {
                    this.customer = { id: 0, accountId: 0, delegatedAdmin: false, customerRoleId: 1,
                        fullName: '', firstName: '', lastName: '', status: '',
                        email: '', address1: '', address2: '', city: '', state: '',
                        countryId: 32, zipCode: '', businessPhone: '', mobilePhone: '', };
                };
                CustomerFormService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], CustomerFormService);
                return CustomerFormService;
            }());
            exports_1("CustomerFormService", CustomerFormService);
        }
    }
});
//# sourceMappingURL=customer-form.service.js.map