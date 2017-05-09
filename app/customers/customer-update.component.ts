import { Component } from '@angular/core';

import { ControlGroup } from '@angular/common';
import { ControlMessages } from '../validation/control-messages.component';
import { ValidationService } from '../validation/validation.service';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';
import { CustomerFormService } from './customer-form.service';

@Component({
    selector: 'customer-modal',
    templateUrl: 'app/customers/customer-update.component.html',
    directives: [ControlMessages]
})

export class CustomerUpdateComponent {
    public ModalIsVisible: boolean = false;
    public cId: number = 0;
    public countries: any[];
    public customer: any;
    
    message: string = "Your information has been updated";
    customerForm: ControlGroup;
    dataResponse: any;
    showConfirmationElements: boolean = false;
    showForm: boolean = true;

    constructor(private _customerService: CustomerService,
                private _formBuilder: CustomerFormService) {
                
    }

    onSubmit(value: any){
        if ((this.customerForm.dirty && this.customerForm.valid) ||
            (this.customerForm.untouched && this.customerForm.valid)) {
            this._customerService.updateCustomer(this.cId, this.customerForm.value, true)
                .subscribe(
                    data => { 
                        this.dataResponse = JSON.stringify(data);
                        console.log(`response: ${this.dataResponse}`);
                    });
            
            // reset form
            this.showForm = false
            setTimeout(() => {
                this.message = "Successfully updated " + this.customer.email;
                this.showConfirmationElements = true;
            });
            
            
        }
    }

    closeCustomerModal() {
        this.ModalIsVisible = false;
        this.showConfirmationElements = false;
        this.showForm = true;

    }

    createUpdateForm(customer: ICustomer){
        this.customerForm = this._formBuilder.createForm(this.customer);
    }

    
}

