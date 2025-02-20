# Slip2Sure JS

## Install
```sh
npm i git+
yarn add git+
pnpm add git+
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