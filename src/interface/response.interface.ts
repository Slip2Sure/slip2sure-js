export interface ISlip2SureResponse {
    info: {
        transaction_id: string
        paid_at: string
        amount: number
        account_from_mobile: string | null
        account_to_mobile: string
    }
    credit: {
        before: number
        usage: number
        after: number
    }
    is_exist: boolean
}
