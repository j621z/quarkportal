/* Defines the customer entity */
export interface ICustomer {
    id: number;
    accountId: number;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    customerRoleId: number;
    status: string;
    delegatedAdmin: boolean;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    countryId: number;
    businessPhone: string;
    mobilePhone: string;
}

