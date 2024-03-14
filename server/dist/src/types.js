"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["CRITICAL"] = 5] = "CRITICAL";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["NONE"] = 6] = "NONE";
    LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
//# sourceMappingURL=types.js.map