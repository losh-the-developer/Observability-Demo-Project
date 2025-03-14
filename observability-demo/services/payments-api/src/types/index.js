export interface PaymentRequest {
    amount: number;
    currency: string;
    orderId: string;
}

export interface PaymentResponse {
    status: string;
    transactionId: string;
    message?: string;
}