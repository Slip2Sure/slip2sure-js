import Slip2SureError from "./exception/slip2sure.exception";
import { FormData, fetch } from "undici";
import imageType from 'image-type';
import { randomUUID } from "crypto";
import { ISlip2SureTruemoney } from "./interface/response/truemoney.interface";
import { ISlip2SureBankslip } from "./interface/response/bankslip.interface";

export default class Slip2SureAPI {
    private readonly API_URL: string = "https://api.slip2sure.com/api/v0"
    private readonly API_KEY: string;

    constructor(api_key: string) {
        this.API_KEY = api_key
    }

    async scanTruemoneySlip(raw: Buffer): Promise<ISlip2SureTruemoney> {
        // Get file extension
        const ext = await imageType(raw)
        if (!ext || !ext.mime.startsWith("image/")) throw new Error("Please upload image.")

        const form = new FormData()
        form.append("image", new Blob([raw], { type: ext.mime }), `${randomUUID()}.${ext.ext}`)

        const resp = await fetch(`${this.API_URL}/truemoney/v1/verify`, {
            method: "POST",
            body: form,
            headers: {
                "x-api-key": this.API_KEY,
            }

        });
        const js = await resp.json() as ISlip2SureTruemoney & { result: string; message: string; }
        if (resp.status !== 200) {
            throw new Slip2SureError(js.result, js.message)
        }

        return js;
    }

    async scanBankSlipByPayload(payload: string): Promise<ISlip2SureBankslip> {
        const resp = await fetch(`${this.API_URL}/bank/v0/verifyByPayload`, {
            method: "POST",
            body: JSON.stringify({ payload }),
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.API_KEY,
            }

        });
        const js = await resp.json() as ISlip2SureBankslip & { result: string; message: string; }
        if (resp.status !== 200) {
            throw new Slip2SureError(js.result, js.message)
        }

        return js;
    }
}