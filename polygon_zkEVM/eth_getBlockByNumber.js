/**
 * @dev Returns information about a block on Polygon zkEVM by block number.
 */

const { Alchemy, Network } = require("alchemy-sdk");
require("dotenv").config();

const ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY = process.env.ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY;
const settings = {
    apiKey: ALCHEMY_POLYGON_MAINNET_ZKEVM_API_KEY,
    network: Network.POLYGONZKEVM_MAINNET,
}

const alchemy = new Alchemy(settings);

alchemy.core.getBlock(0x3f75c8).then(console.log);