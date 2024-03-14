"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_HOST = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === "production";
exports.API_HOST = (_a = process.env.API_HOST) !== null && _a !== void 0 ? _a : exports.__prod__;
"http://localhost:4000/";
//# sourceMappingURL=constants.js.map