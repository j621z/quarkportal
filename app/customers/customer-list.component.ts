import { Component, OnInit, ViewChild }  from '@angular/core';
import { ControlGroup } from '@angular/common';
import { RouteSegment } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';
import { CustomerHideUnregisteredPipe} from './customer-hideunregister.pipe';
import { ISelectOption } from '../shared/select-option';
import { CustomerUpdateComponent } from './customer-update.component';
import { CustomerFormService } from './customer-form.service';
import { ControlMessages } from '../validation/control-messages.component';

@Component({
    selector: 'q-customers',
    templateUrl: 'app/customers/customer-list.component.html',
    pipes: [CustomerHideUnregisteredPipe],
    directives: [ControlMessages, CustomerUpdateComponent]
})

export class CustomerListComponent implements OnInit {
    pageTitle: string = 'My Customers';
    errorMessage: string;
    customers: ICustomer[];
    countries: ISelectOption[];
    cid: number; //=10012 of logged on admin
    showCustomer: boolean = false;
    listFilterOut: string = '';
    filterList: boolean = false;
    customerForm: ControlGroup;
    showEmptyForm: boolean = true;
    dataResponse: any;
    hideMessage: boolean = false;
    startFade: boolean = false;

    updateMsgs: string[]; 

    @ViewChild(CustomerUpdateComponent) updateModal: CustomerUpdateComponent;

    constructor(private _customerService: CustomerService,
        private _routeSegment: RouteSegment,
        private _formBuilder: CustomerFormService
    ) {
        this.cid = parseInt(_routeSegment.getParam('id'));
        this.customerForm = _formBuilder.createForm(null);
        this.getCountries();
        this.updateMsgs = [];
    }

    ngOnInit() {
        this.customers = this.getCustomers();
    }

    getCustomers(): ICustomer[] {
        this._customerService.getCustomers(this.cid)
            .subscribe(
            customers => this.customers = customers,
            error => this.errorMessage = <any>error);
        return this.customers;
    }

    getCountries() {
        this._customerService.getCountries()
            .subscribe(
            countries => this.countries = countries,
            error => this.errorMessage = <any>error);
    }

    showCreateCustomer(): void {
        if (!this.showCustomer) {
            this.showCustomer = true;
        }
    }

    hideCreateCustomer() {
        this.showCustomer = false;
    }

    setFilter(): void {
        this.filterList = !this.filterList;

        if (this.filterList) {
            this.listFilterOut = 'unregistered';
        } else {
            this.listFilterOut = '';
        }
    }

    onSubmit(value: any) {
        if (this.customerForm.dirty && this.customerForm.valid) {
            console.log(`Email: ${this.customerForm.value.email}`);

            this._customerService.createCustomer(this.cid, this.customerForm.value)
                .subscribe(
                    data => {
                        this.dataResponse = data
                });
            
            //this.customers = null;
            //this.customers = this.getCustomers();
        }

        // reset form
        this.showEmptyForm = false
        setTimeout(() => {
            this.reset()
            this.showEmptyForm = true;
        });

        
    }

    reset() {
        this.customerForm = this._formBuilder.createForm(null);
    }

    openCustomerModal(customer: ICustomer) {
        this.showCustomer = false;
        this.updateModal.ModalIsVisible = true;
        this.updateModal.cId = this.cid;
        this.updateModal.countries = this.countries;
        this.updateModal.customer = customer;
        this.updateModal.createUpdateForm(customer);
    }


    updateAll() {   
    
        for (var i = 0; i <this.customers.length; i++) {
            console.log(`email: ${i}` + ` customerid : ${this.customers[i].id}` + ` email: ${this.customers[i].email}` );

            this._customerService.updateCustomer(this.cid, this.customers[i], false)
                .subscribe(
                    data => {
                        this.errorMessage = data.message;
                        this.dataResponse = JSON.stringify(data.message);

                        this.showFade(data, i);
                       
                       // this.startFade = true;
                       // setTimeout(() => {
                       //     this.errorMessage = data.message;
                       //     this.hideMessage = true;
                       // }, 0);

                    
                       

                        console.log(`response: ${this.dataResponse}`);
                        this.dataResponse = data.result;                    
                    },
                    err => {
                        console.error('There was an error: ' + err);
                    },
                    () =>{
                        console.log('complete');
                        
                    }); 
            
            this.updateMsgs.push(this.dataResponse);
                              
        }
        
        //alert('out of loop');
    }

    showFade(data: any, k: number)
    {       
        this.startFade = true;
        setTimeout(() => {
            //this.updateAll;
            this.errorMessage = data.message;
            this.hideMessage = true;
        }, k * 5000);
    }
}