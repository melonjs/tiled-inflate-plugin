import { plugin, utils } from "melonjs";
import { Base64 } from "js-base64";
import pako from "pako";

/**
 * @classdesc
 * a melonJS plugin to enable loading and parsing of compressed Tiled map
 * @augments plugin.Base
 */
export class TiledInflatePlugin extends plugin.Base {
    constructor() {
        // call the super constructor
        super();

        // minimum melonJS version expected to run this plugin
        this.version = "15.1.0";

        /**
         * decompress and decode zlib/gzip data
         * @param {string} input - base64 encoded and compressed data
         * @param {string} format - compressed data format ("gzip","zlib", "zstd")
         * @returns {Uint32Array} decoded and decompressed data
         */
        utils.inflateb64 = (data, format) => {
            if (format === "gzip" || format === "zlib") {
                var output = pako.inflate(Base64.toUint8Array(data));
                return new Uint32Array(output.buffer);
            } else {
                // TODO: ztsd compression (since Tiled 1.3)
                throw new Error(format + " compressed TMX Tile Map not supported!");
            }
        };
    }
}
