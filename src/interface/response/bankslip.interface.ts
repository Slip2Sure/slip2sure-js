import { ISlip2SureResponse } from "../response.interface"

interface ISlip2SureBankSlipAccount {
    displayName: string
    proxy: {
        type: "BANKAC"
        value: string
    }
    account: {
        type: "NATID" | "MSISDN" | "EWALLETID" | "BILLERID"
        value: string
    }
}

export interface ISlip2SureBankslip extends ISlip2SureResponse {
    info: {
        payload: string
        transRef: string
        ref1: string
        ref2: string
        ref3: any
        transDate: string
        transTime: string
        transDateTime: string
        sender: ISlip2SureBankSlipAccount
        receiver: ISlip2SureBankSlipAccount
        amount: number
        transFeeAmount: number
        paidLocalAmount: number
        paidLocalCurrency: string
        countryCode: string
        toMerchantId: string
    }
}