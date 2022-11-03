import { LightningElement, api } from 'lwc';
//import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class JournalEntryDetailsReadOnly extends LightningElement {
    @api recordId;
}