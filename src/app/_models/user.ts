export class User {
    id!: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    role?: string;
    token?: string;
    address?: string;
    productionDate?: Date;
    printerActive!: boolean;
    printerModel?: string;
    batchRequiredTime!: number;
    shippedQuantity?: number;
    latestShippedDate?: Date;
    needsFilament!: boolean;
    filamentAmountRecieved?: number;
}
