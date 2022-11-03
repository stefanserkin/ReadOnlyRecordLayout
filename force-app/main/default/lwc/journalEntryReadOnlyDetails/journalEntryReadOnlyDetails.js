import { LightningElement, api } from 'lwc';

export default class JournalEntryReadOnlyDetails extends LightningElement {
    @api recordId;
    objectApiName = 'TREX1__Journal_Entry__c';

    activeSections = [
        'Information', 
        'Descriptions', 
        'RelatedTo', 
        'PaymentInformationARDebits', 
        'LinkedChargeAmounts', 
        'BillingAndPaymentInfo', 
        'ReversalAndRefundInfo', 
        'RevenueRecognition', 
        'DailyGLSummary'
    ];

}