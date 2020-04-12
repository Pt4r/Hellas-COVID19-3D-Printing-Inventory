export class Shipment {
    id!: string;
    quantity!: number;
    minQuantity!: number;
    fileName?: string;
    trackingNumber?: string;
    shippingCompany?: string;
    dateShipped!: Date;
    recieved!: boolean;
    needsFilament!: boolean;
}
