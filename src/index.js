import { plugin, TMXUtils } from "melonjs";
import { Base64 } from "js-base64";
import pako from "pako";

/**
 * @classdesc
 * a melonJS plugin to enable loading and parsing of compressed Tiled map
 * @augments plugin.BasePlugin
 */
export class TiledInflatePlugin extends plugin.BasePlugin {
    constructor() {
        // call the super constructor
        super();

        // minimum melonJS version expected to run this plugin
        this.version = "15.2.1";

        /**
         * decompress and decode zlib/gzip data
         * @param {string} input - base64 encoded and compressed data
         * @param {string} format - compressed data format ("gzip","zlib", "zstd")
         * @returns {Uint32Array} decoded and decompressed data
         */
        TMXUtils.setInflateFunction((data, format) => {
            let output;
            switch (format) {
                case "gzip":
                case "zlib":
                    output = pako.inflate(Base64.toUint8Array(data));
                    break;
                case "zstd":
                default:
                    throw new Error(format + " compressed TMX Tile Map not supported!");
            }
            return new Uint32Array(output.buffer);
        });
    }
}
