# Slip2Sure JS
SDK สำหรับเชื่อมต่อกับระบบ [Slip2Sure](https://slip2sure.com) Service. (NodeJS)

หากต้องการอ่าน API Document สามารถอ่านได้ที่
- [API Document (Truemoney)](https://app.slip2sure.com/user/api/docs/truemoney)
- [API Document (Bank slip)](https://app.slip2sure.com/user/api/docs/bankslip)
- [Error code](https://app.slip2sure.com/user/api/docs/errorcode)

## Install
```sh
npm i git+https://github.com/Slip2Sure/slip2sure-js
yarn add git+https://github.com/Slip2Sure/slip2sure-js
pnpm add git+https://github.com/Slip2Sure/slip2sure-js
```

## Example 
### Truemoney
```js
import Slip2SureAPI from "slip2sure-js"
import fs from "fs"

async function main(){
    // Load file
    const file = fs.readFileSync("FILE_PATH") // Or you can use expressJS (Mutler,express-fileupload) for integration

    // Init Slip2Sure API
    const client = new Slip2SureAPI("YOUR_API_KEY")
    // Request it
    const result = await client.scanTruemoneySlip(file)

    console.log(`Response data: `, result)
}

main()
```

### Bank Slip
```js
import Slip2SureAPI from "./src"

async function main(){
    // Init Slip2Sure API
     const client = new Slip2SureAPI("YOUR_API_KEY")
    // Request it
    const result = await client.scanBankSlipByPayload("YOUR_QR_CODE")

    console.log(`Response data: `, result)
}

main()
```


## LICENSE
[MIT](./LICENSE)
