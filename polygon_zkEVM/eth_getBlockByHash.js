/**
 * @dev Returns information about a block on Polygon zkEVM by block hash.
 */

const { Alchemy, Network } = require("alchemy-sdk");
require("dotenv").config();

const ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY = process.env.ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY;
const settings = {
    apiKey: ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY,
    network: Network.POLYGONZKEVM_MAINNET,
}

const alchemy = new Alchemy(settings);

alchemy.core.getBlock("0x5e68202cab294f6f4ba0fee4838d8a8fd8c3542aba31417830eeaa4b6b864e7a")
    .then(console.log);