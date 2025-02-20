export interface ISlip2SureResponse {
    info: {
        transaction_id: string
        paid_at: string
        amount: number
        sender_mobile: any
        reciever_mobile: string
    }
    credit: {
        before: number
        usage: number
        after: number
    }
    is_exist: boolean
}