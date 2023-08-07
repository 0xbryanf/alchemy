const axios = require('axios');
require("dotenv").config();

const ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY = process.env.ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY;
const url = `https://polygonzkevm-mainnet.g.alchemy.com/v2/${ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY}`;

const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBlockTransactionCountByNumber',
    params: ['0x3f775b']
};

axios.post(url, payload)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
})