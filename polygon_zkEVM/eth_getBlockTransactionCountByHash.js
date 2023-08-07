const axios = require('axios');
require("dotenv").config();

const ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY = process.env.ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY;
const url = `https://polygonzkevm-mainnet.g.alchemy.com/v2/${ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY}`;

const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBlockTransactionCountByHash',
    params: [
        "0x5e68202cab294f6f4ba0fee4838d8a8fd8c3542aba31417830eeaa4b6b864e7a"
    ]
};

axios.post(url, payload)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
})