"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillStatus = exports.TOKEN_SYMBOLS_MAP = exports.CHAIN_IDs = void 0;
var constants_1 = require("@across-protocol/constants");
Object.defineProperty(exports, "CHAIN_IDs", { enumerable: true, get: function () { return constants_1.CHAIN_IDs; } });
Object.defineProperty(exports, "TOKEN_SYMBOLS_MAP", { enumerable: true, get: function () { return constants_1.TOKEN_SYMBOLS_MAP; } });
exports.FillStatus = {
    Unfilled: 0,
    RequestedSlowFill: 1,
    Filled: 2,
};
