import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ICustomer } from './customer';
import { ISelectOption } from '../shared/select-option';

@Injectable()
export class CustomerService {
    private _customerUrl = 'http://quarkapidemo.azurewebsites.net/api/customer/';  
    
    constructor(private _http: Http) { }

    getCustomers(cid: number): Observable<ICustomer[]> {
        return this._http.get(this._customerUrl + cid.toString())
            .map((response: Response) => <ICustomer[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCustomer(cid: number, id: number): Observable<ICustomer> {
        return this.getCustomers(cid)
            .map((customers: ICustomer[]) => customers.find(c => c.id === id));
    }

    getCountries(): Observable<ISelectOption[]> {
        return this._http.get(this._customerUrl + 'getcountries')
            .map((response: Response) => <ISelectOption[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createCustomer(cid: number, customer: ICustomer) {

        let url = this._customerUrl +  'create/' + cid.toString(); 
        let body = JSON.stringify(customer);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(url, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateCustomer(cid: number, customer: ICustomer, withaddress: boolean = false){
        let url = this._customerUrl +  'update/' + cid.toString() + '?withaddress=' + withaddress
        let body = JSON.stringify(customer);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(url, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // to do: send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
    