import {  PipeTransform, Pipe } from '@angular/core';
import { ICustomer } from './customer';

@Pipe({
    name: 'customerFilter'
})
export class CustomerHideUnregisteredPipe implements PipeTransform{

    transform(value: ICustomer[], args: string[]): ICustomer[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((customer: ICustomer) =>
            customer.status.toLocaleLowerCase().indexOf(filter) === -1) : value;
    }
}
