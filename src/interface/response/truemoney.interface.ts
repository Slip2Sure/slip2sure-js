import { ISlip2SureResponse } from "../response.interface"

export interface ISlip2SureTruemoney extends ISlip2SureResponse {
    info: {
        transaction_id: string
        paid_at: string
        amount: number
        account_from_mobile: string | null
        account_to_mobile: string
    }
    
}