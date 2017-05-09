import { Injectable }  from '@angular/core';
import { FormBuilder, Validators, ControlGroup } from '@angular/common';
import { ValidationService } from '../validation/validation.service';
import { ICustomer } from './customer';

@Injectable()
export class CustomerFormService {    
    customerForm: ControlGroup;
    customer: ICustomer;

    constructor(private _formBuilder: FormBuilder) {
    }

    activate: (title?: string) => Promise<boolean>;

    createForm(customer : ICustomer) :ControlGroup {  
        if (customer) {
            this.customer = customer;
            if(this.customer.countryId === 0 ) this.customer.countryId = 32;
            return this.customerForm = this._formBuilder.group({
                'id': [this.customer.id],   
                'fullName': [this.customer.fullName],
                'status': [this.customer.status],
                'customerRoleId': [this.customer.customerRoleId],
                'delegatedAdmin': [this.customer.delegatedAdmin],
                'businessPhone': [this.customer.businessPhone, Validators.compose([Validators.required, ValidationService.phoneValidator])],
                'mobilePhone': [this.customer.mobilePhone],
                'address1': [this.customer.address1, Validators.compose([Validators.required, Validators.minLength(6)])],
                'address2': [this.customer.address2],
                'city': [this.customer.city, Validators.compose([Validators.required, Validators.minLength(3)])],
                'state': [this.customer.state],
                'zipCode': [this.customer.zipCode],
                'countryId': [this.customer.countryId]
            });
            
        }
        else {
            this.setUpDefaultValues();
        }

        return this.customerForm = this._formBuilder.group({
            'firstName': [this.customer.firstName, Validators.compose([Validators.required, Validators.minLength(3)])],
            'lastName': [this.customer.lastName, Validators.compose([Validators.required, Validators.minLength(3)])],
            'email': [this.customer.email, Validators.compose([Validators.required, ValidationService.emailValidator])],
            'customerRoleId': [this.customer.customerRoleId],
            'delegatedAdmin': [this.customer.delegatedAdmin],
            'businessPhone': [this.customer.businessPhone, Validators.compose([Validators.required, ValidationService.phoneValidator])],
            'mobilePhone': [this.customer.mobilePhone],
            'address1': [this.customer.address1, Validators.compose([Validators.required, Validators.minLength(6)])],
            'address2': [this.customer.address2],
            'city': [this.customer.city, Validators.compose([Validators.required, Validators.minLength(3)])],
            'state': [this.customer.state],
            'zipCode': [this.customer.zipCode],
            'countryId': [this.customer.countryId]
        });
    }

    setUpDefaultValues(){
        this.customer = { id: 0, accountId: 0, delegatedAdmin: false,  customerRoleId: 1,
                          fullName: '', firstName: '', lastName: '', status: '',
                          email: '', address1: '', address2: '', city: '', state: '',
                          countryId: 32, zipCode: '', businessPhone: '', mobilePhone: '',}
    }
}