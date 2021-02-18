import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Customer extends DominosFormat{
    constructor(parameters) {
        super();
        this.init=parameters;
    }

    firstName   =''
    lastName    =''
    email       =''
    address     =''
    phone       =''
    
};

export {
    Customer as default,
    Customer
}
