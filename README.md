# Slip2Sure JS
SDK สำหรับเชื่อมต่อกับระบบ [Slip2Sure](https://slip2sure.com) Service. (NodeJS)

หากต้องการอ่าน API Document สามารถอ่านได้ที่ [API Document](https://app.slip2sure.com/user/api/docs)

## Install
```sh
npm i git+https://github.com/Slip2Sure/slip2sure-js
yarn add git+https://github.com/Slip2Sure/slip2sure-js
pnpm add git+https://github.com/Slip2Sure/slip2sure-js
```

## Usage
```js
import Slip2SureAPI from "../src"
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

## LICENSE
[MIT](./LICENSE)
