export interface OrderRequest {
    productId: string;
    quantity: number;
    customerId: string;
}

export interface OrderResponse {
    orderId: string;
    status: string;
    createdAt: Date;
}