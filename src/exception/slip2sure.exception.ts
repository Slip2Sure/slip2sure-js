export default class Slip2SureError extends Error {
    errorCode: string
    errorMessage: string;

    constructor(result: string, message: string){
        super(`[${result}] ${message}`)
        this.errorCode = result;
        this.errorMessage = message; 
    }
}