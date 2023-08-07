const axios = require('axios');
require("dotenv").config();

const ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY = process.env.ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY;
const url = `https://polygonzkevm-mainnet.g.alchemy.com/v2/${ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY}`;

const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_newBlockFilter',
    params: []
};

axios.post(url, payload)
    .then(response => {
        console.log(response.data.result);
    })
    .catch(error => {
        console.error(error);
})