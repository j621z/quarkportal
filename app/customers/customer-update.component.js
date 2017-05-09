System.register(['@angular/core', '../validation/control-messages.component', './customer.service', './customer-form.service'], function(exports_1, context_1) {
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
    var core_1, control_messages_component_1, customer_service_1, customer_form_service_1;
    var CustomerUpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (control_messages_component_1_1) {
                control_messages_component_1 = control_messages_component_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (customer_form_service_1_1) {
                customer_form_service_1 = customer_form_service_1_1;
            }],
        execute: function() {
            CustomerUpdateComponent = (function () {
                function CustomerUpdateComponent(_customerService, _formBuilder) {
                    this._customerService = _customerService;
                    this._formBuilder = _formBuilder;
                    this.ModalIsVisible = false;
                    this.cId = 0;
                    this.message = "Your information has been updated";
                    this.showConfirmationElements = false;
                    this.showForm = true;
                }
                CustomerUpdateComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if ((this.customerForm.dirty && this.customerForm.valid) ||
                        (this.customerForm.untouched && this.customerForm.valid)) {
                        this._customerService.updateCustomer(this.cId, this.customerForm.value, true)
                            .subscribe(function (data) {
                            _this.dataResponse = JSON.stringify(data);
                            console.log("response: " + _this.dataResponse);
                        });
                        // reset form
                        this.showForm = false;
                        setTimeout(function () {
                            _this.message = "Successfully updated " + _this.customer.email;
                            _this.showConfirmationElements = true;
                        });
                    }
                };
                CustomerUpdateComponent.prototype.closeCustomerModal = function () {
                    this.ModalIsVisible = false;
                    this.showConfirmationElements = false;
                    this.showForm = true;
                };
                CustomerUpdateComponent.prototype.createUpdateForm = function (customer) {
                    this.customerForm = this._formBuilder.createForm(this.customer);
                };
                CustomerUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-modal',
                        templateUrl: 'app/customers/customer-update.component.html',
                        directives: [control_messages_component_1.ControlMessages]
                    }), 
                    __metadata('design:paramtypes', [customer_service_1.CustomerService, customer_form_service_1.CustomerFormService])
                ], CustomerUpdateComponent);
                return CustomerUpdateComponent;
            }());
            exports_1("CustomerUpdateComponent", CustomerUpdateComponent);
        }
    }
});
//# sourceMappingURL=customer-update.component.js.map