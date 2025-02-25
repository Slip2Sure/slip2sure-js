export interface ISlip2SureResponse {
    credit: {
        before: number
        usage: number
        after: number
    }
    is_exist: boolean
}
